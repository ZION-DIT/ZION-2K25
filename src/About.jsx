// src/App.jsx
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { loadFull } from 'tsparticles';
import './About.css';
import Navbar from './Navbar';
import Swiper from './components/Swiper'

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    gsap.fromTo(
      '.hero-heading',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

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
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="App">
        <Navbar/>
        <video className="video-bg" autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2024/04/13/207863_large.mp4"
          type="video/mp4"
          />
      </video>
    <header>
        <h1>EXPLORE THE SACRED TIMELINE</h1>
      </header>
      <div className="zion-section glassmorphism">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          ZION
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-text"
        >
          Founded in [Year], our college has a rich legacy of fostering technological advancements. Our impact on the tech industry is profound, with numerous alumni leading innovations globally. The college has a special connection with Zion Tech Fest, as it was initiated by our students and faculty...
        </motion.p>
      </div>
      <div className="history-section glassmorphism">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          History of Zion Tech Fest
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-text"
        >
          Zion Tech Fest was founded with the vision of bringing together the brightest minds in technology. Over the years, it has evolved into a premier event, celebrating innovation and creativity. Notable milestones include...
        </motion.p>
      </div>

      <div className="college-section glassmorphism">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          History of the College
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-text"
        >
          Founded in [Year], our college has a rich legacy of fostering technological advancements. Our impact on the tech industry is profound, with numerous alumni leading innovations globally. The college has a special connection with Zion Tech Fest, as it was initiated by our students and faculty...
        </motion.p>
      </div>

      <div className="carousel-section glassmorphism">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Previous Year's Highlights
        </motion.h2>
        <div className="carousel">
          <Swiper/>
        </div>
      </div>
    </div>
  );
};

export default App;
