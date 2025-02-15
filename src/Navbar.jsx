import React from 'react';
import { Compass, Search, Home, Users, BookOpen, Phone, Mail, Calendar, Bell, ShieldQuestion, Handshake  } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar position-static">
      <div className="nav-section left">
        <div className="nav-buttons">
          <a href="/" className="nav-button outline">
            <span className="nav-icon"><Home size={18} /></span>
            <span>Home</span>
          </a>
          <a href="about" className="nav-button outline">
            <span className="nav-icon"><BookOpen size={18} /></span>
            <span>About</span>
          </a>
          <a href="/events" className="nav-button outline">
            <span className="nav-icon"><Calendar size={18} /></span>
            <span>Events</span>
          </a>
        </div>
      </div>
      
      <div className="nav-section center">
        <a href="/" className="logo ">
          {/* <Compass className="logo-icon me-2" size={32} /> */}
          <span className='logo-image-container'><img src="/zionlogo.png" alt="" className='logo-img'/></span>
        </a>
      </div>
      
      <div className="nav-section right">
        <div className="nav-buttons">
          <a href="/sponsers" className="nav-button">
            <span className="nav-icon"><Handshake size = {18}/></span>
            <span>Sponsers</span>
          </a>
          <a href="/team" className="nav-button">
            <span className="nav-icon"><Users size={18} /></span>
            <span>Team</span>
          </a>
          <a href="/faq" className="nav-button">
            <span className="nav-icon"><ShieldQuestion size={18} /></span>
            <span>FAQ</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;