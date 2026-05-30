import Askvora from '../assets/Askvora.png'
import Grocify from '../assets/grocify.png'
import Ecommerce from '../assets/Ecommerce.png'
import Admin from '../assets/Ecommerce-admin.png'

const projects = [
  {
    id: 1,
    title: 'Askvora Real-Time Doubt Solving',
    description: 'Developed a full stack MERN platform with real-time chat, video calling, screen sharing, notifications, reviews, and Razorpay payment integration.',
    image: Askvora,
    liveLink: 'https://askvora-platform.netlify.app/',
    githubLink: 'https://github.com/yourusername/askvora',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC'] // Naya add kiya
  },
  {
    id: 2,
    title: 'Grocify - Responsive Online Grocery Marketplace',
    description: 'Grocify is a fully responsive grocery e-commerce website that allows users to browse, search, and filter fresh fruits, vegetables, and grocery products.',
    image: Grocify,
    liveLink: 'https://grocify-web-aakash.netlify.app/',
    githubLink: 'https://github.com/yourusername/property-app',
    techStack: ['React', 'Tailwind CSS', 'Redux'] // Naya add kiya
  },
  {
    id: 3,
    title: 'Advanced E-Commerce App',
    description: "A fully responsive e-commerce web application with product search, filtering, and shopping cart features. Currently under development.",
    image: Ecommerce,
    liveLink: '',
    githubLink: '',
    techStack: ['MERN Stack', 'Express', 'JWT Auth'] // Naya add kiya
  },
  {
    id: 4,
    title: 'React Admin Dashboard',
    description: 'Professional dashboard interface with a structured folder layout and fixed header content management for Ecommerce web admin.',
    image: Admin,
    liveLink: '', 
    githubLink:'',
    techStack: ['React', 'CSS3', 'Chart.js', 'Bootstrap'] // Naya add kiya
  }
];

export default projects;