import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Button } from './components/ui/Button.tsx';
import { Clock } from 'lucide-react';
import './Home.css';
import Navbar from './Navbar.jsx';

const EventHomePage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    gsap.fromTo('.zion-logo', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' });
    gsap.fromTo('.countdown', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.5 });
    gsap.fromTo('.event-btn', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1 });
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <video className="video-bg" autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2021/02/11/64917-511355333_tiny.mp4"
          type="video/mp4"
          />
      </video>
      <Navbar/>
    <div className="event-container">
      <Particles className="particles-bg" options={particleOptions} init={loadFull} />
      <div className="left-section">
        <div className='logo-image-container zion-logo'>
            <img src="/zionlogo.png" alt="Logo" className='logo-imgg'/>
        </div>
        <div className="text">
        </div>
      </div>
      <div className="right-section">
        <div className="countdown">
          {formatTimeLeft(timeLeft)}
        </div>
        <p className="event-description">Step into the Multiverse. A journey beyond time and space.</p>
        <a href='/events'>
        <Button className="event-btn">
          <Clock className="icon" /> Explore the Events of Multiverse
        </Button>
        </a>
        
      </div>
    </div>
    </>
  );
};

function calculateTimeLeft() {
  const eventDate = new Date('March 27, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function formatTimeLeft(time) {
  return `${time.days} : ${time.hours} : ${time.minutes} : ${time.seconds}`;
}

const particleOptions = {
  particles: {
    number: { value: 50 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: false },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' } },
  },
};

export default EventHomePage;
