import React from "react";
import "../../styles/about.css";
import about from "../../assets/about.png";
import { FaLaptopCode, FaCloud, FaShieldAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      id: 1,
      icon: <FaLaptopCode color="#06B6D4" />,
      title: "Full-Stack Web Dev",
      desc: "React, Node, Express, MS SQL",
      color: "#06B6D4",
      bg: "rgba(6, 182, 212, 0.12)"
    },
    {
      id: 2,
      icon: <FaCloud color="#0284C7" />,
      title: "Cloud Computing",
      desc: "AWS & Azure Architectures",
      color: "#0284C7",
      bg: "rgba(2, 132, 199, 0.12)"
    },
    {
      id: 3,
      icon: <FaShieldAlt color="#10B981" />,
      title: "Cyber Security",
      desc: "Security best practices & Auth",
      color: "#10B981",
      bg: "rgba(16, 185, 129, 0.12)"
    },
    {
      id: 4,
      icon: <FaRocket color="#EC4899" />,
      title: "Fast Performance",
      desc: "Responsive & Scalable UX",
      color: "#EC4899",
      bg: "rgba(236, 72, 153, 0.12)"
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge badge-about">Get To Know Me</span>
          <h2 className="section-title mt-2">
            About <span className="title-gradient-accent">Me</span>
          </h2>
          <p className="section-subtitle">Dedicated developer turning complex challenges into seamless web experiences</p>
        </div>

        <div className="row align-items-center g-4">
          
          {/* Left: Transparent Shining 3D Avatar Showcase */}
          <div className="col-12 col-lg-5 text-center">
            <div className="about-avatar-stage">
              {/* Radiant Ambient Backlight Glow */}
              <div className="about-ambient-glow"></div>

              {/* 4 Multi-Styled Infinite Rotating Circles */}
              <div className="about-rings-container">
                {/* Ring 1: Outer Neon Dashed Ring with Orbiting Node */}
                <div className="about-ring ring-1">
                  <span className="ring-node node-1"></span>
                </div>

                {/* Ring 2: Tech Cyber Dual-Accent Orbit (Counter-Clockwise) */}
                <div className="about-ring ring-2">
                  <span className="ring-node node-2a"></span>
                  <span className="ring-node node-2b"></span>
                </div>

                {/* Ring 3: Fine Dotted Geometric Cyan/Purple Ring */}
                <div className="about-ring ring-3">
                  <span className="ring-node node-3"></span>
                </div>

                {/* Ring 4: Innermost Radiant Pulsing Core Ring */}
                <div className="about-ring ring-4"></div>
              </div>

              {/* Floating Transparent Avatar */}
              <motion.div 
                className="about-avatar-wrapper"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src={about} 
                  alt="About Aakash" 
                  className="about-image" 
                  draggable={false}
                  animate={{
                    y: [-8, 8, -8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Right: Clean, Uniform-Color Text & Highlights */}
          <div className="col-12 col-lg-7">
            <div className="about-content">
              <p className="about-text">
                I am a passionate and dedicated <strong>Full Stack Web Developer</strong> with a strong foundation in <strong>Cloud Computing and Cybersecurity</strong>. I specialize in building modern, responsive, user-friendly, and high-performance web applications using technologies such as <strong>React.js, Node.js, Express.js, MongoDB , MS SQL </strong>, and modern databases.
              </p>

              <p className="about-text">
                I have completed my <strong>Bachelor of Computer Applications (BCA) in Cloud & Cyber Security</strong> from <strong>IIMT University</strong>, where I developed a deep understanding of full-stack web architectures, cloud infrastructure, secure REST APIs, and database engineering. I am a fast learner, proactive problem solver, and collaborative team player eager to build high-impact digital solutions.
              </p>

              {/* 4 Feature Cards with clean matching colors */}
              <div className="row g-3 mt-3">
                {highlights.map((item, idx) => (
                  <motion.div 
                    className="col-sm-6" 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <div 
                      className="about-highlight-card"
                      style={{ 
                        '--card-accent': item.color,
                        borderColor: item.color 
                      }}
                    >
                      <div className="highlight-icon" style={{ background: item.bg }}>
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="highlight-title" style={{ color: item.color }}>{item.title}</h5>
                        <span className="highlight-desc">{item.desc}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
