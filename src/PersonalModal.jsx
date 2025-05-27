import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './PersonalModal.css';
import itImage from './images/it.jpg';

// Slider data
const sliderData = [
  {
    title: 'Computer, IT',
    subtitle: 'Interest, Work',
    image: itImage,
    description: 'I love exploring programming, design, and building fun tools.'
  },
  {
    title: 'Music',
    subtitle: 'Musical Instruments, Band',
    image: '/images/music.jpg',
    description: 'I enjoy playing guitar and piano. Music is my second language.'
  },
  {
    title: 'Fitness',
    subtitle: 'Sports, Gym',
    image: '/images/fitness.jpg',
    description: 'Staying fit is part of my routine. I love running and gym.'
  },
  {
    title: 'Books',
    subtitle: 'Fiction Novels',
    image: '/images/books.jpg',
    description: 'Fictional worlds inspire me. I often get lost in novels.'
  },
  {
    title: 'Foreign Languages',
    subtitle: 'Languages & Culture',
    image: '/images/languages.jpg',
    description: 'I study Japanese, German, and dream of becoming a polyglot.'
  },
];

const dailyRoutine = [
  { time: '6:00 AM', activity: 'Wake up' },
  { time: '8:00 AM', activity: 'School/Work' },
  { time: '5:00 PM', activity: 'Gym' },
  { time: '6:00 PM', activity: 'Read books' },
  { time: '7:00 PM', activity: 'Piano & Music' },
  { time: '9:00 PM', activity: 'Sleep' },
];

const futurePlans = [
  'Graduation',
  'Travel To Abroad',
  'Master Piano',
  'Master Guitar',
  'Go Gym',
  'Read Books',
  'Learn Languages',
  'Learn Trading',
  'Make Family Happy',
  'Make Friends Happy',
];

const progressStats = [
  { label: 'Books read', value: '+50', color: 'blue' },
  { label: 'Animes watched', value: '+300', color: 'purple' },
  { label: 'Movies watched', value: '+200', color: 'red' },
  { label: 'Musics learned', value: '+20', color: 'green' },
  { label: 'Kanji learned', value: '+1000', color: 'yellow' },
];

const PersonalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSlide, setActiveSlide] = useState(null);
  const [scrollPercent, setScrollPercent] = useState(0);


  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrollPosition(scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [isOpen, scrollPosition]);

  

  return (
    <>
      <button className="mode-selector" onClick={() => setIsOpen(true)}>
        <FaUser className="icon" />
        <span className="hover-text">Peer through my Personal Life</span>
      </button>

      {isOpen && (
        <div className="modal6-overlay">
          {loading ? (
            <div className="loader-wrapper">
              <div className="spinner"></div>
              <p className="loader-text">Warming up the stars...</p>
            </div>
          ) : (
            <div className="modal6-content">
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>

              <div className="personal-intro">
                <h1>Hello again?</h1>
                <p>My nickname is <span className="highlight">1enk</span></p>
                <p><span className="highlight">1enk</span> is Modest</p>
                <p>Built this website with love</p>
              </div>

              <div className="personal-hobbies">
                <h2>Aara's Hobbies</h2>
                <section className="hobby-block">
                  <h3>Morning Run</h3>
                  <p>Running gives me peace (⊗`◟´⊗), plus fitness & swimming.</p>
                </section>

                <section className="hobby-block">
                  <h3>Movies, Books, Music, Games</h3>
                  <p>Anime, webtoons, novels, music — the usual cool stuff (◎ω◎)</p>
                </section>

                <section className="bali-images-grid">
                  {Array(10).fill('').map((_, i) => (
                    <img
                      key={i}
                      src={`https://source.unsplash.com/featured/?bali&sig=${i}`}
                      alt={`Bali ${i + 1}`}
                      className="bali-image"
                    />
                  ))}
                </section>

                <section className="hobby-block">
                  <h3>Music Enthusiast</h3>
                  <p>I play guitar and piano and share tunes online (❁´◡`❁)</p>
                </section>

                <section className="hobby-block">
                  <h3>Dream of Becoming a Polyglot</h3>
                  <p>Learning Japanese now. Next: German. Maybe all! []~(￣▽￣)~*</p>
                </section>
              </div>

              {/* Slider Section */}
              <div className="slider-section">
                <h2>Components of Aara's Life</h2>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={15}
                  breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 30 } }}
                  style={{ height: '400px' }}
                >
                  {sliderData.map((slide, i) => (
                    <SwiperSlide
                      key={i}
                      className="slider-card"
                      onClick={() => setActiveSlide(slide)}
                    >
                      <img src={slide.image} alt={slide.title} className="slide-image" />
                      <h3>{slide.title}</h3>
                      <p>{slide.subtitle}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Expanded Slide Modal */}
              {activeSlide && (
                <div className="slide-modal">
                  <div className="slide-modal-content">
                    <button className="slide-close" onClick={() => setActiveSlide(null)}>×</button>
                    <img src={activeSlide.image} alt={activeSlide.title} className="slide-modal-img" />
                    <h2>{activeSlide.title}</h2>
                    <p>{activeSlide.description}</p>
                  </div>
                </div>
              )}

              {/* Dashboard */}
              <div className="personal-dashboard">
                {/* Routine, Plans, Stats cards */}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PersonalModal;
