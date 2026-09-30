import Askvora from "../assets/Askvora.png";
import Grocify from "../assets/grocify.png";
import Ecommerce from "../assets/Ecommerce.png";
import Admin from "../assets/Ecommerce-admin.png";
import TitanFitness from "../assets/TitanFitness.png";
import TitanAdmin from "../assets/TitanAdmin.png";
import MedicareImage from "../assets/medicare.png";
import AstrologyImage from "../assets/AstrologyImage.png";

const projects = [
  {
    id: 1,
    title: "Askvora Real-Time Doubt Solving Platform",
    category: "Full-Stack MERN",
    type: "fullstack",
    isSpotlight: true,
    tagline:
      "Production-ready platform connecting learners with experts via real-time WebRTC video & chat.",
    description:
      "A comprehensive full-stack MERN ecosystem built for real-time peer doubt resolution. Includes WebRTC peer-to-peer video calling, screen sharing, low-latency Socket.io instant messaging, Razorpay payment gateway integration, and user rating systems.",
    image: Askvora,
    liveLink: "https://askvora-real-time.netlify.app/",
    githubLink: "https://github.com/Aakash21231382/askvora-frontend",
    accentColor: "#06B6D4", // Electric Cyan
    glowColor: "rgba(6, 182, 212, 0.35)",
    features: [
      "WebRTC Peer-to-Peer HD Video Calling & Screen Sharing",
      "Real-time low-latency WebSocket chat & presence tracking",
      "Razorpay Payment Gateway integration for instant session fees",
      "Comprehensive ratings, reviews & expert verified profiles",
    ],
    techStack: [
      { name: "React 18", color: "#06B6D4" },
      { name: "Node.js", color: "#22C55E" },
      { name: "MongoDB", color: "#10B981" },
      { name: "Socket.io", color: "#F97316" },
      { name: "WebRTC", color: "#EF4444" },
      { name: "Razorpay", color: "#3B82F6" },
    ],
  },
  {
    id: 2,
    title: "Grocify - Online Grocery Marketplace",
    category: "E-Commerce Frontend",
    type: "frontend",
    isSpotlight: false,
    tagline:
      "Speedy, responsive grocery shopping experience with instant filtering and cart management.",
    description:
      "Modern, blazing-fast grocery shopping e-commerce web application. Allows users to browse, search, and filter farm-fresh produce and groceries with persistent cart state and responsive mobile layout.",
    image: Grocify,
    liveLink: "https://grocify-web-aakash.netlify.app/",
    githubLink: "https://github.com/Aakash21231382/grocify",
    accentColor: "#10B981", // Emerald Green
    glowColor: "rgba(16, 185, 129, 0.35)",
    features: [
      "Instant search and category filtering for fresh fruits & veggies",
      "Persistent shopping cart with dynamic price calculations",
      "Smooth animations, modern micro-interactions & toast alerts",
    ],
    techStack: [
      { name: "React", color: "#06B6D4" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "Redux Toolkit", color: "#8B5CF6" },
      { name: "React Icons", color: "#EC4899" },
    ],
  },
  {
    id: 3,
    title: "Advanced MERN E-Commerce App",
    category: "Full-Stack Platform",
    type: "fullstack",
    isSpotlight: false,
    tagline:
      "Enterprise-grade online store with JWT authentication, shopping cart, and order pipeline.",
    description:
      "Full-stack e-commerce web application featuring rich product catalogs, category filtering, user JWT authentication, persistent cart state, order management, and customer profile management.",
    image: Ecommerce,
    liveLink: "",
    githubLink: "https://github.com/Aakash21231382",
    accentColor: "#EC4899", // Rose Pink
    glowColor: "rgba(236, 72, 153, 0.35)",
    features: [
      "Secure User Authentication & Authorization via JWT & bcrypt",
      "Full CRUD Product catalog with dynamic inventory state",
      "Cart handling, checkout workflow, and order history tracking",
    ],
    techStack: [
      { name: "MERN Stack", color: "#EC4899" },
      { name: "Express.js", color: "#EAB308" },
      { name: "MongoDB", color: "#10B981" },
      { name: "JWT Auth", color: "#8B5CF6" },
    ],
  },
  {
    id: 4,
    title: "React Admin Analytics Dashboard",
    category: "Admin & Analytics",
    type: "frontend",
    isSpotlight: false,
    tagline:
      "Clean dashboard with analytical charts, order management, and store metrics.",
    description:
      "Enterprise dashboard interface with structured sidebar navigation, real-time visual charts, sales analytics, customer management, and fixed header management for e-commerce stores.",
    image: Admin,
    liveLink: "",
    githubLink: "https://github.com/Aakash21231382",
    accentColor: "#8B5CF6", // Royal Purple
    glowColor: "rgba(139, 92, 246, 0.35)",
    features: [
      "Interactive visual graphs & sales statistics with Chart.js",
      "Clean collapsible sidebar & fixed-header layout architecture",
      "Customer order management table with status filtering",
    ],
    techStack: [
      { name: "React", color: "#06B6D4" },
      { name: "Chart.js", color: "#F97316" },
      { name: "Bootstrap 5", color: "#8B5CF6" },
      { name: "CSS3", color: "#0284C7" },
    ],
  },
  {
    id: 5,

    title: "Titan Fitness Gym Management Website",

    category: "Web Development",

    type: "fullstack",

    isSpotlight: false,

    tagline:
      "Modern fitness website with programs, trainers, schedules, results, pricing, and membership management.",

    description:
      "A modern full-stack gym website built for Titan Fitness, featuring a premium fitness-focused UI, training programs, trainer profiles, workout schedules, results, pricing plans, FAQs, and membership-focused sections. The application is built with React on the frontend, Node.js on the backend, and Microsoft SQL Server for database management.",

    image: TitanFitness,

    liveLink: "",

    githubLink: "https://github.com/Aakash21231382/Gym-website.git",

    accentColor: "#FF5A00", // Fitness Orange

    glowColor: "rgba(255, 90, 0, 0.35)",

    features: [
      "Modern responsive gym website with premium dark fitness UI",

      "Programs, trainers, schedules, results, pricing, and FAQ sections",

      "Full-stack architecture with React frontend and Node.js backend",

      "Microsoft SQL Server database integration for storing application data",

      "Responsive Bootstrap-based layout with custom CSS styling",

      "Membership and fitness-focused call-to-action sections",
    ],

    techStack: [
      { name: "React", color: "#61DAFB" },

      { name: "Node.js", color: "#22C55E" },

      { name: "MS SQL Server", color: "#EF4444" },

      { name: "Bootstrap", color: "#7952B3" },

      { name: "CSS3", color: "#0284C7" },
    ],
  },
  {
    id: 6,

    title: "Titan Fitness Admin Dashboard",

    category: "Admin & Analytics",

    type: "fullstack",

    isSpotlight: false,

    tagline:
      "Powerful admin dashboard for managing gym members, programs, trainers, content, analytics, and operations.",

    description:
      "A dedicated admin control panel developed for Titan Fitness to manage gym operations from a centralized dashboard. It includes member management, sales and revenue analytics, programs, coaches and staff, facility content, pricing and passes, class timetables, reviews, FAQs, and CMS modules. The admin panel is connected with a Node.js backend and Microsoft SQL Server database.",

    image: TitanAdmin,

    liveLink: "",

    githubLink: "https://github.com/Aakash21231382/Gym-website.git",

    accentColor: "#FF5A00", // Fitness Orange

    glowColor: "rgba(255, 90, 0, 0.35)",

    features: [
      "Admin dashboard with revenue, members, athletes, and CMS statistics",

      "Sales performance analytics with interactive charts",

      "Users & members management with operational tracking",

      "Programs, coaches & staff, and class timetable management",

      "Hero banner, facility showcase, pricing, reviews, and FAQ CMS management",

      "Team activity and recent operational updates",

      "Admin authentication and protected dashboard access",

      "Node.js backend integration with Microsoft SQL Server",

      "Responsive Bootstrap-based admin interface with custom CSS",
    ],

    techStack: [
      { name: "React", color: "#61DAFB" },

      { name: "Node.js", color: "#22C55E" },

      { name: "MS SQL Server", color: "#EF4444" },

      { name: "Bootstrap", color: "#7952B3" },

      { name: "CSS3", color: "#0284C7" },

      { name: "Chart.js", color: "#F97316" },
    ],
  },
  {
    id: 7,
    title: "MediCare Healthcare Solutions",
    category: "Healthcare & Booking",
    type: "fullstack",
    isSpotlight: false,
    tagline:
      "Premium Healthcare At Your FingerTips. A complete medical appointment booking platform.",
    description:
      "A fully functional doctor appointment booking system built on the MERN stack. It includes a dedicated Doctor Admin panel for seamless hospital management. Patients can easily find certified specialists, book appointments 24/7, and make secure payments via Stripe integration. The platform offers a highly responsive UI with emergency call features and service browsing.",
    image: MedicareImage,
    liveLink: "https://appontments-doctor.netlify.app/",
    githubLink: "https://github.com/Aakash21231382/Medicare.git",
    accentColor: "#FF8C00",
    glowColor: "rgba(255, 140, 0, 0.35)",
    features: [
      "Comprehensive doctor appointment booking system",
      "Dedicated Doctor Admin panel for management",
      "Secure payment gateway integration using Stripe",
      "Directory of 500+ certified specialists and doctors",
      "24/7 Availability booking with Emergency Call functionality",
      "Secure user authentication and login portal",
      "Fully working full-stack architecture using MERN",
    ],
    techStack: [
      { name: "MongoDB", color: "#47A248" },
      { name: "Express.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "Node.js", color: "#22C55E" },
      { name: "Stripe", color: "#008CDD" },
      { name: "Tailwind/CSS", color: "#0284C7" },
    ],
  },
  {
    id: 8,
    title: "AstroVeda - Complete 3-in-1 Astrology & Consultation Platform",
    category: "Astrology & Real-Time Consultation",
    type: "fullstack",
    isSpotlight: true,
    tagline:
      "A complete Astrotalk-scale ecosystem featuring Web Customer Portal, Astrologer Workspace & Super Admin Dashboard.",
    description:
      "A production-grade, multi-portal Vedic Astrology platform connecting customers, certified astrologers, and platform administrators. Built with React, Node.js/Express, MSSQL, Socket.io, and WebRTC. It features real-time audio/video consultations, live chat, dynamic per-minute wallet billing, Kundali calculations, Puja booking, and a complete E-commerce store.",
    image: AstrologyImage,
    liveLink: "",
    githubLink: "https://github.com/Aakash21231382/Astrology-platform.git",
    accentColor: "#D97706",
    glowColor: "rgba(217, 119, 6, 0.35)",
    features: [
      "🌐 [Web User Portal]: Browse certified astrologers, instant Kundali calculator, Puja booking, and Gemstone store",
      "🧘 [Expert/Astrologer Workspace]: Live consultation room, incoming call/chat alerts, weekly schedule manager & earnings tracker",
      "🛡️ [Super Admin Dashboard]: KYC approval & document verification, live session monitoring, revenue analytics & payout processing",
      "📞 [Real-Time Calling]: WebRTC Peer-to-Peer Audio & Video calling with live timer and dynamic per-minute wallet deduction",
      "💬 [Instant Messaging]: Low-latency Socket.io real-time chat with typing indicators and unread badges",
      "💳 [Wallet & Payments]: Automated per-minute billing engine with Razorpay online payment integration",
      "🔮 [Vedic Engine]: Instant Lagna chart, Nakshatra, Dasha periods, and planetary positions generator",
      "🔐 [Security]: Role-Based Access Control (RBAC) with JWT auth protecting Customer, Expert, and Admin portals",
    ],
    techStack: [
      { name: "React", color: "#61DAFB" },
      { name: "Node.js", color: "#22C55E" },
      { name: "Express.js", color: "#000000" },
      { name: "MSSQL", color: "#CC292B" },
      { name: "Socket.io", color: "#010101" },
      { name: "WebRTC", color: "#333333" },
      { name: "Razorpay", color: "#0C2340" },
      { name: "CSS3", color: "#264DE4" },
    ],
  },
];

export default projects;
