import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Mongolian Bond Market',
    description: 'A platform for exploring and analyzing bond market trends.',
    image: '/images/bond-market.png',
    tech: ['next', 'express', 'ts', 'tailwind'],
    liveLink: 'https://bondmarket.mn',
  },
  {
    id: 2,
    title: 'Real-Time Auction System',
    description: 'A real-time auction of platform where users can bid.',
    image: '/images/auction-system.png',
    tech: ['next', 'express', 'ts', 'tailwind', 'recoil'],
    liveLink: 'https://comexchange.mn',
  },
  {
    id: 3,
    title: 'E-Commerce Dashboard',
    description: 'Dashboard for e-commerce analytics and orders management.',
    image: '/images/ecommerce-dashboard.png',
    tech: ['react', 'redux', 'sass', 'node'],
    liveLink: 'https://ecomdashboard.com',
  },
  {
    id: 4,
    title: 'Chat App',
    description: 'A real-time chat application with rooms and private messaging.',
    image: '/images/chat-app.png',
    tech: ['react', 'socketio', 'node', 'mongodb'],
    liveLink: 'https://chatapp.io',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio website with animations and responsive design.',
    image: '/images/portfolio.png',
    tech: ['react', 'tailwind', 'framer-motion'],
    liveLink: 'https://myportfolio.com',
  }
  ,
  {
    id: 2,
    title: 'Real-Time Auction System',
    description: 'A real-time auction of platform where users can bid.',
    image: '/images/auction-system.png',
    tech: ['next', 'express', 'ts', 'tailwind', 'recoil'],
    liveLink: 'https://comexchange.mn',
  }
  ,
  {
    id: 2,
    title: 'Real-Time Auction System',
    description: 'A real-time auction of platform where users can bid.',
    image: '/images/auction-system.png',
    tech: ['next', 'express', 'ts', 'tailwind', 'recoil'],
    liveLink: 'https://comexchange.mn',
  }
  ,
  {
    id: 2,
    title: 'Real-Time Auction System',
    description: 'A real-time auction of platform where users can bid.',
    image: '/images/auction-system.png',
    tech: ['next', 'express', 'ts', 'tailwind', 'recoil'],
    liveLink: 'https://comexchange.mn',
  }
  ,
  {
    id: 2,
    title: 'Real-Time Auction System',
    description: 'A real-time auction of platform where users can bid.',
    image: '/images/auction-system.png',
    tech: ['next', 'express', 'ts', 'tailwind', 'recoil'],
    liveLink: 'https://comexchange.mn',
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState({});
  const [isAnimatingOpen, setIsAnimatingOpen] = useState(false);
  const viewMoreBtnRef = useRef(null);
  const modalContentRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  // Open modal animation: from circle to full modal
  const openModal = () => {
    if (!viewMoreBtnRef.current) return;
    const rect = viewMoreBtnRef.current.getBoundingClientRect();

    // Set modal initial style (circle exactly on button)
    setModalStyle({
      position: 'fixed',
      top: rect.top + 'px',
      left: rect.left + 'px',
      width: rect.width + 'px',
      height: rect.height + 'px',
      borderRadius: '50%',
      background: '#242424',
      zIndex: 1000,
      overflow: 'hidden',
      transformOrigin: 'center center',
      transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)', // smooth easing
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      opacity: 1,
      willChange: 'top, left, width, height, border-radius, opacity',
    });
    setModalOpen(true);
    setIsAnimatingOpen(false);

    // Trigger expand in next animation frame
    requestAnimationFrame(() => {
      setModalStyle(prev => ({
        ...prev,
        top: '11vh',
        left: '3vw',
        width: '88vw',
        height: '75vh',
        borderRadius: '16px',
      }));
      setIsAnimatingOpen(true);
    });
  };

  // Close modal animation: shrink back to circle then hide
  const closeModal = () => {
    if (!viewMoreBtnRef.current) return;
    const rect = viewMoreBtnRef.current.getBoundingClientRect();

    setIsAnimatingOpen(false);

    // Shrink modal back to circle on button position & fade out slightly
    setModalStyle(prev => ({
      ...prev,
      top: rect.top + 'px',
      left: rect.left + 'px',
      width: rect.width + 'px',
      height: rect.height + 'px',
      borderRadius: '50%',
      opacity: 0.9,
      transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'top, left, width, height, border-radius, opacity',
    }));

    // After animation completes, close modal
    setTimeout(() => {
      setModalOpen(false);
    }, 600);
  };

  return (
    <section id="projects" className="min-h-screen theme-bg theme-text p-10 pt-24">
      <h2 className="text-3xl font-bold mb-10 text2-center" data-aos="fade-down">My Projects</h2>
      <div data-aos="zoom-in-up" data-aos-delay="100" className="projects-grid">
        {projects.slice(0, 3).map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="hover-link">
              <span className="hover-link-text">{proj.liveLink.replace(/^https?:\/\//, '')}</span>
              <div className="hover-beam-wrapper">
                <div className="hover-beam" />
                <div className="hover-beam-glow">
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="ring"></div>
                </div>
              </div>
            </div>

            <div className="card-tilt">
              <div className="card-image-container">
                <img src={proj.image} alt={proj.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{proj.title}</h3>
                <p className="card-desc">{proj.description}</p>
                <div className="tech-icons">
                  {proj.tech.map((tech, i) => (
                    <img key={i} src={`/icons/${tech}.svg`} alt={tech} className="tech-icon" />
                  ))}
                </div>
                <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                  Check Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="view-more-wrapper">
        <button
          ref={viewMoreBtnRef}
          className="view-more-btn"
          onClick={openModal}
          aria-label="View more projects"
        >
          View All
        </button>
      </div>

      {/* Animated Modal */}
      {modalOpen && (
        <div
          className="modal3-overlay"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            ref={modalContentRef}
            className="modal3-content"
            style={modalStyle}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="modal3-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h3
              className="modal3-title"
            >
              All Projects
            </h3>

            {/* Modal Projects Grid */}
            <div
              className="projects-grid modal3-grid"

            >
              {projects.map((proj) => (
                <div key={proj.id} className="project-card">
                  <div className="hover-link">
                    <span className="hover-link-text">{proj.liveLink.replace(/^https?:\/\//, '')}</span>
                    <div className="hover-beam-wrapper">
                      <div className="hover-beam" />
                      <div className="hover-beam-glow">
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                      </div>
                    </div>
                  </div>

                  <div className="card-tilt">
                    <div className="card-image-container">
                      <img src={proj.image} alt={proj.title} className="card-image" />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{proj.title}</h3>
                      <p className="card-desc">{proj.description}</p>
                      <div className="tech-icons">
                        {proj.tech.map((tech, i) => (
                          <img key={i} src={`/icons/${tech}.svg`} alt={tech} className="tech-icon" />
                        ))}
                      </div>
                      <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                        Check Live Site
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
