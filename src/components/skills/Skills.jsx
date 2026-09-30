import React from 'react';
import skills from '../../data/skillsData';
import '../../styles/skills.css';
import { motion } from 'framer-motion';

const SkillTile = ({ skill, index }) => {
  return (
    <motion.div
      className="col-6 col-md-4 col-lg-2"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
    >
      <div 
        className="skill-icon-tile"
        style={{
          '--skill-color': skill.color,
          '--skill-glow': skill.glowColor
        }}
      >
        <div className="skill-tile-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <h4 className="skill-tile-title">{skill.title}</h4>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge badge-skills">Technical Stack</span>
          <h2 className="section-title mt-2">
            Technical Skills & <span className="title-gradient-accent">Mastery</span>
          </h2>
          <p className="section-subtitle">
            Modern technologies, frameworks, databases, and tools I use to build scalable web applications
          </p>
        </div>

        {/* Clean 6-Columns Modern Grid Matching Reference Design */}
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <SkillTile 
              key={skill.id} 
              skill={skill} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;