import React, { useState } from 'react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Vikas High School and Jr. College',
    location: 'Mumbai, India',
    duration: '2021 - 2022',
    details: [
      'Stream: Commerce',
      'Percentage: 78%',
      'Subjects: Bookkeeping, Accounts, Economics, OCM'
    ],
  },
  {
    id: 2,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Vikas High School',
    location: 'Mumbai, India',
    duration: '2019 - 2020',
    details: [
      'Percentage: 85%',
      'Subjects: Science, Mathematics, English, Social Studies'
    ],
  }
];

const Education = () => {
  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>

      {/* Desktop Layout */}
      <div className="education-desktop-layout">
        {educationData.map(({ id, degree, institution, location, duration, details }) => (
          <div
            key={id}
            className={`education-card ${openId === id ? 'open' : ''}`}
            onClick={() => toggleDetails(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleDetails(id)}
          >
            <div className="education-header">
              <h3 className="degree">{degree}</h3>
              <span className="duration">{duration}</span>
            </div>
            <p className="institution">{institution} — <em>{location}</em></p>

            {openId === id && (
              <ul className="details">
                {details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            <button
              className="expand-btn"
              aria-label={openId === id ? 'Collapse details' : 'Expand details'}
              onClick={(e) => {
                e.stopPropagation();
                toggleDetails(id);
              }}
            >
              {openId === id ? '−' : '+'}
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="education-mobile-layout">
        {educationData.map(({ id, degree, institution, location, duration, details }) => (
          <details key={id} className="education-mobile-card">
            <summary>
              <div className="mobile-header">
                <h3>{degree}</h3>
                <span className="duration">{duration}</span>
              </div>
              <p className="institution">{institution} — <em>{location}</em></p>
            </summary>
            <ul className="details">
              {details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Education;
