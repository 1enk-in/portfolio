// ScrollProgress.jsx
import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.min(Math.round((scrollTop / docHeight) * 100), 100);
    setScrollPercent(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-metal">
      {scrollPercent}%
    </div>
  );
};

export default ScrollProgress;
