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
      "https://i.postimg.cc/q7vmm3tr/20240331-151337.jpg",
      "https://i.postimg.cc/Vvn4S9hq/20240331-155402.jpg",
      "https://i.postimg.cc/T3GNDSfp/IMG-20240401-WA0003.jpg",
      "https://i.postimg.cc/YC3nf3C8/IMG-20240401-WA0025.jpg",
      "https://i.postimg.cc/637MKxL1/IMG-5712.jpg",
      "https://i.postimg.cc/gJfNktgc/IMG-5729.jpg",
      "https://i.postimg.cc/5NWnhGHn/IMG-5748.jpg",
      "https://i.postimg.cc/wxmwbHB1/IMG-6030.jpg",
      "https://i.postimg.cc/bwzLJt9n/IMG-6031.jpg",
      "https://i.postimg.cc/GmqKsmX5/IMG-6082.jpg",
      "https://i.postimg.cc/0N4CcHRG/IMG-6102.jpg",
      "https://i.postimg.cc/Jh0q3Cg4/IMG-6256.jpg",
      "https://i.postimg.cc/vTrL8Y1X/IMG-6372.jpg",
      "https://i.postimg.cc/Sszf57kB/IMG-6446.jpg",
      "https://i.postimg.cc/qqVxdh7z/IMG-6449.jpg",
      "https://i.postimg.cc/c1wcBmDY/IMG-6522.jpg",
      "https://i.postimg.cc/RVmLsH8Y/IMG-6835.jpg",
      "https://i.postimg.cc/dVtmvKJm/IMG-6897.jpg",
      "https://i.postimg.cc/g2Sy2BJ9/IMG-6912.jpg"


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
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
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
