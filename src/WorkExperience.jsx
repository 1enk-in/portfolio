import React, { useState, useEffect, useRef } from 'react';
import './WorkExperience.css';

const workData = [
  {
    id: 1,
    logo: '/images/company1.png',
    title: 'GGC/PTA Intern',
    company: 'VirtualGGC',
    duration: 'Aug 2024 - Jan 2025',
    description: 'GGC/PTA internship for financial management, worked 4 for months as an intern and for last 2 month idle.',
  },
  {
    id: 2,
    logo: '/images/company2.png',
    title: 'Backlabs UI Designs',
    company: 'DesignHub Inc.',
    duration: 'Jun 2023 - Dec 2023',
    description: 'Worked on mobile-first UI design for startup dashboard. Created interactive Figma prototypes and collaborated with frontend team.',
  },
  {
    id: 3,
    logo: '/images/company3.png',
    title: 'Telecom',
    company: 'TeleCallcenter',
    duration: 'Apr 2023 - May 2023',
    description: 'TeleCallcenter Employee, chutiya company, say no to call center.',
  }
];

const WorkExperience = () => {
  const [modalData, setModalData] = useState(null);
  const timelineRef = useRef(null);
  const beamRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
  if (modalData) {
    // Save scroll position
    const scrollY = window.scrollY;
    
    // Lock scroll and fix body position
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // Restore scroll position and styles
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      window.scrollTo(0, scrollY);
    };
  }
}, [modalData]);


  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !beamRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();

      // Define scroll trigger points (adjust as needed)
      const scrollStart = window.innerHeight * 0.6; // Start animating when timeline top is 80% down viewport
      const scrollEnd = window.innerHeight * 0.4;   // End animating when timeline top is 20% down viewport

      // Calculate progress (0 to 1)
      let progress = 1 - (rect.top - scrollEnd) / (scrollStart - scrollEnd);
      progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1

      // Update timeline beam width
      beamRef.current.style.width = `${progress * 135}%`;

      // Animate cards as beam passes them
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        // Calculate each card's left position relative to timeline container
        const timelineWidth = timelineRef.current.offsetWidth;
        const cardLeft = card.offsetLeft + card.offsetWidth / 1;

        // Show card if beam progress covers the card's horizontal center
        if (progress * timelineWidth >= cardLeft) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work" className="work-section theme-bg theme-text p-10 pt-24">
      <h2 className="work-section-title text-3xl font-bold mb-10 text-center2" data-aos="fade-down">Work Experience</h2>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-beam" ref={beamRef} />
        {workData.map((job, index) => (
          <div
            key={job.id}
            className="work-card"
            ref={el => (cardRefs.current[index] = el)}
          >
            <img src={job.logo} alt={`${job.company} logo`} className="work-logo" />
            <h3 className="job-title">{job.title}</h3>
            <p className="company-name">{job.company}</p>
            <p className="job-duration">{job.duration}</p>
            <button className="expand2-btn" onClick={() => setModalData(job)}>+</button>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal2-overlay" onClick={() => setModalData(null)}>
          <div className="modal2-content" onClick={e => e.stopPropagation()}>
            <button className="close2-btn" onClick={() => setModalData(null)}>×</button>
            <img src={modalData.logo} alt="Company Logo" className="modal2-logo" />
            <h3 className="modal2-title">{modalData.title}</h3>
            <p className="modal2-company">{modalData.company}</p>
            <p className="modal2-duration">{modalData.duration}</p>
            <p className="modal2-description">{modalData.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkExperience;
