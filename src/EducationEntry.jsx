import React, { useRef, useEffect, useState } from 'react';

const EducationEntry = ({ title, logo, date, details, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div 
      onClick={onToggle}
      className={`education-entry group relative cursor-pointer max-w-xl mx-auto mb-6 ${
        isOpen ? 'open' : ''
      }`}
    >
      <div data-aos="fade-up" data-aos-delay="100" className="glow-bg absolute inset-0 rounded-3xl -z-10" />

      <div className="glass-card p-6 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {logo && (
              <img
                src={logo}
                alt={`${title} logo`}
                className="w-12 h-12 object-contain rounded-xl"
                onClick={e => e.stopPropagation()} // prevent toggle on img click
              />
            )}
            <h3 className="tile-text text-white text-xl font-semibold">{title}</h3>
          </div>

          <div className="flex items-center space-x-4">
            {date && (
              <span className="date font-mono text-gray-300 select-none">
                {date}
              </span>
            )}
            <button
              className="expand-btn1 text-white text-2xl font-bold p-1 rounded-full hover:bg-purple-700 transition"
              aria-label={isOpen ? 'Collapse' : 'Expand'}
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // prevent div click firing twice
                onToggle();
              }}
            >
              {isOpen ? '×' : '+'}
            </button>
          </div>
        </div>

        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-max-height duration-500 ease-in-out"
        >
          <div className="pt-4 text-gray-200 text-sm">{details}</div>
        </div>
      </div>
    </div>
  );
};

export default EducationEntry;
