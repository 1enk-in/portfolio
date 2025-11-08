import React, { useState, useEffect, useRef } from "react";
import "./WorkExperience.css";

// ✅ Import like your Swiper example
import ggcLogo from "./images/work/ggc.jpeg";
import faizLogo from "./images/work/faiz.png";
import smfgLogo from "./images/work/smfg.jpg";

const workData = [
  {
    id: 1,
    logo: ggcLogo,
    title: "GGC/PTA Intern",
    company: "VirtualGGC",
    duration: "Aug 2024 - Jan 2025",
    description:
      "GGC/PTA internship for financial management, worked 4 months as an intern and last 2 months idle.",
  },
  {
    id: 2,
    logo: faizLogo,
    title: "Faiz Enterprises",
    company: "Faiz Enterprises",
    duration: "Dec 2018 - Jun 2025",
    description:
      "Handled day-to-day operations, customer service, and sales activities at Faiz Enterprises. Managed billing, stock records, and helped customers choose the right products.",
  },
  {
    id: 3,
    logo: smfgLogo,
    title: "Customer Relation Officer (CRO)",
    company: "SMFG India Credit",
    duration: "Jul 2025 - Jan 2026",
    description: "Customer Relation Officer at SMFG company",
  },
];

const WorkExperience = () => {
  const [modalData, setModalData] = useState(null);
  const timelineRef = useRef(null);
  const beamRef = useRef(null);
  const cardRefs = useRef([]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!modalData) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [modalData]);

  // Beam progress + one-way reveal (prevents blinking)
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !beamRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const start = window.innerHeight * 0.6;
      const end = window.innerHeight * 0.4;
      let p = 1 - (rect.top - end) / (start - end);
      p = Math.min(Math.max(p, 0), 1);
      beamRef.current.style.width = `${p * 135}%`;

      // One-way reveal
      const timelineWidth = timelineRef.current.offsetWidth;
      cardRefs.current.forEach((card) => {
        if (!card || card.dataset.shown === "1") return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        if (p * timelineWidth >= cardCenter) {
          card.classList.add("visible");
          card.dataset.shown = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onImgError = (e) => {
    if (e.currentTarget.dataset.fallbackApplied === "1") return;
    e.currentTarget.dataset.fallbackApplied = "1";
    e.currentTarget.src = placeholderLogo;
  };

  return (
    <section id="work" className="work-section theme-bg theme-text p-10 pt-24">
      <h2 className="work-section-title text-3xl font-bold mb-10 text-center2" data-aos="fade-down">
        Work Experience
      </h2>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-beam" ref={beamRef} />
        {workData.map((job, index) => (
          <div
            key={job.id}
            className="work-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="work-logo"
              onError={onImgError}
              loading="lazy"
              decoding="async"
              draggable="false"
            />
            <h3 className="job-title">{job.title}</h3>
            <p className="company-name">{job.company}</p>
            <p className="job-duration">{job.duration}</p>
            <button className="expand2-btn" onClick={() => setModalData(job)}>+</button>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal2-overlay" onClick={() => setModalData(null)}>
          <div className="modal2-content" onClick={(e) => e.stopPropagation()}>
            <button className="close2-btn" onClick={() => setModalData(null)}>×</button>
            <img
              src={modalData.logo}
              alt="Company Logo"
              className="modal2-logo"
              onError={onImgError}
              decoding="async"
            />
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
