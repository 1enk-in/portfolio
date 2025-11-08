import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './index.css';
import GGCImage from './images/ggc.jpeg';
import msImage from './images/msoffice.jpg';
import rspImage from './images/rsp.png';
import NISMImage from './images/nism.png';

const certifications = [
  {
    title: 'GGC/PTA',
    issuer: 'VirtualGGC',
    date: 'Aug 2024',
    image: GGCImage,
    url: 'https://example.com/',
  },
  {
    title: 'Ms-Office',
    issuer: 'AAA Foundation',
    date: 'March 2022',
    image: msImage,
    url: 'https://example.com/',
  },
  {
    title: "RSP",
    issuer: "Vidya mandir",
    date: "Jan 2016",
    image: rspImage,
    url: "https://example.com/",
  },
  {
    title: "NISM",
    issuer: "Securities and Exchange Board of india",
    date: "Apr 2025",
    image: NISMImage,
    url: "https://example.com/",
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
