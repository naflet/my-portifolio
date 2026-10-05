
import { useEffect, useRef, useState } from "react";
import "../styles/footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animate footer when it enters the viewport
  useEffect(() => {
    const node = footerRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? "show-footer" : ""}`}
    >
      <div className="footer-container">
        {/* =========================
            FOOTER TOP
        ========================== */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-name">
              Naflet <span className="gradient-text">Nigatu</span>
            </h3>

            <p className="footer-description">
              Computer Science Student & Full-Stack / Mobile Developer
              passionate about building modern web and mobile applications
              with React, React Native, and Node.js.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social-wrapper">
            <h4>Connect</h4>

            <div className="footer-socials">
              <a
                href="https://github.com/naflet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/naflet-nigatu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://t.me/etete21246"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>

              <a
                href="mailto:nafletnigatu31@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* =========================
            FOOTER BOTTOM
        ========================== */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Naflet Nigatu. Built with React & made with{" "}
            <FaHeart className="heart-icon" />.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to Top"
            title="Back to Top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
