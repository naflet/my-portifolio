import React, { useState, useEffect, useRef } from 'react';
import { 
  FaTerminal, 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaGithub, 
  FaLinkedin, 
  FaArrowRight 
} from 'react-icons/fa';
import profile from '../assets/profile.png';
import '../styles/hero.css';

const TECH_CATEGORIES = {
  All: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Docker', 'GraphQL'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  Backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Docker']
};

export default function Hero() {
  // --- 1. Interactive 3D Card Tilt State ---
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (y / rect.height) * -20, y: (x / rect.width) * 20 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  // --- 2. Interactive Live Terminal State ---
  const [activeTab, setActiveTab] = useState('All');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'Welcome to Naflet Nigatu\'s Full-Stack Shell [v2.4.0]' },
    { type: 'sys', text: 'Type "help" or "skills" to interact with the console.' }
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.trim().toLowerCase();
      let response = '';

      if (cmd === 'help') {
        response = 'Available commands: help, skills, stack, contact, clear, sudo hire';
      } else if (cmd === 'skills' || cmd === 'stack') {
        response = 'Frontend: React, Next.js, TS | Backend: Node.js, Express, Postgres, Docker';
      } else if (cmd === 'contact') {
        response = 'Email: contact@naflet.dev | GitHub: github.com/naflet';
      } else if (cmd === 'sudo hire') {
        response = '🎉 Access Granted! Redirecting to schedule an interview...';
      } else if (cmd === 'clear') {
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      } else if (cmd !== '') {
        response = `Command not recognized: "${cmd}". Type "help" for options.`;
      }

      setTerminalLogs(prev => [
        ...prev, 
        { type: 'user', text: `$ ${terminalInput}` },
        ...(response ? [{ type: 'sys', text: response }] : [])
      ]);
      setTerminalInput('');
    }
  };

  return (
    <section className="hero-container">
      <div className="hero-grid">

        {/* LEFT COLUMN: 3D Interactive Card & Bio */}
        <div className="hero-left">
          
          {/* Status Badge */}
          <div className="status-pill">
            <span className="pulse-dot"></span>
            Available for Full-Stack & Engineering Roles
          </div>

          {/* 3D Dynamic Tilt Card */}
          <div 
            ref={cardRef}
            className="tilt-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
          >
            <div className="card-inner">
              <img src={profile} alt="Naflet Nigatu" className="hero-avatar" />
              <div className="card-info">
                <h2>Naflet Nigatu</h2>
                <p className="role-title">Full-Stack Engineer</p>
              </div>
            </div>
          </div>

          <h1 className="hero-heading">
            Architecting <span className="gradient-text">Scalable Systems</span> & Modern Web Apps
          </h1>

          <p className="hero-bio">
            Passionate full-stack developer bridging high-performance backend architectures with pixel-perfect interactive web and mobile interfaces.
          </p>

          {/* Interactive Tech Stack Filter Chips */}
          <div className="filter-container">
            <span className="filter-label">Filter Stack:</span>
            {Object.keys(TECH_CATEGORIES).map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="tech-tags">
            {TECH_CATEGORIES[activeTab].map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#projects" className="btn primary-btn">
              Explore Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Live Terminal Widget */}
        <div className="hero-right">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">bash - naflet@fullstack-dev:~</span>
            </div>

            <div className="terminal-body">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={`log-line ${log.type}`}>
                  {log.text}
                </div>
              ))}

              {/* Live Command Line Input */}
              <div className="input-line">
                <span className="prompt">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="type 'help' or 'sudo hire'..."
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}