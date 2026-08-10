import "./App.css";
import { useState } from "react";

import {
  SiFlask,
  SiSqlalchemy,
  SiJavascript,
  SiSqlite,
  SiChartdotjs,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiNumpy
} from "react-icons/si";

function App() {
  const [activeCard, setActiveCard] = useState(null);

  const openCard = (card) => {
    setActiveCard(card);
  };

  const closeCard = (e) => {
    e.stopPropagation();
    setActiveCard(null);
  };

  return (
    <div className="portfolio">

      <main className={`card-stage ${activeCard ? "expanded" : ""}`}>

        {/* =====================================================
            LEFT CARD - ABOUT
        ===================================================== */}

        <section
          className={`interactive-card about-card ${
            activeCard === "about"
              ? "active"
              : activeCard
              ? "inactive"
              : ""
          }`}
          onClick={() => !activeCard && openCard("about")}
        >

          <div className="card-top">
            <span>ABOUT ME</span>
            <span>EXPLORE</span>
          </div>

          <div className="card-content">

            <p className="eyebrow">
              A BIT MORE
            </p>

            <h2>
              A bit more
              <br />
              about me<span>.</span>
            </h2>

            <p className="short-description">
              Computer Science student focused on Artificial
              Intelligence, Machine Learning, software
              development and problem solving.
            </p>

          </div>

          <div className="card-bottom">
            <span>EXPLORE</span>
            <span className="arrow">↗</span>
          </div>


          {/* =====================================================
              EXPANDED ABOUT CARD
          ===================================================== */}

          {activeCard === "about" && (

            <div className="expanded-content about-expanded">

              <button
                className="close-button"
                onClick={closeCard}
              >
                ×
              </button>

              <p className="expanded-eyebrow">
                ABOUT ME
              </p>

              <h1>
                Building with
                <br />
                <span>curiosity.</span>
              </h1>

              <div className="about-text">

                <p>
                  I'm a BE student specializing in Artificial
                  Intelligence & Machine Learning, with a strong
                  interest in software development and problem
                  solving.
                </p>

                <p>
                  I enjoy building practical applications,
                  exploring AI/ML concepts and strengthening my
                  fundamentals through Data Structures &
                  Algorithms.
                </p>

                <p>
                  Currently, I'm focused on becoming a stronger
                  software engineer by combining development,
                  machine learning and consistent problem solving.
                </p>

              </div>


              {/* FOCUS + EDUCATION */}

              <div className="about-details">

                <div className="about-detail-block">

                  <p className="detail-label">
                    CURRENTLY FOCUSED ON
                  </p>

                  <div className="focus-list">

                    <span>
                      <b className="pill-icon">◈</b>
                      AI / Machine Learning
                    </span>

                    <span>
                      <b className="pill-icon">⌘</b>
                      Full-Stack Development
                    </span>

                    <span>
                      <b className="pill-icon">◇</b>
                      Data Structures & Algorithms
                    </span>

                    <span>
                      <b className="pill-icon">◎</b>
                      Problem Solving
                    </span>

                  </div>

                </div>


                <div className="about-detail-block">

                  <p className="detail-label">
                    EDUCATION
                  </p>

                  <h3>
                    B.E. Computer Science & Engineering
                  </h3>

                  <p className="detail-muted">
                    Artificial Intelligence & Machine Learning
                  </p>

                  <div className="education-meta">

                    <div>
                      <strong>8.39</strong>
                      <span>CGPA</span>
                    </div>

                    <div className="education-divider"></div>

                    <div>
                      <strong>BE</strong>
                      <span>CSE - AIML</span>
                    </div>

                  </div>

                </div>

              </div>


              {/* TECH STACK */}

              <div className="about-stack">

                <p className="detail-label">
                  TECH STACK
                </p>

                <div className="stack-list">

                  <span>
                    <b className="stack-icon">🐍</b>
                    Python
                  </span>

                  <span>
                    <b className="stack-icon">◒</b>
                    Flask
                  </span>

                  <span>
                    <b className="stack-icon">⚛</b>
                    React
                  </span>

                  <span>
                    <b className="stack-icon">JS</b>
                    JavaScript
                  </span>

                  <span>
                    <b className="stack-icon">C</b>
                    C++
                  </span>

                  <span>
                    <b className="stack-icon">◉</b>
                    SQL
                  </span>

                  <span>
                    <b className="stack-icon">◆</b>
                    Git
                  </span>

                  <span>
                    <b className="stack-icon">◎</b>
                    Scikit-learn
                  </span>

                </div>

              </div>


              {/* LINKS */}

              <div className="about-links">

                <a
                  href="https://github.com/Rohan26096"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GITHUB ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/rohan-m-414151369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  LINKEDIN ↗
                </a>

                <a
                  href="https://leetcode.com/u/rohan_m_24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  LEETCODE ↗
                </a>

              </div>

            </div>
          )}

        </section>


        {/* =====================================================
            CENTER CARD
        ===================================================== */}

        <section
          className={`interactive-card profile-card ${
            activeCard === "profile"
              ? "active"
              : activeCard
              ? "inactive"
              : ""
          }`}
          onClick={() => !activeCard && openCard("profile")}
        >

          <div className="card-top">

            <span>PORTFOLIO</span>

            <button
              className="menu-button"
              onClick={(e) => e.stopPropagation()}
            >
              ☰
            </button>

          </div>


          <div className="profile-content">

            <p className="profile-eyebrow">
              HELLO, I'M
            </p>

            <h1>
              Rohan<span>.</span>
            </h1>

            <h3>
              AI/ML & Full-Stack
              <br />
              Developer
            </h3>

            <p>
              BE student specializing in Artificial Intelligence
              & Machine Learning, building real-world applications
              and exploring modern technology.
            </p>

          </div>


          <div className="profile-bottom">

            <div className="social-preview">
              <span>GH</span>
              <span>LI</span>
              <span>LC</span>
            </div>

            <span className="arrow">
              ↓
            </span>

          </div>


          {/* CENTER EXPANDED */}

          {activeCard === "profile" && (

            <div className="expanded-content profile-expanded">

              <button
                className="close-button"
                onClick={closeCard}
              >
                ×
              </button>

              <p className="expanded-eyebrow">
                AI/ML & FULL-STACK DEVELOPER
              </p>

              <h1>
                Rohan<span>.</span>
              </h1>

              <h3>
                Building things with code,
                <br />
                curiosity and purpose.
              </h3>

              <p className="profile-text">
                I'm a BE student specializing in Artificial
                Intelligence & Machine Learning. I enjoy building
                practical applications, working across the full
                stack, exploring machine learning and continuously
                improving my problem-solving skills.
              </p>

              <div className="social-links">

                <a
                  href="https://github.com/Rohan26096"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/rohan-m-414151369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://leetcode.com/u/rohan_m_24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  LeetCode ↗
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Resume ↗
                </a>

              </div>

            </div>
          )}

        </section>


        {/* =====================================================
            RIGHT CARD - PROJECTS
        ===================================================== */}

        <section
          className={`interactive-card projects-card ${
            activeCard === "projects"
              ? "active"
              : activeCard
              ? "inactive"
              : ""
          }`}
          onClick={() => !activeCard && openCard("projects")}
        >

          <div className="card-top">
            <span>SELECTED</span>
            <span>WORK</span>
          </div>


          <div className="card-content">

            <p className="eyebrow">
              RECENT
            </p>

            <h2>
              Recent
              <br />
              projects<span>.</span>
            </h2>

            <div className="project-preview">

              <div>
                <strong>MediLink</strong>
                <span>Healthcare Platform</span>
              </div>

              <span>↗</span>

            </div>

            <div className="project-preview">

              <div>
                <strong>AgriTech</strong>
                <span>AI / ML System</span>
              </div>

              <span>↗</span>

            </div>

          </div>


          <div className="card-bottom">

            <span>
              VIEW WORK
            </span>

            <span className="arrow">
              ↗
            </span>

          </div>


          {/* RIGHT EXPANDED */}

          {activeCard === "projects" && (

            <div className="expanded-content projects-expanded">

              <button
                className="close-button"
                onClick={closeCard}
              >
                ×
              </button>

              <p className="expanded-eyebrow">
                SELECTED WORK
              </p>

              <h1>
                Recent
                <br />
                <span>projects.</span>
              </h1>


              {/* MEDILINK */}

              <article className="project-item">

                <div className="project-title">

                  <div>

                    <span>MediLink</span>

                    <h2>
                      Healthcare Management Platform
                    </h2>

                  </div>

                  <span className="project-category">
                    FULL-STACK
                  </span>

                </div>

                <p>
                  A full-stack healthcare management platform
                  connecting patients, doctors, hospitals and
                  administrators through a unified system.
                </p>

                <div className="project-tags">

                  <span>
                    <SiFlask />
                    Flask
                  </span>

                  <span>
                    <SiSqlalchemy />
                    SQLAlchemy
                  </span>

                  <span>
                    <SiJavascript />
                    JavaScript
                  </span>

                  <span>
                    <SiSqlite />
                    SQLite
                  </span>

                  <span>
                    <SiChartdotjs />
                    Chart.js
                  </span>

                </div>

                <a
                  href="https://github.com/Rohan26096/MediLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  SOURCE CODE ↗
                </a>

              </article>


              {/* AGRITECH */}

              <article className="project-item">

                <div className="project-title">

                  <div>

                    <span>AgriTech</span>

                    <h2>
                      Decision Support System
                    </h2>

                  </div>

                  <span className="project-category">
                    AI / ML
                  </span>

                </div>

                <p>
                  An AI-powered agriculture platform providing
                  crop recommendations, fertilizer suggestions,
                  soil analysis, irrigation guidance and
                  agricultural insights.
                </p>

                <div className="project-tags">

                  <span>
                    <SiPython />
                    Python
                  </span>

                  <span>
                    <SiFlask />
                    Flask
                  </span>

                  <span>
                    <SiScikitlearn />
                    Scikit-learn
                  </span>

                  <span>
                    <SiPandas />
                    Pandas
                  </span>

                  <span>
                    <SiNumpy />
                    NumPy
                  </span>

                </div>

                <a
                  href="https://github.com/Rohan26096/AgriTech-Decision-Support-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  SOURCE CODE ↗
                </a>

              </article>

            </div>
          )}

        </section>

      </main>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      {!activeCard && (

        <footer className="bottom-bar">

          <span className="footer-name">
            ROHAN M
          </span>

          <div className="bottom-links">

            <a
              href="https://github.com/Rohan26096"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-m-414151369/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>

            <a
              href="https://leetcode.com/u/rohan_m_24/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEETCODE
            </a>

          </div>

        </footer>
      )}

    </div>
  );
}

export default App;