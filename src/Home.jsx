import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from './components/ui/Button.tsx';
import { Clock } from 'lucide-react';
import './Home.css';
import Navbar from './Navbar.jsx';
import Counter from './components/Counter.jsx';

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
          src="/videos/homebg.webm"
          type="video/webm"
          />
      </video>
      <Navbar/>
    <div className="event-container">
      {/* <Particles className="particles-bg" options={particleOptions} init={loadFull} /> */}
      <div className="left-section flex-col">
        <div className='logo-image-container zion-logo d-flex '>
            <img src="/zionlogo.png" alt="Logo" className='logo-imgg'/>
            {/* <div className="text">
              2k25
            </div> */}
        </div>
        <div className="countdown">
          <div className="timer syncopate-regular">
            <div className="letter"><span className='value'>{timeLeft.days}</span> <br />Days</div>
            <div className="letter"><span className='value'>{timeLeft.hours}</span><br/>Hours</div>
            <div className="letter"><span className='value'>{timeLeft.minutes}</span><br/>Minutes</div>
            <div className="letter"><span className='value'>{timeLeft.seconds}</span><br/>Seconds</div>
            <div className="mob"><span className='value'>{timeLeft.days}</span><br/>Days</div>
            <div className="mob"><span className='value'>{timeLeft.hours}</span><br/>Hrs</div>
            <div className="mob"><span className='value'>{timeLeft.minutes}</span><br/>Min</div>
            <div className="mob"><span className='value'>{timeLeft.seconds}</span><br/>Sec</div>
          </div>
        </div>
      </div>
      <div className="right-section">
        
        <p className="event-description syncopate-regular">Step into the Multiverse. A journey beyond time and space.</p>
        <div className="d-flex classic flex-sm-col">
        <a href='/events'>
        <Button className="event-btn ">
           Explore the Events of Multiverse
        </Button>
        </a>
        <Button className="event-btn justify-content-center align-items-center">
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-6 justify-content-center align-items-center bttn">
              <h2>
                <Counter start={0} end={100} duration={2000}/>
              </h2>
              {/* <br /> */}
              <p>Registrations</p>
            </div>
        </Button>
        </div>
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
  // return (

  // )
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
