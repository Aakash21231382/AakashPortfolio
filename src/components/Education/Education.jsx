import React from 'react';
import '../../styles/education.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaSchool, FaTools } from 'react-icons/fa';

const Education = () => {
  // Education Data based on your resume
  const educationData = [

    {
        id: 1,
        title: "Frontend Web Development Training",
        institution: "Taksh IT Solutions Private Limited ",
        year: "March 2026 - Present",
        description: "Currently undergoing 6 months of professional Frontend Web Development training at Taksh IT Solutions Private Limited, specializing in React.js. Gaining hands-on experience in building responsive web applications, API integration, component-based architecture, and modern frontend development practices through real-world projects.",
        icon: <FaLaptopCode/>
    },
    {
      id: 2,
      title: "Bachelor of Computer Applications (Cloud & Cyber Security)",
      institution: "IIMT University",
      year: "2023 - 2026",
      description: "Pursuing specialized BCA focusing on Cloud Computing, Cyber Security, and modern web technologies (MERN Stack).",
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      title: "12th (Intermediate)",
      institution: "U.P. Board",
      year: "Passed in 2023",
      description: "Completed higher secondary education with a strong foundation in core subjects.",
      icon: <FaSchool />
    },
    {
      id: 4,
      title: "ITI Diesel Mechanic",
      institution: "Industrial Training Institute",
      year: "2020 - 2022",
      description: "Gained hands-on technical skills and practical knowledge in mechanics and machine operations.",
      icon: <FaTools />
    },
    {
      id: 5,
      title: "10th (High School)",
      institution: "U.P. Board",
      year: "Passed in 2020",
      description: "Completed secondary education successfully.",
      icon: <FaSchool />
    },


  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="section-title">My Education</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              
              {educationData.map((edu, index) => (
                <motion.div 
                  className="timeline-item" 
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline Icon */}
                  <div className="timeline-icon">
                    {edu.icon}
                  </div>

                  {/* Timeline Content */}
                  <div className="timeline-content">
                    <span className="timeline-year">{edu.year}</span>
                    <h3 className="timeline-title">{edu.title}</h3>
                    <h4 className="timeline-institution">{edu.institution}</h4>
                    <p className="timeline-text">{edu.description}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;