import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import "../../styles/certificate.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiX, 
  FiAward, 
  FiCheckCircle, 
  FiMaximize2, 
  FiChevronLeft, 
  FiChevronRight,
  FiEye,
  FiExternalLink
} from "react-icons/fi";

import Linux from "../../assets/Linux.png";
import Mern from "../../assets/Mern.png";
import Cyber from "../../assets/cyber.png";
import Introduction from "../../assets/introduction.png";
import Advance from "../../assets/advance-azure.png";
import Cloud from '../../assets/cloud.png';
import IOT from '../../assets/iot.png';

const myCertificates = [
  {
    id: 1,
    title: "Linux Administration Certification",
    issuer: "IIT Kanpur",
    category: "iit",
    type: "System Administration",
    image: Linux,
    color: "#F97316", // Orange
    glowColor: "rgba(249, 115, 22, 0.45)",
    skills: ["Linux CLI", "Bash Scripting", "User Permissions", "Process Management"]
  },
  {
    id: 2,
    title: "Cyber Security Training Program",
    issuer: "IIT Kanpur",
    category: "iit",
    type: "Network & Cyber Defense",
    image: Cyber,
    color: "#10B981", // Emerald Green
    glowColor: "rgba(16, 185, 129, 0.45)",
    skills: ["Network Security", "Cryptography", "Ethical Defense", "Vulnerability Assessment"]
  },
  {
    id: 3,
    title: "Advance Cloud Computing (Azure)",
    issuer: "IIT Kanpur",
    category: "iit",
    type: "Azure Cloud Architect",
    image: Advance,
    color: "#0284C7", // Azure Blue
    glowColor: "rgba(2, 132, 199, 0.45)",
    skills: ["Azure VM & App Services", "Blob Storage", "Virtual Networks", "Cloud Scaling"]
  },
  {
    id: 4,
    title: "MERN Stack Development Course",
    issuer: "Tutedude",
    category: "web",
    type: "Full-Stack Development",
    image: Mern,
    color: "#EC4899", // Rose Pink
    glowColor: "rgba(236, 72, 153, 0.45)",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    id: 5,
    title: "Introduction to Cloud Computing",
    issuer: "IIT Kanpur",
    category: "iit",
    type: "Cloud Infrastructure",
    image: Introduction,
    color: "#06B6D4", // Cyan
    glowColor: "rgba(6, 182, 212, 0.45)",
    skills: ["IaaS / PaaS / SaaS", "Virtualization", "Cloud Security", "Storage Models"]
  },
  {
    id: 6,
    title: "Internet of Things (IoT) Elite",
    issuer: "NPTEL (MoE India)",
    category: "nptel",
    type: "NPTEL Elite Certified",
    image: IOT,
    color: "#8B5CF6", // Purple
    glowColor: "rgba(139, 92, 246, 0.45)",
    skills: ["Sensors & Actuators", "IoT Networking", "Embedded Systems", "Cloud Integration"]
  },
  {
    id: 7,
    title: "Cloud Computing Elite Certification",
    issuer: "NPTEL (MoE India)",
    category: "nptel",
    type: "NPTEL Elite Certified",
    image: Cloud,
    color: "#3B82F6", // Royal Blue
    glowColor: "rgba(59, 130, 246, 0.45)",
    skills: ["Distributed Computing", "MapReduce Architecture", "Data Replication", "Cloud SLA"]
  },
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Center default
  const [selectedCert, setSelectedCert] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const certificatesList = myCertificates;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : certificatesList.length - 1));
  }, [certificatesList.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < certificatesList.length - 1 ? prev + 1 : 0));
  }, [certificatesList.length]);

  // Auto-play timer
  useEffect(() => {
    if (isPaused || certificatesList.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext, certificatesList.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Compute 3D Coverflow position: Clear, crisp side cards without blur
  const getCardStyle = (index) => {
    const total = certificatesList.length;
    if (total === 0) return {};

    let diff = index - activeIndex;
    
    // Circular wrap around
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);
    const isCenter = diff === 0;

    if (absDiff > 2) {
      return {
        opacity: 0,
        pointerEvents: "none",
        zIndex: 0,
        transform: `translateX(${diff > 0 ? 200 : -200}%) scale(0.6)`,
        visibility: "hidden"
      };
    }

    if (isCenter) {
      return {
        transform: "translateX(0%) translateZ(40px)",
        zIndex: 30,
        opacity: 1,
        filter: "none",
        visibility: "visible"
      };
    }

    // Side cards: Crisp, clean, no blur, high visibility
    const translateX = diff * 56;
    const scale = Math.max(0.82, 1 - absDiff * 0.12);
    const rotateY = diff * -12;
    const zIndex = 20 - absDiff * 5;
    const opacity = Math.max(0.65, 1 - absDiff * 0.22);

    return {
      transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      filter: "none",
      visibility: "visible"
    };
  };

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        
        {/* Section Header with Dual-Tone Gradient Title */}
        <div className="text-center mb-5">
          <span className="section-badge badge-certificates">Verified Credentials</span>
          <h2 className="section-title mt-2">
            Certifications & <span className="title-gradient-accent">Honors</span>
          </h2>
          <p className="section-subtitle">
            Official verified certifications from IIT Kanpur, NPTEL Ministry of Education, and recognized tech institutes
          </p>
        </div>

        {/* 3D COVERFLOW SLIDER STAGE */}
        <div 
          className="coverflow-stage-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Lighting Behind Active Certificate */}
          <div 
            className="coverflow-ambient-glow"
            style={{
              background: `radial-gradient(circle, ${certificatesList[activeIndex]?.glowColor || 'rgba(56, 189, 248, 0.35)'} 0%, transparent 70%)`
            }}
          ></div>

          {/* Navigation Arrow: Prev */}
          <button 
            className="coverflow-nav-btn prev-btn" 
            onClick={handlePrev}
            aria-label="Previous Certificate"
          >
            <FiChevronLeft />
          </button>

          {/* 3D Track Container */}
          <div className="coverflow-track">
            {certificatesList.map((cert, index) => {
              const style = getCardStyle(index);
              const isCenter = index === activeIndex;

              return (
                <div
                  key={cert.id}
                  className={`coverflow-card-item ${isCenter ? "active-center-card" : "inactive-side-card"}`}
                  style={{
                    ...style,
                    '--cert-color': cert.color,
                    '--cert-glow': cert.glowColor
                  }}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedCert(cert);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {/* Holographic Top Accent Bar */}
                  <div className="coverflow-top-accent" style={{ background: cert.color }}></div>

                  {/* Card Header */}
                  <div className="coverflow-card-head">
                    <span className="coverflow-issuer-pill">
                      <FiAward className="me-1" style={{ color: cert.color }} /> {cert.issuer}
                    </span>
                    <span 
                      className="coverflow-verified-tag" 
                      style={{ 
                        color: cert.color, 
                        borderColor: `${cert.color}40`, 
                        background: `${cert.color}15` 
                      }}
                    >
                      <FiCheckCircle className="me-1" /> Verified
                    </span>
                  </div>

                  {/* High-Clarity Certificate Image Frame (Full & Uncropped) */}
                  <div className="coverflow-img-frame">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="coverflow-cert-img" 
                      draggable={false}
                    />
                    
                    {/* Center Card Hover / Click Prompt */}
                    <div className="coverflow-hover-prompt">
                      <span className="inspect-btn-pill" style={{ background: cert.color }}>
                        <FiMaximize2 className="me-2" /> Inspect Full View
                      </span>
                    </div>
                  </div>

                  {/* Card Info Body */}
                  <div className="coverflow-card-body">
                    <span className="coverflow-type" style={{ color: cert.color }}>
                      {cert.type}
                    </span>
                    <h4 className="coverflow-title">{cert.title}</h4>

                    {/* Skill Tags */}
                    <div className="coverflow-skills-wrap">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="coverflow-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center Card Footer Call to Action */}
                  <div className="coverflow-card-foot">
                    <span className="coverflow-action-text" style={{ color: cert.color }}>
                      <FiEye className="me-1" /> Click to Expand Full Certificate
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Navigation Arrow: Next */}
          <button 
            className="coverflow-nav-btn next-btn" 
            onClick={handleNext}
            aria-label="Next Certificate"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Carousel Bottom Controls: Indicator Dots & Position Counter */}
        <div className="coverflow-controls-bar">
          <div className="coverflow-counter-pill">
            <span className="counter-current">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="counter-divider">/</span>
            <span className="counter-total">
              {String(certificatesList.length).padStart(2, '0')}
            </span>
          </div>

          <div className="coverflow-dots">
            {certificatesList.map((cert, dotIdx) => (
              <button
                key={cert.id}
                className={`coverflow-dot ${dotIdx === activeIndex ? "active-dot" : ""}`}
                style={{
                  '--dot-color': cert.color
                }}
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Jump to certificate ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* LUXURY FULL-SCREEN CERTIFICATE INSPECTOR MODAL */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
              <div className="cert-modal-wrapper" onClick={(e) => e.stopPropagation()}>
                
                {/* Floating Outside Close Button */}
                <button
                  className="cert-modal-close-outside"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close modal"
                  title="Close"
                >
                  <FiX />
                </button>

                <motion.div
                  className="cert-modal-dialog"
                  style={{
                    '--cert-color': selectedCert.color,
                    '--cert-glow': selectedCert.glowColor
                  }}
                  initial={{ scale: 0.9, opacity: 0, y: 25 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 25 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                >
                  {/* Modal Top Accent Strip */}
                  <div className="cert-modal-top-accent" style={{ background: selectedCert.color }}></div>

                  <div className="cert-modal-inner-scroll">
                    
                    {/* Modal Header Bar */}
                    <div className="cert-modal-head-bar mb-3">
                      <div className="d-flex align-items-center gap-2 flex-wrap">
                        <span className="cert-modal-issuer-badge">
                          <FiAward className="me-1" /> {selectedCert.issuer}
                        </span>
                        <span 
                          className="cert-modal-type-badge"
                          style={{ color: selectedCert.color, borderColor: selectedCert.color }}
                        >
                          {selectedCert.type}
                        </span>
                      </div>

                      <h3 className="cert-modal-title mt-2">{selectedCert.title}</h3>
                    </div>

                    {/* High-Resolution Certificate Frame */}
                    <div className="cert-modal-img-container">
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="cert-modal-display-img"
                      />
                    </div>

                    {/* Certificate Competencies */}
                    <div className="cert-modal-skills-pane mt-4">
                      <h6 className="cert-skills-heading">Verified Core Competencies:</h6>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {selectedCert.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="cert-modal-chip"
                            style={{
                              color: selectedCert.color,
                              background: `${selectedCert.color}15`,
                              borderColor: `${selectedCert.color}40`
                            }}
                          >
                            <FiCheckCircle className="me-1" /> {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Certificates;