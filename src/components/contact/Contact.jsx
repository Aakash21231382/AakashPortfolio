import React, { useState } from "react";
import "../../styles/contact.css";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Hiring / Full-Time Role",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bkf4r3k",
        "template_olv6jge",
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not Provided",
          inquiry_type: formData.inquiryType,
          subject: formData.subject,
          message: formData.message,
        },
        "ZpzhhtAaOyt5MdR6G",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);

          toast.success(
            "Thank you! Your message has been sent successfully. I will contact you soon.",
          );

          setFormData({
            name: "",
            email: "",
            company: "",
            inquiryType: "Hiring / Full-Time Role",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);

          toast.error("Failed to send message. Please try again later.");
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        <div className="text-center mb-5">
          <span className="section-badge badge-contact">Let's Connect</span>
          <h2 className="section-title mt-2">
            Hire Me / <span className="title-gradient-accent">Get In Touch</span>
          </h2>
          <p className="section-subtitle">Interested in working together or hiring me for full-time & internship roles? Drop a message!</p>
        </div>

        <div className="row justify-content-center g-5">
          {/* Left Side: Contact Information Cards */}
          <motion.div
            className="col-lg-5 col-md-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-info-wrapper">
              <h3 className="contact-heading">Looking for a Dedicated Full-Stack Developer?</h3>

              <p className="contact-desc">
                As a passionate Full-Stack Web developer (React.js, Node.js, MS SQL) and BCA (Cloud & Cyber Security) graduate, I am eager to join high-impact engineering teams, build scalable web architectures, and contribute actively from day one.
              </p>

              <div className="info-cards-stack">
                {/* Email Item */}
                <a 
                  href="mailto:aakashwebdev1@gmail.com" 
                  className="info-item-link"
                  style={{ '--item-accent': '#F43F5E', '--item-glow': 'rgba(244, 63, 94, 0.3)' }}
                >
                  <div className="info-icon" style={{ background: 'rgba(244, 63, 94, 0.12)', color: '#F43F5E', borderColor: '#F43F5E' }}>
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="info-label">Direct Email</h4>
                    <p className="info-val">aakashwebdev1@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp Direct Chat Item */}
                <a 
                  href="https://wa.me/918395086529?text=Hi%20Aakash,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item-link"
                  style={{ '--item-accent': '#25D366', '--item-glow': 'rgba(37, 211, 102, 0.35)' }}
                >
                  <div className="info-icon" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#25D366', borderColor: '#25D366' }}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="info-label">WhatsApp Chat</h4>
                    <p className="info-val">+91 8395086529 (Click to Chat)</p>
                  </div>
                </a>

                {/* Location Item */}
                <div 
                  className="info-item-link"
                  style={{ '--item-accent': '#F59E0B', '--item-glow': 'rgba(245, 158, 11, 0.3)' }}
                >
                  <div className="info-icon" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#F59E0B', borderColor: '#F59E0B' }}>
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="info-label">Current Location</h4>
                    <p className="info-val">Noida, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Hiring Form */}
          <motion.div
            className="col-lg-7 col-md-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Row 1: Name & Email */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label-custom">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Recruiter"
                    className="form-control custom-input"
                    required
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label-custom">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className="form-control custom-input"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Company Name & Inquiry Type */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label-custom">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name (Optional)"
                    className="form-control custom-input"
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label-custom">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="form-control custom-input custom-select"
                  >
                    <option value="Hiring / Full-Time Role">
                       Hiring / Full-Time Role
                    </option>
                    <option value="Internship / Trainee Role">
                       Internship / Trainee Opportunity
                    </option>
                    <option value="Freelance / Contract Project">
                       Freelance / Contract Project
                    </option>
                    <option value="General Inquiry">
                       General Inquiry / Tech Chat
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="mb-4">
                <label className="form-label-custom">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (e.g. Interview Invitation for Frontend Role)"
                  className="form-control custom-input"
                  required
                />
              </div>

              {/* Row 4: Message */}
              <div className="mb-4">
                <label className="form-label-custom">Your Message *</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the job role, project scope, or opportunity..."
                  className="form-control custom-input custom-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="hero-btn w-100">
                Send Message / Hire Request <FiSend className="ms-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
