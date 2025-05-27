import React from 'react';
import { MdRocketLaunch } from 'react-icons/md';
import './RocketScrollToTop.css'; // Assuming CSS is here

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <p className='footer-text'>© 2025 Naved Khan. All rights reserved.</p>
      <button
  className="footer-rocket"
  onClick={scrollToTop}
  aria-label="Back to top"
>
  <MdRocketLaunch size={28} />
  <span className="tooltip">Beam me up, Scotty!</span>
</button>

    </footer>
  );
}
