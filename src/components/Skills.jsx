
import React, { useState, useEffect, useRef } from "react";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaSearch,
  FaTerminal,
  FaTimes,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiRedis,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

import { skillCategories, skillsData } from "../data/skills";

import "../styles/skills.css";

const ICON_MAP = {
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiGraphql: <SiGraphql />,
  BiLogoPostgresql: <BiLogoPostgresql />,
  SiMongodb: <SiMongodb />,
  SiRedis: <SiRedis />,
  FaDocker: <FaDocker />,
  FaAws: <FaAws />,
  FaGitAlt: <FaGitAlt />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillsRef = useRef(null);

  // ==============================
  // Intersection Observer
  // ==============================
  useEffect(() => {
    const node = skillsRef.current;

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

  // ==============================
  // Filter Skills
  // ==============================
  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      activeCategory === "All" || skill.category === activeCategory;

    const search = searchQuery.toLowerCase().trim();

    const matchesSearch =
      skill.name.toLowerCase().includes(search) ||
      skill.description.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`skills-section ${isVisible ? "show-skills" : ""}`}
    >
      <div className="skills-container">
        {/* ==============================
            HEADER
        ============================== */}
        <div className="skills-header">
          <span className="skills-subtitle">
            // TECHNICAL TOOLSET
          </span>

          <h2>Skills &amp; Expertise</h2>

          <div className="skills-underline"></div>
        </div>

        {/* ==============================
            CONTROLS
        ============================== */}
        <div className="skills-controls">
          {/* Category Pills */}
          <div className="category-pills">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}

                <span className="badge">
                  {cat === "All"
                    ? skillsData.length
                    : skillsData.filter(
                        (skill) => skill.category === cat
                      ).length}
                </span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="search-box">
            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search skill (e.g. JavaScript, Node, Redis)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search skills"
            />

            {searchQuery && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* ==============================
            SKILLS GRID
        ============================== */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className={`skill-card ${
                selectedSkill?.id === skill.id ? "selected" : ""
              }`}
              onClick={() => setSelectedSkill(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedSkill(skill);
                }
              }}
            >
              <div className="skill-card-top">
                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {ICON_MAP[skill.icon] || <FaCode />}
                </div>

                <span className="skill-level-badge">
                  {skill.level}%
                </span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>

              <span className="skill-cat">{skill.category}</span>

              {/* Progress */}
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    backgroundColor: skill.color,
                  }}
                />
              </div>

              <div className="inspect-hint">
                <FaTerminal className="icon" />
                Click to Inspect Details
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <div className="no-skills">
              <FaSearch />

              <p>
                No matching skills found for "{searchQuery}".
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* ==============================
            TERMINAL INSPECTOR MODAL
        ============================== */}
        {selectedSkill && (
          <div
            className="skill-modal-overlay"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="skill-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="modal-header">
                <div className="terminal-dots">
                  <span
                    className="dot red"
                    onClick={() => setSelectedSkill(null)}
                  ></span>

                  <span className="dot yellow"></span>

                  <span className="dot green"></span>
                </div>

                <span className="modal-title">
                  inspect --skill={selectedSkill.id}.json
                </span>

                <button
                  type="button"
                  className="close-btn"
                  onClick={() => setSelectedSkill(null)}
                  aria-label="Close skill details"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Terminal Content */}
              <div className="modal-body">
                {/* Skill Info */}
                <div className="modal-top-info">
                  <div
                    className="modal-icon"
                    style={{ color: selectedSkill.color }}
                  >
                    {ICON_MAP[selectedSkill.icon] || <FaCode />}
                  </div>

                  <div>
                    <h3>{selectedSkill.name}</h3>

                    <span className="category-tag">
                      {selectedSkill.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="modal-desc">
                  {selectedSkill.description}
                </p>

                {/* Level */}
                <div className="modal-level-section">
                  <div className="level-header">
                    <span>Proficiency Index</span>

                    <span
                      className="level-val"
                      style={{ color: selectedSkill.color }}
                    >
                      {selectedSkill.level} / 100
                    </span>
                  </div>

                  <div className="progress-bar-bg modal-progress">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${selectedSkill.level}%`,
                        backgroundColor: selectedSkill.color,
                      }}
                    />
                  </div>
                </div>

                {/* Highlights */}
                <div className="modal-highlights">
                  <h4>Key Capabilities:</h4>

                  <ul>
                    {selectedSkill.highlights.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
