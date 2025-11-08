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
            Hello! I’m FAIZ — or <strong>Ziaf</strong> online. Based in Mumbai, I graduated with a BAF degree and have a solid grip on Accounting, Finance, and tools like <strong>Excel</strong>, <strong>Power BI</strong>, <strong>Tally</strong>, and <strong>MySQL</strong>.
          </p>
          <p>
            I enjoy learning how businesses work and how financial decisions are made.
I have studied subjects like Cost Accounting, Financial Management, and Taxation which helped me build a strong base.
          </p>
          <p>
            Right now, I am pursuing <strong>US CPA</strong> to improve my knowledge and grow in the accounting field.
          </p>
          <p>
          In my free time, I like learning new things, exploring technology, and improving my skills.
          </p> 
          <p>
            In the future, I want to build a successful career in accounting and achieve something meaningful in life.
           </p>

          <div data-aos="fade-up" data-aos-delay="100" className="about-buttons">
            <a href="https://drive.google.com/file/d/1gb8HsjDQdOfAVWaQdIQMjNdNi1ueGULP/view" className="btn resume" target="_blank" rel="noopener noreferrer">
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
