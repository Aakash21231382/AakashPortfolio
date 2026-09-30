import React, { useState, useRef, useEffect } from 'react';
import { 
  FaRobot, 
  FaPaperPlane, 
  FaTimes, 
  FaMinus, 
  FaTrashAlt, 
  FaUser,
  FaCheck
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { BsStars } from 'react-icons/bs';
import { sendMessageToGemini } from '../../services/geminiService';
import '../../styles/chatbot.css';

const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: "👋 Hi there! I'm **Aakash's AI Assistant**, powered by **Gemini**.\n\nYou can ask me about Aakash's **skills, projects, experience**, or any coding and general questions. How can I help you today?",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

const SUGGESTIONS = [
  "🚀 What are Aakash's top skills?",
  "💼 Tell me about Askvora project",
  "📞 How can I contact Aakash?",
  "⚡ Is Aakash open for hire?"
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom whenever messages or loading state changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen, isMinimized]);

  // Simple Markdown parser for bold, lists, backticks, linebreaks
  const renderFormattedText = (text) => {
    if (!text) return null;

    // Split by code blocks first
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
      }
      parts.push({ type: 'codeblock', content: match[1] });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.substring(lastIndex) });
    }

    return parts.map((part, index) => {
      if (part.type === 'codeblock') {
        return (
          <pre key={index}>
            <code>{part.content.trim()}</code>
          </pre>
        );
      }

      // Render standard markdown lines
      const lines = part.content.split('\n');
      return (
        <React.Fragment key={index}>
          {lines.map((line, lIdx) => {
            // Unordered list item
            if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
              const itemText = line.trim().substring(2);
              return (
                <ul key={lIdx} style={{ margin: '4px 0', paddingLeft: '18px' }}>
                  <li>{parseInlineMarkdown(itemText)}</li>
                </ul>
              );
            }

            // Ordered list item
            const numMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
            if (numMatch) {
              return (
                <ol key={lIdx} style={{ margin: '4px 0', paddingLeft: '18px' }}>
                  <li>{parseInlineMarkdown(numMatch[2])}</li>
                </ol>
              );
            }

            // Normal text or paragraph
            return (
              <p key={lIdx} style={{ margin: '0 0 6px 0' }}>
                {parseInlineMarkdown(line)}
              </p>
            );
          })}
        </React.Fragment>
      );
    });
  };

  // Helper for inline markdown: bold, inline code, links
  const parseInlineMarkdown = (str) => {
    if (!str) return '';

    // Parse Markdown Links [Text](URL)
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const segments = [];
    let last = 0;
    let m;

    while ((m = linkRegex.exec(str)) !== null) {
      if (m.index > last) {
        segments.push(parseBoldAndCode(str.substring(last, m.index)));
      }
      segments.push(
        <a
          key={m.index}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="ai-chat-link"
        >
          {m[1]}
        </a>
      );
      last = m.index + m[0].length;
    }

    if (last < str.length) {
      segments.push(parseBoldAndCode(str.substring(last)));
    }

    return segments.length > 0 ? segments : parseBoldAndCode(str);
  };

  // Helper for bold text (**text**)
  const parseBoldAndCode = (str) => {
    if (typeof str !== 'string') return str;
    const segments = [];
    const boldRegex = /\*\*(.*?)\*\*/g;
    let last = 0;
    let m;

    while ((m = boldRegex.exec(str)) !== null) {
      if (m.index > last) {
        segments.push(parseInlineCode(str.substring(last, m.index)));
      }
      segments.push(<strong key={m.index}>{parseInlineCode(m[1])}</strong>);
      last = m.index + m[0].length;
    }

    if (last < str.length) {
      segments.push(parseInlineCode(str.substring(last)));
    }

    return segments.length > 0 ? segments : parseInlineCode(str);
  };

  // Helper for inline code (`code`)
  const parseInlineCode = (str) => {
    if (typeof str !== 'string') return str;
    const parts = str.split(/(`.*?`)/g);
    return parts.map((chunk, i) => {
      if (chunk.startsWith('`') && chunk.endsWith('`') && chunk.length > 1) {
        return <code key={i}>{chunk.slice(1, -1)}</code>;
      }
      return chunk;
    });
  };

  // Handle Send Message
  const handleSendMessage = async (textToSend = null) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Update state immediately with user message
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send chat history and current user query to Gemini API
      const reply = await sendMessageToGemini(messages, query);

      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg = {
        id: `err-${Date.now()}`,
        sender: 'bot',
        text: `⚠️ **Oops!** ${error.message || 'Something went wrong while connecting with Gemini. Please try again!'}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Floating Chatbot Launcher Button */}
      {!isOpen && (
        <aside aria-label="AI Portfolio Assistant" className="ai-chatbot-launcher-container">
          <button
            type="button"
            className="ai-chatbot-launcher-btn"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            aria-label="Open AI Assistant"
            title="Ask AI Assistant"
          >
            <span className="ai-launcher-pulse-ring"></span>
            <span className="ai-launcher-online-dot"></span>
            <FaRobot />
            <span className="ai-launcher-tooltip">
              <HiSparkles className="sparkle-icon" /> Ask Aakash AI
            </span>
          </button>
        </aside>
      )}

      {/* Popup Chat Window */}
      {isOpen && (
        <div className={`ai-chat-window ${isMinimized ? 'minimized' : ''}`}>
          
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-left">
              <div className="ai-chat-avatar-wrapper">
                <FaRobot />
                <span className="ai-avatar-online-indicator"></span>
              </div>
              <div className="ai-chat-header-info">
                <div className="ai-chat-bot-name">
                  Aakash AI <span className="ai-gemini-badge">Gemini</span>
                </div>
                <div className="ai-chat-bot-status">
                  <HiSparkles style={{ color: '#ec4899', fontSize: '10px' }} /> Online • Instant Answers
                </div>
              </div>
            </div>

            <div className="ai-chat-header-actions">
              <button
                type="button"
                className="ai-header-btn"
                title="Clear Conversation"
                onClick={handleClearChat}
                aria-label="Clear Chat"
              >
                <FaTrashAlt />
              </button>
              <button
                type="button"
                className="ai-header-btn"
                title={isMinimized ? 'Expand' : 'Minimize'}
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? 'Expand' : 'Minimize'}
              >
                <FaMinus />
              </button>
              <button
                type="button"
                className="ai-header-btn"
                title="Close"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Chat Body & Input (hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="ai-chat-body">
                {messages.map((msg) => (
                  <div key={msg.id} className={`ai-message-row ${msg.sender}`}>
                    {msg.sender === 'bot' && (
                      <div className="ai-msg-avatar">
                        <FaRobot />
                      </div>
                    )}
                    <div className="ai-message-bubble">
                      {renderFormattedText(msg.text)}
                      <span className="ai-msg-time">{msg.time}</span>
                    </div>
                  </div>
                ))}

                {/* Live Typing Indicator */}
                {isLoading && (
                  <div className="ai-message-row bot">
                    <div className="ai-msg-avatar">
                      <FaRobot />
                    </div>
                    <div className="ai-typing-indicator">
                      <span className="ai-typing-dot"></span>
                      <span className="ai-typing-dot"></span>
                      <span className="ai-typing-dot"></span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions Chips (visible when only 1-2 messages) */}
              {messages.length <= 2 && !isLoading && (
                <div className="ai-quick-suggestions">
                  {SUGGESTIONS.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      className="ai-chip-btn"
                      onClick={() => handleSendMessage(suggestion)}
                    >
                      <HiSparkles style={{ color: '#ec4899', fontSize: '10px' }} />
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="ai-chat-input-area">
                <form
                  className="ai-chat-input-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    className="ai-chat-input-field"
                    placeholder="Ask anything about Aakash or coding..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="ai-chat-send-btn"
                    disabled={!inputValue.trim() || isLoading}
                    aria-label="Send message"
                  >
                    <FaPaperPlane />
                  </button>
                </form>
                <div className="ai-chat-footer-note">
                  Powered by Google Gemini AI • Answers may vary
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AIChatbot;
