import React from "react";
import "../../styles/about.css";
import about from "../../assets/about.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="text-center text-lg-start mb-5">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="row align-items-center text-center text-lg-start">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <img src={about} alt="about" className="about-image" />
          </div>

          <div className="col-12 col-lg-6">
            <div className="about-content">
              <p className="about-text">
                I am a passionate and dedicated MERN Stack Developer currently
                pursuing Bachelor of Computer Applications (Cloud & Cyber
                Security). I enjoy building modern, user-friendly, and scalable
                web applications using technologies like React.js, Node.js,
                Express.js, and MongoDB. I am continuously learning new
                technologies and improving my development skills to create
                innovative digital solutions. Along with web development, I have
                a strong interest in cloud computing and cybersecurity. I am a
                quick learner, team player, and always ready to take on new
                challenges that help me grow professionally and personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
