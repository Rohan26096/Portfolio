import "./App.css";
import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Rohan<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <a href="/resume.pdf" target="_blank" className="nav-button">
            Resume ↗
          </a>

        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      )}


      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm Rohan 👋
          </p>

          <h1>
            AI/ML &
            <span>Full-Stack Developer.</span>
          </h1>

          <p className="hero-description">
            BE student specializing in Artificial Intelligence & Machine Learning,
            passionate about building real-world applications, exploring ML,
            and solving problems with Data Structures & Algorithms.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">

        <div className="section-container">

          <div className="section-heading">
            <p>ABOUT ME</p>

            <h2>
              Building with
              <span> curiosity.</span>
            </h2>
          </div>


          <div className="about-content">

            <div className="about-main">

              <p>
                I'm a BE student specializing in Artificial Intelligence &
                Machine Learning, with a strong interest in software
                development and problem solving.
              </p>

              <p>
                I enjoy building practical applications, exploring
                AI/ML concepts, and strengthening my fundamentals through
                Data Structures & Algorithms.
              </p>

              <p>
                Currently, I'm focused on becoming a stronger software
                engineer by combining development, machine learning,
                and consistent problem solving.
              </p>

            </div>


            <div className="about-highlights">

              <div className="about-highlight">
                <span>01</span>
                <strong>AI / ML</strong>
                <p>Exploring machine learning and data-driven applications.</p>
              </div>

              <div className="about-highlight">
                <span>02</span>
                <strong>Development</strong>
                <p>Building full-stack applications and real-world projects.</p>
              </div>

              <div className="about-highlight">
                <span>03</span>
                <strong>DSA</strong>
                <p>Consistently improving problem-solving fundamentals.</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="skills-section">

        <div className="section-container">

          <div className="section-heading">
            <p>SKILLS</p>

            <h2>
              Technologies I
              <span> work with.</span>
            </h2>
          </div>


          <div className="skills-grid">

            {/* Languages */}
            <div className="skill-group">

              <span className="skill-number">01</span>

              <h3>Languages</h3>

              <div className="skill-list">
                <span>C++</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>Go</span>
              </div>

            </div>


            {/* Web Development */}
            <div className="skill-group">

              <span className="skill-number">02</span>

              <h3>Web Development</h3>

              <div className="skill-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>Flask</span>
              </div>

            </div>


            {/* AI / ML */}
            <div className="skill-group">

              <span className="skill-number">03</span>

              <h3>AI / ML</h3>

              <div className="skill-list">
                <span>NumPy</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>Scikit-learn</span>
              </div>

            </div>


            {/* Database & Tools */}
            <div className="skill-group">

              <span className="skill-number">04</span>

              <h3>Database & Tools</h3>

              <div className="skill-list">
                <span>SQL</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects-section">

        <div className="section-container">

          <div className="section-heading">
            <p>PROJECTS</p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>
          </div>


          {/* MediLink */}
          <div className="project-card featured-project">

            <div className="project-content">

              <p className="project-number">01</p>

              <h3>MediLink</h3>

              <p className="project-description">
                A full-stack healthcare management platform connecting patients, doctors, 
                and hospitals through a unified system for appointments, medical records, prescriptions, and communication.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>SQLAlchemy</span>
                <span>JavaScript</span>
                <span>SQLite</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Rohan26096/MediLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>

            </div>

            <div className="project-visual">
              <img src="/images/medilink.png" alt="MediLink project" />
            </div>

          </div>


          {/* AgriTech */}
          <div className="project-card">

            <div className="project-content">

              <p className="project-number">02</p>

              <h3>AgriTech Decision Support System</h3>

              <p className="project-description">
                A machine learning-powered decision support system that recommends suitable crops 
                and fertilizers based on soil nutrients and environmental conditions.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>Scikit-learn</span>
                <span>Pandas</span>
                <span>NumPy</span>
              </div>

              <a
                href="https://github.com/Rohan26096/AgriTech-Decision-Support-System"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </div>

            <div className="project-visual">
              <img src="/images/agritech.png" alt="AgriTech project" />
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT PLACEHOLDER ================= */}
      <section id="contact" className="placeholder-section">
        {/* ================= EDUCATION ================= */}
        <section className="education-section">

          <div className="section-container">

            <div className="section-heading">
              <p>EDUCATION</p>

              <h2>
                My academic
                <span> journey.</span>
              </h2>
            </div>

            <div className="education-card">

              <div className="education-main">

                <span className="education-year">
                  BE • ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
                </span>

                <h3>
                  Bachelor of Engineering
                </h3>

                <p className="education-college">
                  Artificial Intelligence & Machine Learning
                </p>

                <p className="education-description">
                  Building a strong foundation in computer science while
                  exploring software development, Data Structures &
                  Algorithms, and Artificial Intelligence & Machine Learning.
                </p>

              </div>

              <div className="education-score">

                <strong>8.39</strong>

                <span>CGPA</span>

              </div>

            </div>

          </div>

        </section>
        {/* ================= CODING JOURNEY ================= */}
        <section className="coding-section">

          <div className="section-container">

            <div className="section-heading">
              <p>CODING JOURNEY</p>

              <h2>
                Consistency over
                <span> perfection.</span>
              </h2>
            </div>

            <div className="coding-content">

              <div className="coding-main">

                <span className="coding-label">
                  200 DAYS OF CODE
                </span>

                <h3>
                  Solving problems,
                  <span> one day at a time.</span>
                </h3>

                <p>
                  I'm working through a 200-day Data Structures and Algorithms
                  challenge on LeetCode. The journey has taken me through arrays,
                  recursion, graphs, dynamic programming and many other core
                  problem-solving patterns.
                </p>

                <a
                    href="https://leetcode.com/u/rohan_m_24/"
                    target="_blank"
                    rel="noreferrer"
                >
                    View LeetCode ↗
                </a>

              </div>


              <div className="coding-stats">

                <div className="coding-stat">
                  <strong>180+</strong>
                  <span>Challenge Days</span>
                </div>

                <div className="coding-stat">
                  <strong>200</strong>
                  <span>Day Goal</span>
                </div>

                <div className="coding-stat">
                  <strong>DSA</strong>
                  <span>Focus Area</span>
                </div>

                <div className="coding-stat">
                  <strong>200</strong>
                  <span>Day Challenge</span>
                </div>

              </div>

            </div>

          </div>

        </section>
        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">

          <div className="section-container">

            <div className="section-heading">
              <p>CONTACT</p>

              <h2>
                Let's build something
                <span> together.</span>
              </h2>

              <p className="contact-description">
                Have an idea, opportunity, or just want to connect?
                Feel free to reach out.
              </p>
            </div>


            <div className="contact-links">

              <a
                href="mailto:rohan.muni.24@gmail.com"
                className="contact-card"
              >
                <div>
                  <span className="contact-label">EMAIL</span>
                  <strong>rohan.muni.24@gmail.com</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>


              <a
                href="https://www.linkedin.com/in/rohan-m-414151369/"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div>
                  <span className="contact-label">LINKEDIN</span>
                  <strong>Connect with me</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>


              <a
                href="https://github.com/Rohan26096"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div>
                  <span className="contact-label">GITHUB</span>
                  <strong>Rohan26096</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

            </div>

          </div>

        </section>

      </section>
      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <p>
            © 2026 Rohan. Built with React.
          </p>

          <div className="footer-links">

            <a
              href="https://github.com/Rohan26096"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-m-414151369/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:rohan.muni.24@gmail.com">
              Email
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;