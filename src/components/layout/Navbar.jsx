import React, { useState } from "react";
import "../../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md custom-navbar fixed-top">
      <div className="container">
        {/* Logo (Left) */}
        <a href="#home" className="navbar-brand logo">
          Aakash
        </a>

        {/* Right controls for Mobile (Theme Toggle + Hamburger) */}
        <div className="d-flex align-items-center gap-2 d-md-none">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FiSun className="theme-icon sun" /> : <FiMoon className="theme-icon moon" />}
          </button>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            onClick={handleToggle}
            aria-label="Toggle Navigation"
          >
            <FaBars className="toggle-icon" />
          </button>
        </div>

        {/* Mobile Backdrop Overlay */}
        {isOpen && (
          <div className="nav-backdrop d-md-none" onClick={closeMenu}></div>
        )}

        {/* Navbar Menu */}
        <div className={`custom-sidebar-menu ${isOpen ? "show-sidebar" : ""}`}>
          
          {/* Close Menu Icon (Cross) */}
          <button className="close-btn d-md-none" onClick={closeMenu} aria-label="Close Menu">
            <FaTimes />
          </button>

          {/* Links (Center in Desktop) */}
          <ul className="navbar-nav mx-auto custom-nav-links">
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
          </ul>

          {/* Right Action Area (Theme Switcher + Get In Touch Button) */}
          <div className="nav-actions-wrapper">
            {/* Desktop Theme Switcher */}
            <button
              className="theme-toggle-btn d-none d-md-flex"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <FiSun className="theme-icon sun" />
              ) : (
                <FiMoon className="theme-icon moon" />
              )}
            </button>

            {/* Get In Touch Button */}
            <div className="hire-btn-wrapper">
              <a href="#contact" className="hero-btn text-decoration-none" onClick={closeMenu}>
                Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;