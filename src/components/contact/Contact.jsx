import React, { useState } from "react";
import "../../styles/contact.css";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiPhone } from "react-icons/fi";
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
          <h2 className="section-title">Hire Me</h2>
        </div>

        <div className="row justify-content-center">
          {/* Left Side: Contact Information */}
          <motion.div
            className="col-lg-5 col-md-12 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-info-wrapper">
              <h3 className="contact-heading">Looking for a MERN Developer?</h3>

              <p className="contact-desc">
              As a MERN Stack trainee and BCA (Cloud & Cyber Security) student, I am continuously building projects and strengthening my technical skills. I am currently exploring internship and junior developer opportunities to gain industry experience and contribute to innovative teams. Let's connect and discuss potential opportunities.
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>aakashwebdev1@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+918395086529</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Hiring Form */}
          <motion.div
            className="col-lg-7 col-md-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Row 1: Name & Email */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name / HR Name"
                    className="form-control custom-input"
                    required
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Company Email"
                    className="form-control custom-input"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Company Name & Inquiry Type */}
              <div className="row">
                <div className="col-md-6 mb-4">
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
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="form-control custom-input custom-select"
                  >
                    <option value="Hiring / Full-Time Role">
                      Hiring / Full-Time Role
                    </option>
                    <option value="Freelance / Contract Project">
                      Freelance / Contract Project
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (e.g., Interview Invitation)"
                  className="form-control custom-input"
                  required
                />
              </div>

              {/* Row 4: Message */}
              <div className="mb-4">
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project details or Job description..."
                  className="form-control custom-input custom-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="hero-btn">
                Send Request <FiSend className="ms-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
