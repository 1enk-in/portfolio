import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Excel Dashboard",
    description: "A Dashboard for fully functional csv sheet.",
    tech: ["next", "express", "ts", "tailwind"],
    liveLink: "https://shorturl.at/b0gUY",
  },
  {
    id: 2,
    title: "MySQL",
    description: "Si Nonnas MySQL database.",
    tech: ["next", "express", "ts", "tailwind", "recoil"],
    liveLink: "https://shorturl.at/cmI02",
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "Fashion Section E-Commerce site.",
    tech: ["react", "redux", "sass", "node"],
    liveLink: "https://shorturl.at/LEK2R",
  },
  {
    id: 4,
    title: "E-Commerce catalogue",
    description: "Fashion Section E-Commerce catalogue.",
    tech: ["react", "socketio", "node", "mongodb"],
    liveLink: "https://shorturl.at/chteb",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website with animations and responsive design.",
    tech: ["react", "tailwind", "framer-motion"],
    liveLink: "Portfolio",
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState({});
  const [isAnimatingOpen, setIsAnimatingOpen] = useState(false);
  const viewMoreBtnRef = useRef(null);
  const modalContentRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Open modal animation
  const openModal = () => {
    if (!viewMoreBtnRef.current) return;
    const rect = viewMoreBtnRef.current.getBoundingClientRect();

    setModalStyle({
      position: "fixed",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      borderRadius: "50%",
      background: "#242424",
      zIndex: 1000,
      overflow: "hidden",
      transformOrigin: "center center",
      transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "1.25rem",
      opacity: 1,
      willChange: "top, left, width, height, border-radius, opacity",
    });
    setModalOpen(true);
    setIsAnimatingOpen(false);

    requestAnimationFrame(() => {
      setModalStyle((prev) => ({
        ...prev,
        top: "11vh",
        left: "3vw",
        width: "88vw",
        height: "75vh",
        borderRadius: "16px",
      }));
      setIsAnimatingOpen(true);
    });
  };

  // Close modal animation
  const closeModal = () => {
    if (!viewMoreBtnRef.current) return;
    const rect = viewMoreBtnRef.current.getBoundingClientRect();

    setIsAnimatingOpen(false);

    setModalStyle((prev) => ({
      ...prev,
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      borderRadius: "50%",
      opacity: 0.9,
      transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
      willChange: "top, left, width, height, border-radius, opacity",
    }));

    setTimeout(() => {
      setModalOpen(false);
    }, 600);
  };

  return (
    <section id="projects" className="min-h-screen theme-bg theme-text p-10 pt-24">
      <h2 className="text-3xl font-bold mb-10 text2-center" data-aos="fade-down">
        My Projects
      </h2>

      <div data-aos="zoom-in-up" data-aos-delay="100" className="projects-grid">
        {projects.slice(0, 3).map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="hover-link">
              <span className="hover-link-text">
                {proj.liveLink.replace(/^https?:\/\//, "")}
              </span>

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
              <div className="card-content">
                <h3 className="card-title">{proj.title}</h3>
                <p className="card-desc">{proj.description}</p>

                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
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

      {/* Modal */}
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
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal3-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            <h3 className="modal3-title">All Projects</h3>

            <div className="projects-grid modal3-grid">
              {projects.map((proj) => (
                <div key={proj.id} className="project-card">
                  <div className="hover-link">
                    <span className="hover-link-text">
                      {proj.liveLink.replace(/^https?:\/\//, "")}
                    </span>

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
                    <div className="card-content">
                      <h3 className="card-title">{proj.title}</h3>
                      <p className="card-desc">{proj.description}</p>

                      <a
                        href={proj.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link"
                      >
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
