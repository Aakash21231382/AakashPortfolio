import React, { useRef } from "react";
import "../../styles/hero.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import aakash from "../../assets/aakash.png";
import { FiDownload, FiArrowRight, FiCode } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaShieldAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import CV from '../../assets/cv/Aakash_cv.pdf';

const Hero = () => {
  const stageRef = useRef(null);

  // Mouse coordinates for 3D perspective tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth spring physics
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Tilt rotations
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-25deg", "25deg"]);

  // Multi-layer Parallax shifts for floating badges
  const badgeX1 = useTransform(smoothX, [-0.5, 0.5], ["-20px", "20px"]);
  const badgeY1 = useTransform(smoothY, [-0.5, 0.5], ["-20px", "20px"]);
  const badgeX2 = useTransform(smoothX, [-0.5, 0.5], ["25px", "-25px"]);
  const badgeY2 = useTransform(smoothY, [-0.5, 0.5], ["25px", "-25px"]);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          
          {/* Left Column: Intro & Headline */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm <span className="hero-name-gradient">Aakash</span>
            </motion.h1>

            <div className="subtitle-wrapper">
              <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            </div>

            <p className="hero-description">
              Full Stack Web Developer passionate about creating fast, scalable, and
              secure web applications while continuously learning modern
              technologies and improving development skills.
            </p>

            <div className="hero-btn-container d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
              <a href="#contact" className="hero-btn text-decoration-none">
                Hire Me <FiArrowRight className="ms-2" />
              </a>
              <a href={CV} download="Aakash_CV.pdf" className="hero-btn-outline">
                Download CV <FiDownload style={{ marginLeft: "8px" }} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Multi-Layer Interactive Avatar Hologram */}
          <div className="col-12 col-lg-6 text-center">
            <div 
              className="hero-avatar-stage"
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Soft Ambient Radial Lighting */}
              <div className="avatar-ambient-glow"></div>

              {/* 4 Multi-Styled Infinite Rotating Circles (Unique Hero Theme) */}
              <div className="hero-rings-container">
                {/* Hero Ring 1: Outer Electric Purple & Gold Arc Orbit */}
                <div className="hero-ring h-ring-1">
                  <span className="h-ring-node h-node-1"></span>
                </div>

                {/* Hero Ring 2: Radar Crosshair & Emerald Satellite Ring (Counter-Clockwise) */}
                <div className="hero-ring h-ring-2">
                  <span className="h-ring-node h-node-2a"></span>
                  <span className="h-ring-node h-node-2b"></span>
                  <span className="h-radar-tick tick-top"></span>
                  <span className="h-radar-tick tick-bottom"></span>
                  <span className="h-radar-tick tick-left"></span>
                  <span className="h-radar-tick tick-right"></span>
                </div>

                {/* Hero Ring 3: Energy Groove Cyan-Green Dual Dashed Ring */}
                <div className="hero-ring h-ring-3">
                  <span className="h-ring-node h-node-3"></span>
                </div>

                {/* Hero Ring 4: Innermost Holographic Core Ring */}
                <div className="hero-ring h-ring-4"></div>
              </div>

              {/* 3D Motion Master Container */}
              <motion.div
                className="avatar-motion-box"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                animate={{
                  y: [-12, 12, -12],
                  rotateZ: [-1.5, 1.5, -1.5]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
              >
                {/* Main 3D Transparent Character */}
                <img 
                  src={aakash} 
                  alt="Aakash 3D Avatar" 
                  className="hero-transparent-avatar" 
                  draggable={false}
                />

                {/* Floating Skill Pill 1 (Top-Left: React 18) */}
                <motion.div 
                  className="floating-tech-badge badge-top-left"
                  style={{ x: badgeX1, y: badgeY1 }}
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.12 }}
                >
                  <span className="tech-badge-icon react-icon"><FaReact /></span>
                  <div>
                    <span className="badge-main-text">React 18</span>
                    <span className="badge-sub-text">Frontend UI</span>
                  </div>
                </motion.div>

                {/* Floating Skill Pill 2 (Top-Right: Active Hire Status) */}
                <motion.div 
                  className="floating-tech-badge badge-top-right"
                  style={{ x: badgeX2, y: badgeY2 }}
                  animate={{ y: [8, -8, 8] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.12 }}
                >
                  <span className="live-status-dot"></span>
                  <div>
                    <span className="badge-main-text">Available</span>
                    <span className="badge-sub-text">Open for Roles</span>
                  </div>
                </motion.div>

                {/* Floating Skill Pill 3 (Bottom-Left: MERN Full-Stack) */}
                <motion.div 
                  className="floating-tech-badge badge-bottom-left"
                  style={{ x: badgeX2, y: badgeY1 }}
                  animate={{ y: [6, -6, 6] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.12 }}
                >
                  <span className="tech-badge-icon mern-icon"><FiCode /></span>
                  <div>
                    <span className="badge-main-text">Full-Stack</span>
                    <span className="badge-sub-text">React & MS SQL</span>
                  </div>
                </motion.div>

                {/* Floating Skill Pill 4 (Bottom-Right: Cloud & Database) */}
                <motion.div 
                  className="floating-tech-badge badge-bottom-right"
                  style={{ x: badgeX1, y: badgeY2 }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                  whileHover={{ scale: 1.12 }}
                >
                  <span className="tech-badge-icon db-icon"><SiMongodb /></span>
                  <div>
                    <span className="badge-main-text">MongoDB</span>
                    <span className="badge-sub-text">NoSQL Database</span>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;