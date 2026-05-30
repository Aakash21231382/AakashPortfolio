// import React, { useState } from "react";
// import "../../styles/navbar.css";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-md custom-navbar fixed-top">
//       <div className="container">
//         {/* Logo */}
//         <a href="#home" className="navbar-brand logo">
//           Aakash
//         </a>

//         {/* Hamburger Icon - Overflow fixed */}
//         <button
//           className="navbar-toggler custom-toggler d-md-none"
//           type="button"
//           onClick={handleToggle}
//         >
//           <FaBars className="toggle-icon" />
//         </button>

//         {/* Navbar Menu */}
//         <div className={`custom-sidebar-menu ${isOpen ? "show-sidebar" : ""}`}>
          
//           {/* Close Menu Icon (Cross) */}
//           <button className="close-btn d-md-none" onClick={closeMenu}>
//             <FaTimes />
//           </button>

//           <ul className="navbar-nav w-100 align-items-center custom-nav-links">
//             <li className="nav-item">
//               <a href="#home" className="nav-link" onClick={closeMenu}>
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a href="#about" className="nav-link" onClick={closeMenu}>
//                 About
//               </a>
//             </li>

//             <li className="nav-item">
//               <a href="#skills" className="nav-link" onClick={closeMenu}>
//                 Skills
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#education" className="nav-link" onClick={closeMenu}>
//                 Education
//               </a>
//             </li>

//             <li className="nav-item">
//               <a href="#projects" className="nav-link" onClick={closeMenu}>
//                 Projects
//               </a>
//             </li>

//             <li className="nav-item">
//               <a href="#certificates" className="nav-link" onClick={closeMenu}>
//                 Certificate
//               </a>
//             </li>

//             {/* Get In Touch Button */}
//             <li className="nav-item hire-btn-wrapper">
//               <a href="#contact" className="hero-btn text-decoration-none" onClick={closeMenu}>
//                 Get In Touch
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





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
    <nav className="navbar navbar-expand-md custom-navbar fixed-top">
      <div className="container">
        {/* Logo (Left) */}
        <a href="#home" className="navbar-brand logo">
          Aakash
        </a>

        {/* Hamburger Icon */}
        <button
          className="navbar-toggler custom-toggler d-md-none"
          type="button"
          onClick={handleToggle}
        >
          <FaBars className="toggle-icon" />
        </button>

        {/* Mobile Backdrop Overlay (Bahar click par close karne ke liye) */}
        {isOpen && (
          <div className="nav-backdrop d-md-none" onClick={closeMenu}></div>
        )}

        {/* Navbar Menu */}
        <div className={`custom-sidebar-menu ${isOpen ? "show-sidebar" : ""}`}>
          
          {/* Close Menu Icon (Cross) */}
          <button className="close-btn d-md-none" onClick={closeMenu}>
            <FaTimes />
          </button>

          {/* Links (Center in Desktop) - mx-auto se center honge */}
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

          {/* Get In Touch Button (Right in Desktop) */}
          <div className="hire-btn-wrapper">
            <a href="#contact" className="hero-btn text-decoration-none" onClick={closeMenu}>
              Get In Touch
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;