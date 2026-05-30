import React, { useState } from "react";
import "../../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        {/* Logo */}
        <a href="#home" className="navbar-brand logo">
          Aakash
        </a>

      
        <button
          className="navbar-toggler custom-toggler d-lg-none"
          type="button"
          onClick={handleToggle}
        >
          <FaBars className="toggle-icon" />
        </button>

        {/* Navbar Menu */}
        <div className={`custom-sidebar-menu ${isOpen ? "show-sidebar" : ""}`}>
       
          <button className="close-btn d-lg-none" onClick={closeMenu}>
            <FaTimes />
          </button>

          <ul className="navbar-nav w-100 align-items-center custom-nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link" onClick={closeMenu}>
                Education
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMenu}>
                Projects
              </a>
            </li>

         
            <li className="nav-item">
              <a href="#certificates" className="nav-link" onClick={closeMenu}>
                Certificate
              </a>
            </li>

        
            <li className="nav-item hire-btn-wrapper">
              <a href="#contact" className="hero-btn text-decoration-none" onClick={closeMenu}>
              Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
