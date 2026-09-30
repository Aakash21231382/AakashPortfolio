import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../../styles/whatsapp.css';

const FloatingWhatsApp = () => {
  const phoneNumber = '918395086529';
  const defaultMessage = encodeURIComponent('Hi Aakash, I saw your portfolio and would like to connect!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="floating-whatsapp-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Aakash on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-pulse-ring"></span>
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-tooltip">Chat with me</span>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
