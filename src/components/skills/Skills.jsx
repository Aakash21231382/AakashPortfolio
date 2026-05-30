import React from 'react';
// import skills from '../../data/skillsData';
import skills from '../../data/skillsData';
import '../../styles/skills.css';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
       
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }} // Har card thode delay ke sath aayega
            >
              <div className="skill-card">
                {/* Yahan Icon Add Kiya Gaya Hai */}
                <span className="skill-icon">{skill.icon}</span>
                <h4>{skill.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;