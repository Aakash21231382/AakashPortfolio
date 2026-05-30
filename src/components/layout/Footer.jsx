import React from "react";
import "../../styles/footer.css";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiDownload // Naya icon import kiya gaya hai
} from "react-icons/fi";
// CV file yahan import karein (path apne hisab se verify kar lijiye)
import CV from '../../assets/cv/Aakash_cv.pdf'; 

const Footer = () => {
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-content">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h3 className="footer-brand">Aakash</h3>
            <p className="footer-desc">
              Crafting scalable MERN stack applications with modern UI/UX.
              Turning complex problems into elegant, animated, and user-friendly
              digital solutions.
            </p>
            
            {/* Yahan Hire Me aur Download CV Button Add Kiye Gaye Hain */}
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
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links & Contact */}
          <div className="col-lg-4 col-md-12 footer-social-col">
            <h4 className="footer-heading">Connect With Me</h4>
            <div className="social-icons">
              {/* External link ke liye <a> tag use kiya gaya hai */}
              <a
                href="https://github.com/Aakash21231382"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aakash-kumar-05a9a5324/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FiLinkedin />
              </a>
          
              <a 
                href="mailto:aakashwebdev1@gmail.com" 
                className="social-icon"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Aakash Portfolio. All Rights Reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;