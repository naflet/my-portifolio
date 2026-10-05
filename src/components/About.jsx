import React, { useState, useEffect, useRef } from 'react';
import { 
  FaServer, 
  FaCode, 
  FaDatabase, 
  FaRocket, 
  FaCheckCircle, 
  FaLayerGroup, 
  FaTerminal 
} from 'react-icons/fa';
import '../styles/about.css';

// 1. Interactive Architecture Tier Data
const ARCHITECTURE_TIERS = {
  frontend: {
    title: 'Client & Mobile Layer',
    subtitle: 'Responsive, Pixel-Perfect UI/UX',
    description: 'Specializing in React, Next.js, and React Native. Focusing on SSR, dynamic state management, client-side caching, and sub-second load times.',
    tools: ['React 18+', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand'],
    metrics: { speed: '99/100 Lighthouse', feel: '60 FPS Animations' }
  },
  backend: {
    title: 'API & Microservices Layer',
    subtitle: 'Resilient Server Architecture',
    description: 'Engineering RESTful & GraphQL APIs with Node.js and Express. Designing modular microservices, custom middleware, and JWT/OAuth2 security protocols.',
    tools: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'JWT/OAuth2'],
    metrics: { latency: '<50ms Response', throughput: 'High-Concurrency' }
  },
  database: {
    title: 'Data & DevOps Layer',
    subtitle: 'Scalable Persistence & Deployment',
    description: 'Managing relational (PostgreSQL) and document (MongoDB) databases with ORMs like Prisma. Containerizing environments using Docker and CI/CD pipelines.',
    tools: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Docker', 'Redis', 'Git CI/CD'],
    metrics: { uptime: '99.9% Reliable', query: 'Indexed & Optimized' }
  }
};

// 2. Interactive Story Tabs
const STORY_TABS = [
  {
    id: 'mindset',
    label: 'Engineering Mindset',
    content: 'Currently completing my Computer Science degree while architecting end-to-end full-stack applications. I view software engineering as a discipline of trade-offs: balancing high-velocity feature delivery with clean, maintainable architecture and strict security standards.'
  },
  {
    id: 'approach',
    label: 'Full-Stack Philosophy',
    content: 'I don\'t treat the frontend and backend as separate worlds. A great user interface relies on clean, predictable API endpoints and optimized database queries. By mastering both ends, I eliminate integration bottlenecks and build cohesive digital products.'
  },
  {
    id: 'growth',
    label: 'Continuous Learning',
    content: 'Technology evolves rapidly, and staying ahead requires constant experimentation. From optimizing SQL indexing to exploring server-driven UI patterns, I am committed to modernizing my toolkit and delivering production-ready software.'
  }
];

export default function About() {
  const [selectedTier, setSelectedTier] = useState('frontend');
  const [activeStory, setActiveStory] = useState('mindset');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for Smooth Entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={`about-container ${isVisible ? 'visible' : ''}`}
    >
      <div className="about-wrapper">
        
        {/* SECTION HEADER */}
        <div className="about-header">
          <span className="section-subtitle">// ARCHITECTURE & BACKGROUND</span>
          <h2 className="section-title">
            About <span className="highlight">My Approach</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* TOP ROW: INTERACTIVE STORY & STATS */}
        <div className="about-top-grid">
          
          {/* Interactive Narrative Box */}
          <div className="story-card">
            <div className="story-tabs">
              {STORY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`story-tab-btn ${activeStory === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveStory(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="story-body">
              <p>{STORY_TABS.find(t => t.id === activeStory)?.content}</p>
            </div>
          </div>

          {/* Interactive Live Metrics Box */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon"><FaCode /></div>
              <div className="metric-val">Full-Stack</div>
              <div className="metric-label">End-to-End Solutions</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon"><FaServer /></div>
              <div className="metric-val">REST & GraphQL</div>
              <div className="metric-label">Scalable API Design</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon"><FaDatabase /></div>
              <div className="metric-val">SQL & NoSQL</div>
              <div className="metric-label">Optimized Schemas</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon"><FaRocket /></div>
              <div className="metric-val">100%</div>
              <div className="metric-label">Responsive & Fast</div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: INTERACTIVE SYSTEM ARCHITECTURE INSPECTOR */}
        <div className="arch-inspector shadow-2xl">
          <div className="inspector-header">
            <div className="inspector-title">
              <FaLayerGroup className="icon" /> Interactive Full-Stack System Inspector
            </div>
            <span className="hint-tag">Click a layer to inspect tech stack</span>
          </div>

          <div className="inspector-grid">
            
            {/* Tier Selectors */}
            <div className="tier-buttons">
              <button
                className={`tier-btn ${selectedTier === 'frontend' ? 'active' : ''}`}
                onClick={() => setSelectedTier('frontend')}
              >
                <FaCode /> <span>1. Client Layer (Frontend)</span>
              </button>

              <button
                className={`tier-btn ${selectedTier === 'backend' ? 'active' : ''}`}
                onClick={() => setSelectedTier('backend')}
              >
                <FaServer /> <span>2. Logic Layer (Backend)</span>
              </button>

              <button
                className={`tier-btn ${selectedTier === 'database' ? 'active' : ''}`}
                onClick={() => setSelectedTier('database')}
              >
                <FaDatabase /> <span>3. Data Layer (DevOps & DB)</span>
              </button>
            </div>

            {/* Active Tier Inspector Details */}
            <div className="tier-details">
              <h3>{ARCHITECTURE_TIERS[selectedTier].title}</h3>
              <p className="tier-subtitle">{ARCHITECTURE_TIERS[selectedTier].subtitle}</p>
              <p className="tier-desc">{ARCHITECTURE_TIERS[selectedTier].description}</p>

              <div className="tier-tools">
                <span className="tools-title">Primary Toolset:</span>
                <div className="tool-chips">
                  {ARCHITECTURE_TIERS[selectedTier].tools.map((tool, idx) => (
                    <span key={idx} className="tool-chip">
                      <FaCheckCircle className="check-icon" /> {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Metric Benchmarks */}
              <div className="tier-benchmarks">
                {Object.entries(ARCHITECTURE_TIERS[selectedTier].metrics).map(([key, val], i) => (
                  <div key={i} className="benchmark-badge">
                    <span className="key">{key}:</span> <span className="val">{val}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}