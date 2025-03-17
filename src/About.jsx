// src/App.jsx
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import './About.css';
import Navbar from './Navbar';
import Swiper from './components/Swiper'

const App = () => {
  

  useEffect(() => {
    gsap.fromTo(
      '.hero-heading',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const images = [
    "https://postimg.cc/qNWXqgXD",
    "https://postimg.cc/jnqymft2",
    "https://postimg.cc/sv6JFTBr",
    "https://postimg.cc/QFFJjc5W",
    "https://postimg.cc/ZBS8PgQr",
    "https://postimg.cc/k6vxTsrL",
    "https://postimg.cc/PNKWZSQw",
    "https://postimg.cc/Dm7Q89Lh",
    "https://postimg.cc/kBpWYDZM",
    "https://postimg.cc/K13B6xSP",
    "https://postimg.cc/8FhWC4Cs",
    "https://postimg.cc/LqdLRw2r",
    "https://postimg.cc/m1rF8GyF",
    "https://postimg.cc/HcdM8MJz",
    "https://postimg.cc/CB7qGKkg",
    "https://postimg.cc/SjQ8yWbN",
    "https://postimg.cc/yWfRWk7h",
    "https://postimg.cc/LnwZBwYn",
    "https://postimg.cc/QF7K6m1S",

  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="App">
        <Navbar/>
        <video className="video-bg" autoPlay loop muted preload='auto'>
        <source
          src="/videos/aboutbg.webm"
          type="video/webm"
          />
      </video>
      <header>
        <h1 className='audiowide-regular'>EXPLORE THE SACRED TIMELINE</h1>
      </header>
      <div className="zion-section glassmorphism">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading syncopate-bold"
        >
          ZION
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-text saira "
        >
          ZION is the annual technical festival of Dr. D.Y. Patil Institute of Technology, Pimpri, Pune, providing a platform for students to showcase their technical skills, innovation, and creativity. The festival features competitions, hackathons, and contetsts across domains like AI, robotics, coding, entrepreneurship and share market .
        </motion.p>
      </div>
      <div className="history-section glassmorphism ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading syncopate-bold"
        >
          History of ZION Tech Fest
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-text saira"
        >
         ZION, has been a celebrated tradition since 2006, showcasing a diverse array of events encompassing both technical and non-technical domains. ZION has grown into a vibrant platform for fostering creativity, innovation.
        </motion.p>
      </div>

      <div className="college-section glassmorphism">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading syncopate-bold"
        >
          DIT Pimpri
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-text saira"
        >
          Welcome to Dr. D. Y. Patil Institute of Technology (DIT), Pimpri, Pune. This campus is started in year 1983 and further nurtured by our visionary Chairman Hon’ble Dr. P. D. Patil with the vision “Empowerment through knowledge” “Better Education Better World”
        </motion.p>
      </div>

      <div className="carousel-section glassmorphism">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading syncopate-bold"
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
