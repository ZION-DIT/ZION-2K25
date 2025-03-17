"use client"

import { useEffect, useRef } from "react"
import "./Team.css"
import Navbar from "./Navbar"
import { gsap } from "gsap"
import {
  Code2,
  Rocket,
  Cpu,
  Globe2,
  Blocks,
  Brain,
  Laptop,
  Network,
  Puzzle,
  Zap,
  Database,
  Cloud,
  Shield,
  Terminal,
  Microscope,
  Instagram
} from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Sushant Zambare",
    role: "Tech Lead",
    altRole: "Quantum Architect",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Globe2 size={24} />,
    universe: "Head Coordinator",
    altUniverse: "Quantum Realm",
    social: {
      github: "sarahchen",
      twitter: "https://www.instagram.com/sushant_3.4/",
      linkedin: "https://www.linkedin.com/in/sushant-zambare-7711b2257/",
    },
    position: "Head Coordinator",
  },
  {
    id: 2,
    name: "Bhargav Gharat",
    role: "Event Director",
    altRole: "Timeline Guardian",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Globe2 size={24} />,
    universe: "Head Coordinator",
    altUniverse: "Temporal Dimension",
    social: {
      github: "jwilson",
      twitter: "https://www.instagram.com/_bhargavvv._/?hl=en",
      linkedin: "https://www.linkedin.com/in/bhargav-gharat-a66b45353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Head Coordinator",
  },
  {
    id: 3,
    name: "Nandini Bawne",
    role: "Innovation Lead",
    altRole: "Neural Engineer",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
    icon: <Globe2 size={24} />,
    universe: "Head Coordinator",
    altUniverse: "Digital Nexus",
    social: {
      github: "mayatech",
      twitter: "https://www.instagram.com/nandini_bawne/?hl=en",
      linkedin: "https://www.linkedin.com/in/rajnandini-bawne-386272257/",
    },
    position: "Head Coordinator",
  },
  {
    id: 4,
    name: "Deep Nannaware",
    role: "Experience Designer",
    altRole: "Reality Weaver",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Brain size={24} />,
    universe: "Head Manager",
    altUniverse: "Virtual Dimension",
    social: {
      github: "alexr",
      twitter: "https://www.instagram.com/deep_mnannaware/?hl=en",
      linkedin: "https://www.linkedin.com/in/deep-nannaware-17152b326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    position: "Head Manager",
  },
  {
    id: 5,
    name: "Apurv Rakshe",
    role: "AI Specialist",
    altRole: "Mind Sculptor",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Brain size={24} />,
    universe: "Head Manager",
    altUniverse: "Neural Network",
    social: {
      github: "emmaai",
      twitter: "https://www.instagram.com/apurvv_rakshe/?hl=en",
      linkedin: "https://www.linkedin.com/in/apurv-rakshe-9402ba257/",
    },
    position: "Head Manager",
  },
  {
    id: 6,
    name: "Pankaj Sutar",
    role: "Security Chief",
    altRole: "Quantum Guardian",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Shield size={24} />,
    universe: "Deputy Head Manager",
    altUniverse: "Cryptosphere",
    social: {
      github: "mjsecurity",
      twitter: "https://www.instagram.com/pankaj_sutar",
      linkedin: "https://www.linkedin.com/in/pankaj-sutar-42783a269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Deputy Head Manager",
  },
  {
    id: 7,
    name: "Rhythm Rangari",
    role: "Data Architect",
    altRole: "Information Weaver",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Shield size={24} />,
    universe: "Deputy Head Manager",
    altUniverse: "Data Dimension",
    social: {
      github: "sophiadata",
      twitter: "https://www.instagram.com/_imrhythm_/?hl=en",
      linkedin: "https://www.linkedin.com/in/rhythm-rangari-383724338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Deputy Head Manager",
  },
  {
    id: 8,
    name: "Sarvadnya Walzade",
    role: "Cloud Architect",
    altRole: "Sky Weaver",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Shield size={24} />,
    universe: "Deputy Head Manager",
    altUniverse: "Cloud Nexus",
    social: {
      github: "davidcloud",
      twitter: "david_cloud",
      linkedin: "https://www.linkedin.com/in/sarvdnya-walzade-061480252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Deputy Head Manager",
  },
  {
    id: 9,
    name: "Soham Ingole",
    role: "UX Researcher",
    altRole: "Mind Reader",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Shield size={24} />,
    universe: "Deputy Head Manager",
    altUniverse: "Cognitive Realm",
    social: {
      github: "oliviaux",
      twitter: "https://www.instagram.com/saviour_312/?hl=en",
      linkedin: "https://www.linkedin.com/in/soham-ingole-b2825a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Deputy Head Manager",
  },
  {
    id: 10,
    name: "Shubham Darekar",
    role: "DevOps Lead",
    altRole: "Pipeline Master",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Terminal size={24} />,
    universe: "Tech Head",
    altUniverse: "Pipeline Dimension",
    social: {
      github: "ryanops",
      twitter: "https://www.instagram.com/shubhamdarekar__415/?hl=en",
      linkedin: "https://www.linkedin.com/in/shubham-darekar-236424257/",
    },
    position: "Tech Team",
  },
  {
    id: 11,
    name: "Samarth Bedare",
    role: "Blockchain Developer",
    altRole: "Chain Weaver",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Code2 size={24} />,
    universe: "Tech Team",
    altUniverse: "Chain Realm",
    social: {
      github: "isablockchain",
      twitter: "isa_chain",
      linkedin: "https://www.linkedin.com/in/samarthbedare/",
    },
    position: "Tech Team",
  },
  {
    id: 12,
    name: "Aditi Apte",
    role: "Systems Architect",
    altRole: "Matrix Builder",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
    icon: <Code2 size={24} />,
    universe: "Tech Team",
    altUniverse: "System Core",
    social: {
      github: "lucassys",
      twitter: "lucas_arch",
      linkedin: "https://www.linkedin.com/in/aditiapte15/",
    },
    position: "Tech Team",
  },
  {
    id: 13,
    name: "Nishant Bhavar",
    role: "ML Engineer",
    altRole: "Pattern Seeker",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Code2 size={24} />,
    universe: "Tech Team",
    altUniverse: "Neural Dimension",
    social: {
      github: "avaml",
      twitter: "https://www.instagram.com/nishantb._/?hl=en",
      linkedin: "https://www.linkedin.com/in/nishant-bhavar-a64812329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Tech Team",
  },
  {
    id: 14,
    name: "Tushar Chavan",
    role: "Mobile Developer",
    altRole: "Portal Creator",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Code2 size={24} />,
    universe: "Tech Team",
    altUniverse: "Mobile Realm",
    social: {
      github: "ethanmobile",
      twitter: "https://www.instagram.com/_tusharr15_/?hl=en",
      linkedin: "https://www.linkedin.com/in/tushar-chavan-4ba19a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Tech Team",
  },
  {
    id: 15,
    name: "Anjali Kadare",
    role: "Performance Engineer",
    altRole: "Speed Weaver",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
    icon: <Laptop size={24} />,
    universe: "Social Media Head",
    altUniverse: "Speed Dimension",
    social: {
      github: "zaraperf",
      twitter: "https://www.instagram.com/anja_kadare/?hl=en",
      linkedin: "https://www.linkedin.com/in/anjali-kadare-a0984b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Social Media Head",
  },
  {
    id: 16,
    name: "Ayush Wayal",
    role: "Community Manager",
    altRole: "Connection Weaver",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Laptop size={24} />,
    universe: "Social Media Head",
    altUniverse: "Social Dimension",
    social: {
      github: "liamsocial",
      twitter: "https://www.instagram.com/ayush.wayal/?hl=en",
      linkedin: "https://www.linkedin.com/in/ayush-wayal-a7ba77335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    position: "Social Media Head",
  },
  {
    id: 17,
    name: "Rishikesh More",
    role: "Design Director",
    altRole: "Vision Weaver",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Puzzle size={24} />,
    universe: "Creative Head",
    altUniverse: "Creative Dimension",
    social: {
      github: "noracreative",
      twitter: "https://www.instagram.com/rishikesh._.m/",
      linkedin: "https://www.linkedin.com/in/rishikesh-more-315a40217/",
    },
    position: "Creative Head",
  },
  {
    id: 18,
    name: "Ketan Thakare",
    role: "Design Director",
    altRole: "Vision Weaver",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Puzzle size={24} />,
    universe: "Creative Head",
    altUniverse: "Creative Dimension",
    social: {
      github: "noracreative",
      twitter: "https://www.instagram.com/ketan_07t/",
      linkedin: "https://www.linkedin.com/in/ketan-thakare-360a67283/",
    },
    position: "Creative Head",
  },
  {
    id: 19,
    name: "Palavi Bhave",
    role: "Growth Strategist",
    altRole: "Expansion Architect",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
    icon: <Cloud size={24} />,
    universe: "Marketing Head",
    altUniverse: "Growth Dimension",
    social: {
      github: "danielgrowth",
      twitter: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/in/palavibhave/",
    },
    position: "Marketing Head",
  },
  {
    id: 20,
    name: "Diya Darvekar",
    role: "Growth Strategist",
    altRole: "Expansion Architect",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
    icon: <Microscope size={24} />,
    universe: "Props Head",
    altUniverse: "Growth Dimension",
    social: {
      github: "danielgrowth",
      twitter: "https://www.instagram.com/__pristine__29",
      linkedin: "https://www.linkedin.com/in/diya-darvekar-768547268/",
    },
    position: "Props Head",
  },
  {
    id: 21,
    name: "Dr. Prashant Patel",
    role: "Growth Strategist",
    altRole: "Expansion Architect",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Rocket size={24} />,
    universe: "Faculty Coordinator",
    altUniverse: "Growth Dimension",
    social: {
      github: "danielgrowth",
      twitter: "",
      linkedin: "",
    },
    position: "Faculty Coordinator",
  },
  {
    id: 22,
    name: "Dr. Atul Patil",
    role: "Growth Strategist",
    altRole: "Expansion Architect",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Rocket size={24} />,
    universe: "Faculty Coordinator",
    altUniverse: "Growth Dimension",
    social: {
      github: "danielgrowth",
      twitter: "",
      linkedin: "",
    },
    position: "Faculty Coordinator",
  },
  {
    id: 23,
    name: "Prof. Sandeep Chitalkar",
    role: "Growth Strategist",
    altRole: "Expansion Architect",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Rocket size={24} />,
    universe: "Faculty Coordinator",
    altUniverse: "Growth Dimension",
    social: {
      github: "danielgrowth",
      twitter: "",
      linkedin: "",
    },
    position: "Faculty Coordinator",
  },
  {
    id: 24,
    name: "Histesh Divnale",
    role: "Growth Strategist",
    altRole: "Expansion Architect",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <Rocket size={24} />,
    universe: "Documentation Head",
    altUniverse: "Growth Dimension",
    social: {
      github: "danielgrowth",
      twitter: "https://www.instagram.com/hitesh_divnale_/?hl=en",
      linkedin: "https://www.linkedin.com/in/hitesh-divnale-8a11982bb/",
    },
    position: "Documentation Head",
  },
]

// Hierarchy positions in order of importance
const positionOrder = [
  "Faculty Coordinator",
  "Head Coordinator",
  "Head Manager",
  "Deputy Head Manager",
  "Tech Team",
  "Creative Head",
  "Social Media Head",
  "Marketing Head",
  "Props Head",
  "Documentation Head"
]

function App() {
  const cardsRef = useRef([]);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.to(".grid-overlay", {
      rotation: 360,
      duration: 200,
      repeat: -1,
      ease: "none",
    });

    gsap.from(cardsRef.current, {
      duration: 1,
      opacity: 1,
      y: 10,
      stagger: {
        amount: 1,
      },
      ease: "power4.out",
    });

    cardsRef.current.forEach((card, index) => {
      const frontContent = card.querySelector(".card-content-team");
      const altContent = card.querySelector(".alt-content");
      const timeline = gsap.timeline({ paused: true });

      if (frontContent && altContent) {
        timeline
          .to(frontContent, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.inOut",
          })
          .to(
            altContent,
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "power2.inOut",
            },
            "-=0.4",
          );
      }

      gsap.to(card, {
        y: "-=10",
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.1,
      });
    });
  }, []);

  const membersByPosition = {};
  positionOrder.forEach((position) => {
    membersByPosition[position] = teamMembers.filter((member) => member.position === position);
  });

  let cardIndex = 0;

  return (
    <>
      <div className="portal-background" />
      <video className="video-bg" autoPlay loop muted>
        <source src="/videos/teambg.webm" type="video/webm" />
      </video>
      <Navbar />
      <div className="grid-overlay" />

      <div className="container">
        <header>
          <h1 className="audiowide-regular">Keepers of Multiverse</h1>
        </header>

        {positionOrder.map((position, positionIndex) =>
          membersByPosition[position] && membersByPosition[position].length > 0 ? (
            <div key={position} className="position-section saira">
              <h2 className="position-title audiowide-regular">{position}</h2>
              <div className="team-grid">
                {membersByPosition[position].map((member, memberIndex) => {
                  const currentIndex = cardIndex++;
                  return (
                    <div
                      key={member.id}
                      className="member-card"
                      ref={(el) => (cardsRef.current[currentIndex] = el)}
                    >
                      <div className="card-content-team">
                        <div className="member-icon">{member.icon}</div>
                        <div className="image-container">
                          <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                        </div>
                        <div className="member-info">
                          <h3>{member.name}</h3>
                          <p className="universe">{member.universe}</p>
                          <div className="social-links">
                            {member.social.twitter && (
                              <a href={member.social.twitter} target="_blank">
                                <i className="fab fa-instagram"></i>
                              </a>
                            )}
                            {member.social.linkedin && (
                              <a href={member.social.linkedin} target="_blank">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null,
        )}
      </div>
    </>
  );
}

export default App;
