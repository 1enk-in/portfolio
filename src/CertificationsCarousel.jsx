import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './index.css';

const certifications = [
  {
    title: 'Artificial Intelligence Foundations',
    issuer: 'nasscom FutureSkills',
    date: 'Aug 2021',
    image: '/images/nasscom.png',
    url: 'https://example.com/ai-foundations',
  },
  {
    title: 'Front-End Web Development',
    issuer: 'The Hong Kong University of Science and Technology',
    date: 'March 2020',
    image: '/images/hkust.png',
    url: 'https://example.com/frontend-cert',
  },
  {
    title: 'Statistics',
    issuer: 'University of Amsterdam',
    date: 'Jan 2020',
    image: '/images/amsterdam.png',
    url: 'https://example.com/statistics-cert',
  },
  {
    id: 4,
    title: "hhu Certification",
    issuer: "Placeholder University",
    date: "Jan 2025",
    image: "/certificates/placeholder.png",
    url: "#",
  },
  {
    id: 5,
    title: "Dummy Certification",
    issuer: "Placeholder University",
    date: "Jan 2025",
    image: "/certificates/placeholder.png",
    url: "#",
  },
  {
    id: 6,
    title: "55555 Certification",
    issuer: "Placeholder University",
    date: "Jan 2025",
    image: "/certificates/placeholder.png",
    url: "#",
  }
];

const Certifications = () => {
  const swiperRef = useRef(null);
  const [lastIndex, setLastIndex] = useState(null);

  const onSlideChange = (swiper) => {
    if (lastIndex === null) {
      setLastIndex(swiper.realIndex);
      return;
    }

    const current = swiper.realIndex;
    const prev = lastIndex;
    setLastIndex(current);

    // Calculate direction (consider looping)
    let direction = 0;
    const last = certifications.length - 1;
    if (
      (current === 0 && prev === last) ||
      current === prev + 1
    ) {
      direction = 1; // moved right (next)
    } else if (
      (current === last && prev === 0) ||
      current === prev - 1
    ) {
      direction = -1; // moved left (prev)
    }

    // Restart autoplay in the detected direction
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    }

    // Set the delay and start autoplay manually with direction logic
    swiper.params.autoplay = {
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: direction === -1,
    };
    swiper.autoplay.start();
  };

  const onPrevClick = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.autoplay.running) swiperRef.current.autoplay.stop();
    swiperRef.current.slidePrev();
    swiperRef.current.params.autoplay.reverseDirection = true;
    swiperRef.current.autoplay.start();
  };

  const onNextClick = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.autoplay.running) swiperRef.current.autoplay.stop();
    swiperRef.current.slideNext();
    swiperRef.current.params.autoplay.reverseDirection = false;
    swiperRef.current.autoplay.start();
  };

  return (
    <div data-aos="zoom-in" data-aos-delay="100" className="certifications-section">
      <div className="swiper-viewport" style={{ position: 'relative' }}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={onSlideChange}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={3}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="certification-swiper"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="cert-card">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-button"
                >
                  View Credential
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button
          className="custom-swiper-button prev"
          onClick={onPrevClick}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="custom-swiper-button next"
          onClick={onNextClick}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Certifications;
