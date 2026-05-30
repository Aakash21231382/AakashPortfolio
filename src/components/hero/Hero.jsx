// import React from "react";
// import "../../styles/hero.css";
// import { motion } from "framer-motion";
// import aakash from "../../assets/aakash.png";

// const Hero = () => {
//   return (
//     <section className="hero-section" id="home">
//       <div className="container">
//         <div className="row align-items-center text-center text-lg-start">
//           <div className="col-12 col-lg-6 mb-5 mb-lg-0">
//             <motion.h1
//               className="hero-title"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               Hi, I'm <span className="hero-title">Aakash</span>
//             </motion.h1>

//             <div className="subtitle-wrapper">
//               <h2 className="hero-subtitle">MERN Stack Developer</h2>
//             </div>

//             <p className="hero-description">
//               MERN Stack Developer passionate about creating fast, scalable, and
//               secure web applications while continuously learning modern
//               technologies and improving development skills.
//             </p>

//             <button className="hero-btn">Hire Me</button>
//           </div>

//           <div className="col-12 col-lg-6 text-center">
//             <img src={aakash} alt="profile" className="hero-image" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






import React from "react";
import "../../styles/hero.css";
import { motion } from "framer-motion";
import aakash from "../../assets/aakash.png";
import { FiDownload } from "react-icons/fi"; // Download icon import kiya
import CV from '../../assets/cv/Aakash_cv.pdf'
const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm <span className="hero-title">Aakash</span>
            </motion.h1>
            <div className="subtitle-wrapper">
              <h2 className="hero-subtitle">MERN Stack Developer</h2>
            </div>
            <p className="hero-description">
              MERN Stack Developer passionate about creating fast, scalable, and
              secure web applications while continuously learning modern
              technologies and improving development skills.
            </p>
            <div className="hero-btn-container d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
              <a href="#contact" className="hero-btn text-decoration-none" >Hire Me</a>             
              <a href={CV} download className="hero-btn-outline">
                Download CV <FiDownload style={{ marginLeft: "8px" }} />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <img src={aakash} alt="profile" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;