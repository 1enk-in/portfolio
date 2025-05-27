import { useEffect, useState } from 'react';
import profilePic from './assets/profile.jpg';
import schoolLogo from './assets/School.jpeg';
import vikasLogo from './assets/Vikas.jpeg';
import davLogo from './assets/dav.jpeg';
import RainbowTyping from './RainbowTyping';
import EducationEntry from './EducationEntry';
import CertificationsCarousel from './CertificationsCarousel';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import ScrollProgress from './ScrollProgress';
import About from './About';
import RocketScrollToTop from './RocketScrollToTop';
import Contact from './Contact';
import StarfieldBackground from './StarfieldBackground';
import PersonalModal from "./PersonalModal";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaTelegram,
  FaEnvelope,
  FaLink,
  FaLinkedin,
} from 'react-icons/fa';
import './index.css';
import './mobile.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSidebarClosing, setIsSidebarClosing] = useState(false);
  const [openEducationIndex, setOpenEducationIndex] = useState(null);

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(isDark ? 'dark-theme' : 'light-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleToggle = () => setIsDark((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);
  const handleEducationToggle = (index) => {
    setOpenEducationIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
  AOS.init({
    duration: 800,   // Animation duration in ms
    once: true       // Only animate once
  });
}, []);

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com/not.so.naved' },
    { icon: <FaTwitter />, url: 'https://twitter.com/Navedk39' },
    { icon: <FaGithub />, url: 'https://github.com/Navedkhan05' },
    { icon: <FaTelegram />, url: 'https://t.me/anpadbihari' },
    { icon: <FaEnvelope />, url: 'mailto:naved3841@gmail.com' },
    { icon: <FaLink />, url: 'https://linktr.ee/navved' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/naved-khan-7a364620a' },
  ];
  

  return (
    <>
    <StarfieldBackground />
      {/* Header */}
      <header className="site-header">
        <h1 className="custom-heading3 text-gray-900 dark:text-white">
          <a href="#home" className="no-underline text-inherit">
            Naved Khan
          </a>
        </h1>
        <nav className="headerbar space-x-4 text-sm md:text-base">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#certifications" className="hover:underline">Certifications</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        
      </header>

      <div>
        <PersonalModal/>
        </div>

  

      {/* Home Section */}
      <div
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center theme-bg theme-text p-10 gap-16 pt-24 relative z-10"
      >
        <div className="flex-1 max-w-xl space-y-8 text-center md:text-left">
          <div className="typing-position">
            <RainbowTyping />
          </div>
          <h1 className="custom-heading text-gray-900 dark:text-white">Naved Khan</h1>
          <h1 className="custom-heading2 text-gray-900 dark:text-white">
            Always learning, being creative and playing around with AI models <br />
            to build something cool!
          </h1>

          <a
            href="https://docs.google.com/document/d/162O-rq67m9sLyYa3Y0lXjyy9vWIZPgdTLfbXwKsR5ZY/edit?usp=sharing"
            download
            className="custom-heading4 text-gray-900 dark:text-white transition duration-300"
          >
            Download CV
          </a>
          <div className="social-icons-container flex space-x-5 mt-6">
            {socialLinks.map(({ icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-900 dark:text-white text-2xl transition-transform duration-500"
                onClick={(e) => {
                  const el = e.currentTarget;
                  el.classList.add('spin-once');
                  setTimeout(() => el.classList.remove('spin-once'), 1000);
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="profile-container" onClick={toggleModal}>
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>
      </div>

      {/* Modal for profile image */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <img src={profilePic} alt="Enlarged Profile" className="modal-image" />
        </div>
      )}

      {/* Sections */}
      
      <section id="about" className="min-h-screen flex flex-col items-center theme-bg theme-text p-10 pt-24 gap-16 relative">
      <About/>
      </section>                    
      <section id="work" className="min-h-screen flex flex-col items-center theme-bg theme-text p-10 pt-24 gap-16 relative"><WorkExperience /> </section>

      <section id="education" className="min-h-screen flex flex-col items-center theme-bg theme-text p-10 pt-24 gap-16 relative">
        <h2 className="education-text text-4xl font-bold mb-8 text-white" data-aos="fade-down">My Academic Journey</h2>
        <EducationEntry
  title="Ramanand Arya DAV College"
  date='2022 – 2025'
  isOpen={openEducationIndex === 4}
  onToggle={() => handleEducationToggle(4)}
  customClass="relative top-36 left-16"
  details={
    <>
      <div className="flex items-start gap-4 mb-3">
        <img src={davLogo} alt="DAV Logo" className="dav-logo" />
        <div>
          <p className="mb-2">
        <span className="highlight3-location">Mumbai, Bhandup</span>
      </p>
          <p className="mb-2">
        <span className="highlight3-program">Bachelor of Accounting and Finance (BAF)</span>
      </p>
        </div>
      </div>
      <p className="highlight3-subs mb-2 font-semibold">Strengths & Subjects:</p>
      <ul className="list-disc3 pl-5 space-y-1">
        <li className="highlight-subject">Financial Accounting</li>
        <li className="highlight-subject">Cost Accounting</li>
        <li className="highlight-subject">Direct & Indirect Taxation</li>
        <li className="highlight-subject">Business Law</li>
        <li className="highlight-subject">Business Communication</li>
      </ul>
    </>
  }
/>


  <EducationEntry
  title="Vikas High School and Jr. College"
  date="2021 – 2022"
  isOpen={openEducationIndex === 2}
  onToggle={() => handleEducationToggle(2)}
  customClass="relative top-20 left-10"
  details={
    <>
      <div className="flex items-start gap-4 mb-4">
        <img src={vikasLogo} alt="Vikas Logo" className="vikas-logo" />
        <div>
          <p className="mb-2">
        <span className="highlight2-location">Mumbai, Vikhroli</span>
      </p>
        </div>
      </div>
      <p className="mb-2">
        <span className="highlight2-program">Junior College (Commerce) - Maharashtra HSC Board (Scored 78% in HSC board exams)</span>
      </p>
        <p className="highlight2-subs mb-2 font-semibold">Strengths & Subjects:</p>
      <ul className="list-disc2 pl-5 space-y-1">
        <li>Excellent in Bookkeeping, Economics, and Organization of Commerce & Management (OCM)</li>
        <li>Strong analytical and accounting skills</li>
        <li>Good grasp on commercial laws and financial principles</li>
        <li>Active participant in commerce seminars and paper presentations</li>
      </ul>
    </>
  }
/>


  <EducationEntry
  title="Vidya Mandir English High School"
  logo={schoolLogo}
  date="2008 – 2020"
  isOpen={openEducationIndex === 3}
  onToggle={() => handleEducationToggle(3)}
  details={
    <>
      <p className="mb-2">
        <span className="highlight-location">Mumbai, Vikhroli</span>
      </p>
      <p className="mb-2">
        <span className="highlight-program">Primary and Secondary Education (70% in SSC Board Exams)</span>
      </p>
      
      <p className="highlight-subs mb-2 font-semibold">Strong Subjects:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Mathematics</li>
        <li>History & Civics</li>
        <li>Geography</li>
        <li>English Grammar</li>
      </ul>
    </>
  }
/>

  <div className="h-[400px]"></div>
      </section>

      <section
  id="certifications"
  className="min-h-screen flex flex-col items-center theme-bg theme-text p-10 pt-24 gap-16 relative"
>
  <h2 className="text-4xl font-bold mb-10 text-center-cert text-purple-400" data-aos="fade-down">Certifications</h2>
  <CertificationsCarousel />
</section>



      <section id="projects" className="min-h-screen flex flex-col items-center theme-bg theme-text p-10 pt-24 gap-16 relative"><Projects/></section>
      <section id="contact" className="min-h-screen theme-bg theme-text p-10 pt-24"><Contact/> </section>
      <ScrollProgress />

      <RocketScrollToTop />
    </>
    
    
  );
  
}


export default App;
