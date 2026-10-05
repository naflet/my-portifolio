import React, { useState, useEffect, useRef } from 'react';
import '../styles/contact.css';
import {
  FaEnvelope,
  FaTelegramPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

function Contact() {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Trigger scroll entrance animation via IntersectionObserver
  useEffect(() => {
    const node = contactRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard form dispatch action
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage('Message sent successfully! I will respond shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatusMessage(null), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className={`contact-section ${isVisible ? 'show-contact' : ''}`}
      ref={contactRef}
    >
      <div className="contact-wrapper">
        {/* Status Header Badge */}
        <div className="status-pill-center">
          <span className="pulse-dot"></span>
          Let's Build Something Together
        </div>

        <h2 className="contact-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <p className="contact-subtitle">
          Have a project idea, engineering role, or internship opportunity?
          Drop a line or connect directly through my primary channels.
        </p>

        <div className="contact-container">
          {/* Contact Information Glass Card */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p className="info-desc">
              Reach out through any of these platforms for prompt feedback.
            </p>

            <div className="contact-items-list">
              <a
                href="mailto:nafletnigatu31@gmail.com"
                className="contact-item"
              >
                <div className="icon-wrapper">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="item-details">
                  <span className="item-label">Email</span>
                  <span className="item-val">nafletnigatu31@gmail.com</span>
                </div>
              </a>

              <a
                href="https://t.me/etete21246"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="icon-wrapper">
                  <FaTelegramPlane className="contact-icon" />
                </div>
                <div className="item-details">
                  <span className="item-label">Telegram</span>
                  <span className="item-val">@etete21246</span>
                </div>
              </a>

              <a href="tel:+251981850536" className="contact-item">
                <div className="icon-wrapper">
                  <FaPhoneAlt className="contact-icon" />
                </div>
                <div className="item-details">
                  <span className="item-label">Phone</span>
                  <span className="item-val">+251 981 850 536</span>
                </div>
              </a>

              <div className="contact-item static-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div className="item-details">
                  <span className="item-label">Location</span>
                  <span className="item-val">Asella, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Interactive Form Card */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>

            {statusMessage && (
              <div className="status-banner">{statusMessage}</div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn primary-btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;