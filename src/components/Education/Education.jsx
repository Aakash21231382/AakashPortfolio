import React, { useState } from 'react';
import '../../styles/education.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaSchool, 
  FaCalendarAlt, 
  FaBuilding, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const Education = () => {
  const [activeCategory, setActiveCategory] = useState('education'); // 'education' or 'training'

  // Academic Education (ITI removed as requested, structured matching user's timeline screenshot)
  const academicList = [
    {
      id: 1,
      title: "BCA (Bachelor of Computer Applications)",
      institution: "IIMT University, Meerut, U.P.",
      duration: "2023 - 2026",
      specialization: "Cloud Computing & Cyber Security",
      status: "Graduated",
      icon: <FaGraduationCap />,
      side: "left"
    },
    {
      id: 2,
      title: "Intermediate (12th)",
      institution: "U.P. Board, Uttar Pradesh",
      duration: "2021 - 2023",
      specialization: "Science (Physics, Chemistry, Mathematics)",
      status: "Completed",
      icon: <FaSchool />,
      side: "right"
    },
    {
      id: 3,
      title: "High School (10th)",
      institution: "U.P. Board, Uttar Pradesh",
      duration: "2019 - 2020",
      specialization: "Science & Mathematics",
      status: "Completed",
      icon: <FaSchool />,
      side: "left"
    }
  ];

  // Professional Training (Full Stack Web Development - 6 Months Completed)
  const trainingData = {
    title: "Full Stack Web Development Training & Internship",
    role: "Full Stack Web Developer Intern",
    institution: "Taksh IT Solutions Private Limited",
    location: "Noida, Sector 62, Uttar Pradesh, India",
    duration: "March 2026 - August 2026 (6 Months)",
    status: "Completed (6 Months)",
    isCompleted: true,
    overview: "Successfully completed an intensive 6-month professional industry training program in Full Stack Web Development. Gained comprehensive end-to-end expertise in architecting reactive frontend interfaces with React.js, designing robust backend RESTful APIs with Node.js & Express, and managing relational database architectures with MS SQL Server.",
    highlights: [
      "End-to-end Full Stack web application development leveraging React.js, Node.js, Express.js, and MS SQL Server",
      "Engineered secure RESTful APIs, JWT user authentication, and middleware protocols with Express & Node",
      "Designed dynamic, scalable frontend architectures using React Hooks, state management, and modern responsive UI",
      "Created structured relational database schemas, complex SQL queries, tables, and CRUD operations with MS SQL Server",
      "Integrated full-stack client-server communication with Axios, error handling, and robust CORS handling",
      "Employed collaborative Git & GitHub workflows for code versioning, agile sprints, and team integration"
    ],
    skills: [
      "Full Stack Development",
      "React.js", 
      "Node.js",
      "Express.js",
      "MS SQL Server",
      "SQL Database Modeling",
      "JavaScript (ES6+)", 
      "RESTful APIs & JWT", 
      "HTML5 & CSS3 / Bootstrap", 
      "Git & GitHub Workflow", 
      "Frontend & Backend Integration"
    ]
  };

  return (
    <section className="education-section" id="education">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="section-badge badge-education">Academic & Training Roadmap</span>
          <h2 className="section-title mt-2">
            Education & <span className="title-gradient-accent">Journey</span>
          </h2>
          <p className="section-subtitle">
            Explore my formal academic qualifications and specialized industry training
          </p>
        </div>

        {/* Section Category Switcher (Education vs Training) */}
        <div className="edu-nav-tabs-wrapper mb-5">
          <div className="edu-nav-tabs">
            <button
              className={`edu-tab-btn ${activeCategory === 'education' ? 'active-tab' : ''}`}
              onClick={() => setActiveCategory('education')}
            >
              <FaGraduationCap className="me-2 " fontSize={24}/> 
              Academic Education

            </button>
            <button
              className={`edu-tab-btn ${activeCategory === 'training' ? 'active-tab' : ''}`}
              onClick={() => setActiveCategory('training')}
            >
              <FaLaptopCode className="me-2" fontSize={24}/> Professional Training
              <span className="tab-pulse-badge">6 Months</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Display */}
        <AnimatePresence mode="wait">
          {activeCategory === 'education' ? (
            
            /* =========================================
               1. Alternating Vertical Timeline View
               ========================================= */
            <motion.div
              key="education-timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="edu-timeline-wrapper"
            >
              <div className="edu-timeline-spine"></div>

              <div className="edu-timeline-container">
                {academicList.map((item) => (
                  <div 
                    key={item.id} 
                    className={`edu-timeline-row ${item.side === 'left' ? 'row-left' : 'row-right'}`}
                  >
                    {/* Center Glowing Node Ring */}
                    <div className="edu-timeline-node">
                      <div className="node-outer-ring">
                        <div className="node-inner-dot"></div>
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="edu-timeline-card">
                      {/* Arrow pointer towards node */}
                      <div className={`card-pointer-arrow arrow-${item.side}`}></div>

                      <div className="edu-card-header">
                        <div className="d-flex align-items-center gap-2">
                          <span className="edu-cap-icon text-cyan">{item.icon}</span>
                          <h4 className="edu-degree-title">{item.title}</h4>
                        </div>
                      </div>

                      <div className="edu-card-inst-line">
                        <span className="inst-name">{item.institution}</span>
                      </div>

                      <div className="edu-card-meta-row">
                        <span className="edu-year-pill">
                          <FaCalendarAlt className="me-1" /> {item.duration}
                        </span>
                      </div>

                      <div className="edu-card-spec-box">
                        <span className="spec-label">{item.specialization}</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>

          ) : (

            /* =========================================
               2. Professional Training Showcase Card
               ========================================= */
            <motion.div
              key="training-showcase"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="edu-training-container"
            >
              <div className="training-featured-card">
                
                {/* Glowing Top Accent */}
                <div className="training-top-accent"></div>

                <div className="training-card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <span className="training-badge-live">
                      <span className="pulse-green-dot"></span> {trainingData.status}
                    </span>
                    <span className="training-duration-pill">
                      <FaCalendarAlt className="me-1 text-cyan" /> {trainingData.duration}
                    </span>
                  </div>

                  <h3 className="training-main-title">{trainingData.title}</h3>
                  <h5 className="training-role-title text-cyan">{trainingData.role}</h5>

                  <div className="training-company-line mt-2">
                    <FaBuilding className="me-2 text-cyan" />
                    <strong>{trainingData.institution}</strong>
                    <span className="mx-2">•</span>
                    <span><FaMapMarkerAlt className="me-1 text-muted" />{trainingData.location}</span>
                  </div>
                </div>

                <div className="training-card-body">
                  <p className="training-overview-text">
                    {trainingData.overview}
                  </p>

                  <div className="training-points-block mt-4">
                    <h6 className="training-subheading">Key Focus Areas & Curriculum:</h6>
                    <ul className="training-checklist">
                      {trainingData.highlights.map((point, index) => (
                        <li key={index}>
                          <FaCheckCircle className="check-icon text-cyan" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="training-skills-block mt-4">
                    <h6 className="training-subheading">Core Tech Stack & Tools:</h6>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {trainingData.skills.map((skill, index) => (
                        <span key={index} className="training-skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Education;