import React from "react";
import "../../styles/footer.css";
import {
  FiArrowUp,
  FiDownload
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import CV from '../../assets/cv/Aakash_cv.pdf';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-content g-4">
          <div className="col-lg-5 col-md-6">
            <h3 className="footer-brand">Aakash</h3>
            <p className="footer-desc">
              Crafting scalable full-stack web applications with modern UI/UX and robust database architectures.
              Turning complex problems into elegant, performant, and secure digital products.
            </p>
            
            <div className="footer-cta-buttons">
              <a href="#contact" className="btn-footer-hire">
                Hire Me
              </a>
              <a href={CV} download="Aakash_CV.pdf" className="btn-footer-cv">
                Download CV <FiDownload style={{ marginLeft: "8px" }} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-3 col-md-6 footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#certificates">Certifications</a></li>
              <li><a href="#contact">Contact / Hire</a></li>
            </ul>
          </div>

          {/* Column 3: Social Links & Contact */}
          <div className="col-lg-4 col-md-12 footer-social-col">
            <h4 className="footer-heading">Connect With Me</h4>
            <p className="footer-desc mb-3">
              Feel free to connect for freelance projects, hiring, or software development discussions.
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/Aakash21231382"
                target="_blank"
                rel="noreferrer"
                className="social-icon social-github"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aakash-kumar-05a9a5324/"
                target="_blank"
                rel="noreferrer"
                className="social-icon social-linkedin"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/918395086529?text=Hi%20Aakash,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="social-icon social-whatsapp"
                aria-label="WhatsApp Chat"
                title="WhatsApp Chat (+91 8395086529)"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:aakashwebdev1@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Aakash,"
                className="social-icon social-mail"
                aria-label="Send Email"
                title="Direct Email (aakashwebdev1@gmail.com)"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Aakash Portfolio. Built with React & Vite. All Rights Reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Scroll to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;