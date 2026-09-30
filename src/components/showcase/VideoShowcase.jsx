import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../../assets/videos/video1.mp4';
import '../../styles/videoShowcase.css';

const VideoShowcase = () => {
  return (
    <section className="video-showcase-section" id="showcase-video">
      <div className="container text-center">
        <motion.div 
          className="video-showcase-container"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="showcase-video"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
