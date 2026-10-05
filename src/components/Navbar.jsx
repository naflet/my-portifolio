import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Add scroll listener for sticky header background blur and active section spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          Naflet <span className="gradient-text">Nigatu</span>
        </a>

        {/* Animated Hamburger Menu Button (Mobile) */}
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={activeSection === sectionId ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          {/* Direct CTA Action Button */}
          <li className="nav-cta-item">
            <a href="#contact" className="nav-cta-btn" onClick={closeMenu}>
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;