import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Feq from "./components/Feq"
import "./Contact.css" 
import { MapPin, Mail, Phone } from "lucide-react"
import Navbar from "./Navbar.jsx"



const Contact = () => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'team', label: 'Team' },
    { id: 'faq', label: 'FAQ' },
  ];  

  return (

    <div className="contact-page">
      <video  className="video-bg" autoPlay loop muted  onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.5)}>
        <source src="https://cdn.pixabay.com/video/2020/02/09/32153-390688119_large.mp4" type="video/mp4" />
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
                123 Tech Street, Innovation City
              </p>
              <p className="d-flex align-items-center text-secondary">
                <Mail className="me-2" size={20} />
                info@ziontechfest.com
              </p>
              <p className="d-flex align-items-center text-secondary">
                <Phone className="me-2" size={20} />
                +91 1234567890
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h3 className="h5 fw-bold text-light mb-3">Quick Links</h3>
            <div className="d-flex flex-column gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5241363962674!2d73.81213597510403!3d18.63013478247808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b92fc552a8d1%3A0xe6c75e509fc02a47!2sDr.%20D.%20Y.%20Patil%20Institute%20of%20Technology%2C%20Sant%20Tukaram%20Nagar%2C%20Pimpri%2C%20Pune%2C%20Maharashtra%20411018!5e0!3m2!1sen!2sin!4v1707390123456!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded"
            >
            </iframe>
          </div>

        </div>

        {/* Copyright Text */}
        <div className="text-center mt-4 text-secondary">
          <p>© 2024 Zion Techfest. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Contact

