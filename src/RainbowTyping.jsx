import { useState, useEffect } from 'react';

const phrases = ["A Student", "A Learner", "A Business Enthusiast", "A Crypto Heeder"];

const RainbowTyping = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const typingSpeed = deleting ? 80 : 100; 
    let timeout;

    if (!deleting && displayed !== currentPhrase) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (deleting && displayed !== '') {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, displayed.length - 1));
      }, typingSpeed);
    } else if (!deleting && displayed === currentPhrase) {
      // Pause before deleting
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayed === '') {
      // Move to next phrase after pause
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <h5 className="typing1 text-xl font-semibold">
    <span className="static-text">Hi, I'm</span>
    <span className="rainbow-container">
      <span className="rainbow-text">{displayed}</span>
      <span className="cursor">|</span>
    </span>
  </h5>
  );
};

export default RainbowTyping;
