import React from "react"
import Feq from "./components/Feq.jsx"
import "./Contact.css" 
import { MapPin, Mail, Phone } from "lucide-react"
import Navbar from "./Navbar.jsx"
import MapComponent from "./Google.jsx"



const Contact = () => {
  const navItems = [
    { id: 'home', label: '' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'team', label: 'Team' },
    { id: 'faq', label: 'FAQ' },
  ];  

  return (

    <div className="contact-page">
      <video  className="video-bg" autoPlay loop muted  onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.5)}>
        <source src="/videos/faq.webm" type="video/webm" />
      </video>
      <Navbar/>
      <Feq/>
      <footer className="mt-5 border-top border-secondary bg-dark-blue-purple pt-4 opacity-100">
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-md-4">
            <h3 className="h5 fw-bold text-light mb-3">Contact Us</h3>
            <div className="d-flex flex-column gap-2">
              <p className="d-flex align-items-center text-secondary">
                <MapPin className="me-2" size={20} />
                Dr. D. Y. Patil Institute of Technology, Pimpri, Pune 
              </p>
              <p className="d-flex align-items-center text-secondary">
                <Mail className="me-2" size={20} />
                zion.dit@dypvp.edu.in
              </p>
              <p className="d-flex align-items-center text-secondary">
                <Phone className="me-2" size={20} />
                +91 8459523637 / 9284744714
              </p>
              {/* <p className="d-flex align-items-center text-secondary">
                <Phone className="me-2" size={20} />
                +91 9284744714
              </p> */}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h3 className="h5 fw-bold text-light mb-3">Quick Links</h3>
            <div className="d-flex flex-column gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`/${item.id}`}
                  className="text-secondary text-decoration-none hover-text-light"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location Section */}
          
          <div className="col-md-4">
            <h3 className="h5 fw-bold text-light mb-3">Location</h3>
            {/* <iframe
              // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3783.5241363962674!2d73.81213597510403!3d18.63013478247808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b92fc552a8d1%3A0xe6c75e509fc02a47!2sDr.%20D.%20Y.%20Patil%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1707390123456!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded"
            >
            </iframe> */}
              <MapComponent/>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-4 text-secondary">
          <p>&copy; 2025 Team Zion . All rights reserved.</p>
          <p>Developed by Shubham Darekar and team.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Contact

