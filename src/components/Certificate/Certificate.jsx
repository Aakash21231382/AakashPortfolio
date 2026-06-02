import React, { useState } from "react";
import "../../styles/certificate.css";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSearch } from "react-icons/fi"; // Search icon for 'View' badge

// Note: Ensure all your image imports (Linux, Mern, Cyber, etc.) are correct at the top.
import Linux from "../../assets/Linux.png";
import Mern from "../../assets/Mern.png";
import Cyber from "../../assets/cyber.png";
import Introduction from "../../assets/introduction.png";
import Advance from "../../assets/advance-azure.png";
import Cloud from '../../assets/cloud.png'
import IOT from '../../assets/iot.png'
const CertificateCard = ({ image, title, type, index, onView }) => {
  return (
    <motion.div
      className="col-lg-4 col-md-6 col-sm-12 mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="certificate-card"
        onClick={() => onView({ image, title })}
      >
        <div className="cert-image-wrapper">
          <img src={image} alt={title} className="cert-img" />
          
          {/* Default state badge (top right) */}
          <div className="cert-zoom-icon">
            <FiSearch />
          </div>

          {/* This content wrapper is hidden by default, shown on hover */}
          <div className="cert-hover-content">
            <div className="cert-text-container">
              <span className="cert-type">{type}</span>
              <h3 className="cert-title">{title}</h3>
              <span className="view-badge mt-3">Click to Expand</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const myCertificates = [
    {
      id: 1,
      title: "Linux Administration Certification - IIT Kanpur",
      type: "System Administration",
      image: Linux,
    },
    {
      id: 2,
      title: "Cyber Security Training Program - IIT Kanpur",
      type: "Network Security",
      image: Cyber,
    },
    {
      id: 3,
      title: "Advance Cloud Computing (Microsoft Azure) - IIT Kanpur",
      type: "Cloud Computing",
      image: Advance,
    },
    {
      id: 4,
      title: "MERN Stack Development Course - Tutedude",
      type: "Full-Stack Development",
      image: Mern,
    },
    {
      id: 5,
      title: "Introduction to Cloud Computing - IIT Kanpur",
      type: "Cloud Computing Basics",
      image: Introduction,
    },
    {
      id: 6,
      title: "Introduction to Internet of Things (IoT)",
      type: "NPTEL Elite Certified Course",
      image: IOT,
    },
    {
      id: 7,
      title: "Cloud Computing",
      type: "NPTEL Elite Certification",
      image: Cloud,
    },
  ];

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">My Certificates</h2>
        </div>

        <div className="row justify-content-center">
          {myCertificates.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              image={cert.image}
              title={cert.title}
              type={cert.type}
              index={index}
              onView={setSelectedCert}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
              >
                <FiX />
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-modal-img"
              />
              <h4 className="cert-modal-title">{selectedCert.title}</h4>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;