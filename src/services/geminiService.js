// Service to handle Google Gemini API interactions

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for Aakash's Portfolio website.
Your goal is to represent Aakash professionally, warmly, and helpfully to recruiters, clients, and visitors.
You should also answer general technical, programming, git, and web development questions accurately and clearly like ChatGPT or Gemini.
Always answer in a friendly, conversational tone (Hindi/Hinglish or English depending on what language the user asks in).

About Aakash:
- Name: Aakash
- Role: Full-Stack MERN Developer, Cloud & Cyber Security Enthusiast
- Primary Tech Stack: React.js, Node.js, Express.js, MongoDB, MS SQL Server, JavaScript (ES6+), Python, HTML5, CSS3, Bootstrap, Tailwind CSS, Redux, REST APIs, WebRTC, Socket.io, JWT, OAuth 2.0, AWS Cloud, Git/GitHub.
- Featured Projects:
  1. "Askvora" - Real-time doubt-solving platform featuring WebRTC peer-to-peer HD video calling, Socket.io instant chat, Razorpay payment gateway, and ratings. (Live: https://askvora-real-time.netlify.app/)
  2. "Grocify" - Modern online grocery marketplace with fast filtering, dynamic cart management, and toast notifications. (Live: https://grocify-web-aakash.netlify.app/)
  3. "Full-Stack E-Commerce & Admin Panel" - Complete shopping ecosystem with admin dashboard, product management, and order tracking.
  4. "Titan Fitness Gym & Admin" - Modern gym management platform with membership tracking and admin dashboard.
  5. "Medicare" - Healthcare clinic web portal with appointment booking.
  6. "Astrology Platform" - Interactive astrology and horoscope web app.
- Key Strengths: Clean scalable architecture, responsive UI/UX, RESTful API design, database modeling, secure authentication, fast performance.
- Contact Details:
  - Phone / WhatsApp: +91 8395086529
  - GitHub: https://github.com/Aakash21231382
  - Availability: Open to full-time developer roles, freelance projects, and collaborations.

Tone and Guidelines:
- Be polite, enthusiastic, concise, and helpful.
- When asked in Hindi/Hinglish (e.g. "bhai git par code kaise dale"), respond warmly in easy-to-understand Hindi/Hinglish with clear steps.
- When asked about Aakash, answer based on the portfolio details above and highlight his expertise.
- Format responses in clean Markdown (bold key points, bullet lists, short code snippets).
`;

/**
 * Clean API key from environment
 */
const getApiKey = () => {
  const envKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  return envKey.trim().replace(/^["']|["']$/g, '');
};

/**
 * Send messages to Gemini API
 * @param {Array<{role: string, text: string}>} history - Multi-turn chat history
 * @param {string} userMessage - Latest user input
 * @returns {Promise<string>} - Bot response text
 */
export const sendMessageToGemini = async (history, userMessage) => {
  const apiKey = getApiKey();

  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY') {
    throw new Error(
      'Gemini API Key missing. Please check VITE_GEMINI_API_KEY in your .env file.'
    );
  }

  // Active Gemini 3.x Flash models for maximum speed and reliability
  const models = [
    'gemini-3.1-flash-lite',
    'gemini-3.5-flash',
    'gemini-3.8-flash',
    'gemini-3.7-flash',
    'gemini-flash-latest'
  ];

  // Format contents array for multi-turn chat
  const contents = [
    ...history
      .filter((msg) => msg.text && !msg.text.startsWith('⚠️'))
      .map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
    {
      role: 'user',
      parts: [{ text: userMessage }],
    },
  ];

  let lastError = null;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const requestBody = {
        contents,
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const errMsg = errData.error?.message || `HTTP ${response.status}`;
        console.warn(`Gemini model ${model} issue:`, errMsg);
        lastError = new Error(errMsg);
        continue; // Try next fallback model in the list
      }

      const data = await response.json();
      const candidate = data.candidates?.[0];
      const parts = candidate?.content?.parts || [];

      // Extract the actual answer text (filtering out internal thinking tags if any)
      const botReply =
        parts.find((p) => p.text && !p.thought)?.text ||
        parts.map((p) => p.text).filter(Boolean).join('\n');

      if (botReply && botReply.trim()) {
        return botReply.trim();
      }
    } catch (err) {
      console.warn(`Attempt with ${model} failed:`, err);
      lastError = err;
    }
  }

  throw lastError || new Error('Could not connect to Gemini API. Please check your network connection.');
};
