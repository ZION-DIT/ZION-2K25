import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const images = [
    "/images/20240331_151337.jpg",
    "/images/20240331_155402.jpg",
    "/images/IMG_5712.jpg",
    "/images/IMG_5729.jpg",
    "/images/IMG_5748.jpg",
    "/images/IMG_6030.JPG",
    "/images/IMG_6031.JPG",
    "/images/IMG_6082.JPG",
    "/images/IMG_6102.JPG",
    "/images/IMG_6256.jpg",
    "/images/IMG_6372.JPG",
    "/images/IMG_6446.JPG",
    "/images/IMG_6449.JPG",
    "/images/IMG_6522.jpg",
    "/images/IMG_6835.jpg",
    "/images/IMG_6897.jpg",
    "/images/IMG_6912.jpg",
    "/images/IMG-20240401-WA0003.jpg",
    "/images/IMG-20240401-WA0025.jpg"
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.map((image, index) => (
    <SwiperSlide key={index}>
      <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
    </SwiperSlide>
  ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
