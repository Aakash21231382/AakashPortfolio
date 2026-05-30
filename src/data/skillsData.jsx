import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaAws, FaJava, FaCode } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql } from 'react-icons/si';

const skills = [
  {
    id: 1,
    title: 'HTML',
    icon: <FaHtml5 color="#E34F26" /> // HTML5 brand color
  },
  {
    id: 2,
    title: 'CSS',
    icon: <FaCss3Alt color="#1572B6" /> // CSS3 brand color
  },
  {
    id: 3,
    title: 'JavaScript',
    icon: <SiJavascript color="#F7DF1E" /> // JS brand color
  },
  {
    id: 4,
    title: 'React JS',
    icon: <FaReact color="#61DAFB" /> // React brand color
  },
  {
    id: 5,
    title: "MongoDB",
    icon: <SiMongodb color="#47A248" /> // MongoDB brand color
  },
  {
    id: 6,
    title: "MySQL",
    icon: <SiMysql color="#4479A1" /> // MySQL brand color
  },
  {
    id: 7,
    title: "MERN Stack",
    icon: <FaCode color="#e247be" /> // Custom pink for full stack
  },
  {
    id: 8,
    title: "AWS (Amazon Web Services)",
    icon: <FaAws color="#FF9900" /> // AWS brand color
  },
  {
    id: 9,
    title: "OOPS Using Java",
    icon: <FaJava color="#007396" /> // Java brand color
  }
];

export default skills;