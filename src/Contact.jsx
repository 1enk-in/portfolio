import React, { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaCommentDots, FaTimes } from 'react-icons/fa';
import Lottie from 'lottie-react';
import confettiAnimation from './assets/confetti.json';
import './Contact.css';
import ThankYouSection from './ThankYouSection';

export default function Contact() {
  const formRef = useRef();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    formRef.current.reset();

    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <>
      <div className={`expandable-contact-wrapper ${isExpanded ? 'expanded' : ''}`}>
        <button
          className="get-in-touch-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <FaTimes className="close-icon" />
          ) : (
            "LET'S TALK"
          )}
        </button>

        <div className={`contact-form-panel ${isExpanded ? 'show' : ''}`}>
          <div className="contact-form-container">
            <p className="contact-subheading">*GET IN TOUCH</p>
            <h2 className="contact-heading">Contact<span className="dot"> .</span></h2>

            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name"><FaUser /> Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>

              <div className="input-group">
                <label htmlFor="email"><FaEnvelope /> Email</label>
                <input type="email" id="email" placeholder="Your email" required />
              </div>

              <div className="input-group">
                <label htmlFor="message"><FaCommentDots /> Message</label>
                <textarea id="message" placeholder="Write your message..." rows="4" required />
              </div>

              <div className="submit-wrapper">
                <button type="submit" className="send-button">
                  Send Message <FaPaperPlane className="send-icon" />
                </button>

                {showConfetti && (
                  <Lottie
                    animationData={confettiAnimation}
                    className="confetti-lottie"
                    loop={false}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <ThankYouSection />
      {isExpanded && <div className="h-[100px] md:h-[400px]"></div>}
    </>
  );
}
