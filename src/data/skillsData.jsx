import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs, 
  FaDatabase, 
  FaKey, 
  FaShieldAlt, 
  FaGitAlt, 
  FaAws,
  FaNetworkWired,
  FaPython
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiRedux, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss
} from 'react-icons/si';

const skills = [
  {
    id: 1,
    title: 'HTML5',
    color: '#E34F26',
    glowColor: 'rgba(227, 79, 38, 0.45)',
    icon: <FaHtml5 />
  },
  {
    id: 2,
    title: 'CSS3',
    color: '#1572B6',
    glowColor: 'rgba(21, 114, 182, 0.45)',
    icon: <FaCss3Alt />
  },
  {
    id: 3,
    title: 'JavaScript',
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.45)',
    icon: <SiJavascript />
  },
  // {
  //   id: 4,
  //   title: 'Python',
  //   color: '#3776AB',
  //   glowColor: 'rgba(55, 118, 171, 0.45)',
  //   icon: <FaPython />
  // },
  {
    id: 5,
    title: 'React.js',
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.45)',
    icon: <FaReact />
  },
  // {
  //   id: 6,
  //   title: 'Redux.js',
  //   color: '#764ABC',
  //   glowColor: 'rgba(118, 74, 188, 0.45)',
  //   icon: <SiRedux />
  // },
  {
    id: 7,
    title: 'Bootstrap',
    color: '#7952B3',
    glowColor: 'rgba(121, 82, 179, 0.45)',
    icon: <FaBootstrap />
  },
  {
    id: 8,
    title: 'Node.js',
    color: '#339933',
    glowColor: 'rgba(51, 153, 51, 0.45)',
    icon: <FaNodeJs />
  },
  {
    id: 9,
    title: 'Express.js',
    color: '#CBD5E1',
    glowColor: 'rgba(203, 213, 225, 0.45)',
    icon: <SiExpress />
  },
  {
    id: 10,
    title: 'REST APIs',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    icon: <FaNetworkWired />
  },
  // {
  //   id: 11,
  //   title: 'MongoDB',
  //   color: '#47A248',
  //   glowColor: 'rgba(71, 162, 72, 0.45)',
  //   icon: <SiMongodb />
  // },
  {
    id: 12,
    title: 'MS SQL Server',
    color: '#CC292B',
    glowColor: 'rgba(204, 41, 43, 0.45)',
    icon: <FaDatabase />
  },
  {
    id: 13,
    title: 'JWT',
    color: '#D63AFF',
    glowColor: 'rgba(214, 58, 255, 0.45)',
    icon: <FaKey />
  },
  // {
  //   id: 14,
  //   title: 'OAuth 2.0',
  //   color: '#4285F4',
  //   glowColor: 'rgba(66, 133, 244, 0.45)',
  //   icon: <FaShieldAlt />
  // },
  {
    id: 15,
    title: 'Git/GitHub',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.45)',
    icon: <FaGitAlt />
  },
  // {
  //   id: 16,
  //   title: 'Tailwind CSS',
  //   color: '#06B6D4',
  //   glowColor: 'rgba(6, 182, 212, 0.45)',
  //   icon: <SiTailwindcss />
  // },
  {
    id: 17,
    title: 'AWS Cloud',
    color: '#FF9900',
    glowColor: 'rgba(255, 153, 0, 0.45)',
    icon: <FaAws />
  }
];

export default skills;