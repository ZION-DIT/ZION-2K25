import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import "./Sponsers.css";
import Navbar from "./Navbar"

const sponsors = {
  cosmic: [
    {
      id: 1,
      name: "Cosmic Corp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3l_z-KqYZ1_qLGih0bwyxiKLBdgOkCwr-PQ&s",
      description: "Pioneering quantum computing solutions for the multiverse",
      website: "https://cosmiccorp.example",
      founded: "2150",
    },
    {
      id: 2,
      name: "Star Systems",
      logo: "https://cdn.pixabay.com/photo/2024/05/26/12/44/girl-8788687_640.jpg",
      description: "Interstellar travel and transportation systems",
      website: "https://starsystems.example",
      founded: "2145",
    },
    {
      id: 3,
      name: "Cosmic Corp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3l_z-KqYZ1_qLGih0bwyxiKLBdgOkCwr-PQ&s",
      description: "Pioneering quantum computing solutions for the multiverse",
      website: "https://cosmiccorp.example",
      founded: "2150",
    },
    {
      id: 4,
      name: "Cosmic Corp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3l_z-KqYZ1_qLGih0bwyxiKLBdgOkCwr-PQ&s",
      description: "Pioneering quantum computing solutions for the multiverse",
      website: "https://cosmiccorp.example",
      founded: "2150",
    },
    {
      id: 5,
      name: "Cosmic Corp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3l_z-KqYZ1_qLGih0bwyxiKLBdgOkCwr-PQ&s",
      description: "Pioneering quantum computing solutions for the multiverse",
      website: "https://cosmiccorp.example",
      founded: "2150",
    },
    {
      id: 6,
      name: "Cosmic Corp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3l_z-KqYZ1_qLGih0bwyxiKLBdgOkCwr-PQ&s",
      description: "Pioneering quantum computing solutions for the multiverse",
      website: "https://cosmiccorp.example",
      founded: "2150",
    },
  ],
  galactic: [
    {
      id: 3,
      name: "Galaxy Tech",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnQ5RAt9u78JVthfvxzDT9nwdieTxKdwchQ&s",
      description: "Advanced AI and neural interface technology",
      website: "https://galaxytech.example",
      founded: "2148",
    },
    {
      id: 4,
      name: "Nova Industries",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pKLF0QSR2f8EZy5qhmmXCEJuP5Y9nLHyfg&s",
      description: "Renewable energy solutions for space colonies",
      website: "https://novaindustries.example",
      founded: "2147",
    },
  ],
  nebula: [
    {
      id: 5,
      name: "Nebula Solutions",
      logo: "https://via.placeholder.com/150",
      description: "Cloud computing across dimensions",
      website: "https://nebulasolutions.example",
      founded: "2149",
    },
    {
      id: 6,
      name: "Quantum Labs",
      logo: "https://via.placeholder.com/150",
      description: "Quantum encryption and security",
      website: "https://quantumlabs.example",
      founded: "2146",
    },
  ],
};

const SponsorCard = ({ sponsor, tier }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      ref={ref}
      className={`sponsor-card ${tier}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
        <div className="card-front">
          <div className="portal-frame">
            <motion.img
              src={sponsor.logo}
              alt={sponsor.name}
              animate={{ rotate: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <h3>{sponsor.name}</h3>
        </div>
        <div className="card-back saira">
          <h3>{sponsor.name}</h3>
          <p className="description">{sponsor.description}</p>
          <div className="sponsor-details">
            <p>
              <strong>Founded:</strong> {sponsor.founded}
            </p>
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="website-link"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SponsorTier = ({ title, sponsors, tier }) => (
  <div className={`sponsor-tier ${tier}`}>
    <h2>{title}</h2>
    <div className="sponsor-grid">
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} tier={tier} />
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="multiverse-container">
      <video className="video-bg" autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2019/06/06/24243-341474042_large.mp4"
          type="video/mp4"
          />
      </video>
      <Navbar/>
      <br /><br />
      <div className="stars"></div>
      <div className="twinkling"></div>

      <header>
        <h1 className="audiowide-regular">UNIVERSE OF SPONSERS</h1>
      </header>

      <main className="syncopate-bold-q">
        <SponsorTier
          title="Cosmic Sponsors"
          sponsors={sponsors.cosmic}
          tier="cosmic"
        />
        <SponsorTier
          title="Galactic Sponsors"
          sponsors={sponsors.galactic}
          tier="galactic"
        />
        <SponsorTier
          title="Nebula Sponsors"
          sponsors={sponsors.nebula}
          tier="nebula"
        />
      </main>
    </div>
  );
}

export default App;
