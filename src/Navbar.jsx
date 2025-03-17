import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: 'about' },
    { name: 'Events', link: '/events' },
    { name: 'Sponsors', link: '/sponsers' },
    { name: 'Team', link: '/team' },
    { name: 'Contact & FAQ', link: '/faq' }
  ];

  const leftMenuItems = menuItems.slice(0, Math.ceil(menuItems.length / 2));
  const rightMenuItems = menuItems.slice(Math.ceil(menuItems.length / 2));

  return (
    <motion.nav 
      className="navbar py-0"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="navbar-container orbitron-500">
        <div className="navbar-content">
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="menu-left">
              {leftMenuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 8px rgba(131, 56, 236, 0.8), 0 0 12px rgba(131, 56, 236, 0.5)"
                  }}
                >
                  <strong><a href={item.link}>{item.name}</a></strong>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="logo-container"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img 
                src="/zionlogo2.png" 
                alt="Zion Logo" 
                className="logo"
              />
            </motion.div>
            
            <ul className="menu-right">
              {rightMenuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 8px rgba(131, 56, 236, 0.8), 0 0 12px rgba(131, 56, 236, 0.5)"
                  }}
                >
                  <strong><a href={item.link}>{item.name}</a></strong>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <motion.div 
              className="logo-container-mobile d-flex flex-row"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img 
                src="/zionlogo2.png" 
                alt="Zion Logo" 
                className="logo-mobile"
              />
            </motion.div>
            <motion.button 
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(131, 56, 236, 0.8), 0 0 12px rgba(131, 56, 236, 0.5)"
                      }}
                    >
                      
                      <strong><a href={item.link} onClick={toggleMenu}>{item.name}</a></strong>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
