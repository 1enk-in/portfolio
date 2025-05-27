import { useState } from 'react';
import './About.css';
import profileImg from './assets/profile2.jpg';
import SkillsModal from './SkillsModal';

export default function About() {
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center theme-bg theme-text p-10 pt-24 gap-16 relative z-10"
    >
      <h2 className="about-section" data-aos="fade-down">
        About Me
      </h2>

      <div className="about-container" data-aos="zoom-in" data-aos-delay="100">
  <div className="about-image-box">
    <img src={profileImg} alt="Profile" className="about-profile-img" />
  </div>

        <div data-aos="slide-up" data-aos-delay="100" className="about-text-box">
          <p>
            Hello! I’m Naved — or <strong>1enk</strong> online. Based in Mumbai, I graduated with a BAF degree and have a solid grip on Accounting, Finance, and tools like <strong>Excel</strong>, <strong>Power BI</strong>, <strong>Tally</strong>, and <strong>MySQL</strong>.
          </p>
          <p>
            Despite not coming from a technical background, I taught myself <strong>HTML</strong>, <strong>CSS</strong>, <strong>Java</strong>, <strong>Python</strong>, <strong>React</strong>, and <strong>Tailwind</strong> through projects, curiosity, and hands-on learning. I’m not a full-fledged developer (yet), but I love creating tangible, human-focused solutions and experimenting with what works.
          </p>
          <p>
            Outside of that? Big-time gamer (Assassin’s Creed, Sekiro), music nerd (from RnB to metal), and total movie junkie. I live for <strong>late-night Street-Foods</strong>, fiction books, and weird “what if…” convos that spiral into time travel theories.
          </p>
          <p>
            I don’t have life figured out, and that’s okay. I like building, testing, and navigating the chaos of creation — because <strong>life’s messy, and that’s where the magic is.</strong>
          </p>

          <div data-aos="fade-up" data-aos-delay="100" className="about-buttons">
            <a href="/resume.pdf" className="btn resume" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <button className="btn skills" onClick={() => setShowSkillsModal(true)}>
              Skills
            </button>
            <a href="#contact" className="btn contact">
              Contact
            </a>
          </div>
        </div>
      </div>

      <SkillsModal show={showSkillsModal} onClose={() => setShowSkillsModal(false)} />
    </section>
  );
}
