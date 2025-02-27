import React, { useEffect, useRef } from "react";
import "./Team.css"
import Navbar from "./Navbar"
import { gsap } from "gsap";
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
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Tech Lead",
    altRole: "Quantum Architect",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    icon: <Code2 size={24} />,
    universe: "Universe Prime",
    altUniverse: "Quantum Realm",
    social: {
      github: "sarahchen",
      twitter: "sarahchen_tech",
      linkedin: "sarahchendev",
    },
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Event Director",
    altRole: "Timeline Guardian",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    icon: <Rocket size={24} />,
    universe: "Universe Prime",
    altUniverse: "Temporal Dimension",
    social: {
      github: "jwilson",
      twitter: "james_events",
      linkedin: "jameswilsonevents",
    },
  },
  {
    id: 3,
    name: "Maya Patel",
    role: "Innovation Lead",
    altRole: "Neural Engineer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    icon: <Cpu size={24} />,
    universe: "Universe Prime",
    altUniverse: "Digital Nexus",
    social: {
      github: "mayatech",
      twitter: "maya_innovates",
      linkedin: "mayapatelinnovation",
    },
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    role: "Experience Designer",
    altRole: "Reality Weaver",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    icon: <Globe2 size={24} />,
    universe: "Universe Prime",
    altUniverse: "Virtual Dimension",
    social: {
      github: "alexr",
      twitter: "alex_designs",
      linkedin: "alexrodriguezux",
    },
  },
  {
    id: 5,
    name: "Emma Zhang",
    role: "AI Specialist",
    altRole: "Mind Sculptor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    icon: <Brain size={24} />,
    universe: "Universe Prime",
    altUniverse: "Neural Network",
    social: {
      github: "emmaai",
      twitter: "emma_ai_tech",
      linkedin: "emmazhangai",
    },
  },
  {
    id: 6,
    name: "Marcus Johnson",
    role: "Security Chief",
    altRole: "Quantum Guardian",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    icon: <Shield size={24} />,
    universe: "Universe Prime",
    altUniverse: "Cryptosphere",
    social: {
      github: "mjsecurity",
      twitter: "marcus_secure",
      linkedin: "marcusjsecurity",
    },
  },
  {
    id: 7,
    name: "Sophia Lee",
    role: "Data Architect",
    altRole: "Information Weaver",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    icon: <Database size={24} />,
    universe: "Universe Prime",
    altUniverse: "Data Dimension",
    social: {
      github: "sophiadata",
      twitter: "sophia_data",
      linkedin: "sophialeearch",
    },
  },
  {
    id: 8,
    name: "David Kumar",
    role: "Cloud Architect",
    altRole: "Sky Weaver",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    icon: <Cloud size={24} />,
    universe: "Universe Prime",
    altUniverse: "Cloud Nexus",
    social: {
      github: "davidcloud",
      twitter: "david_cloud",
      linkedin: "davidkumarcloud",
    },
  },
  {
    id: 9,
    name: "Olivia Martinez",
    role: "UX Researcher",
    altRole: "Mind Reader",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    icon: <Microscope size={24} />,
    universe: "Universe Prime",
    altUniverse: "Cognitive Realm",
    social: {
      github: "oliviaux",
      twitter: "olivia_ux",
      linkedin: "oliviamartinezux",
    },
  },
  {
    id: 10,
    name: "Ryan Chang",
    role: "DevOps Lead",
    altRole: "Pipeline Master",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    icon: <Terminal size={24} />,
    universe: "Universe Prime",
    altUniverse: "Pipeline Dimension",
    social: {
      github: "ryanops",
      twitter: "ryan_devops",
      linkedin: "ryanchangops",
    },
  },
  {
    id: 11,
    name: "Isabella Silva",
    role: "Blockchain Developer",
    altRole: "Chain Weaver",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400",
    icon: <Blocks size={24} />,
    universe: "Universe Prime",
    altUniverse: "Chain Realm",
    social: {
      github: "isablockchain",
      twitter: "isa_chain",
      linkedin: "isabellasilvabc",
    },
  },
  {
    id: 12,
    name: "Lucas Anderson",
    role: "Systems Architect",
    altRole: "Matrix Builder",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400",
    icon: <Network size={24} />,
    universe: "Universe Prime",
    altUniverse: "System Core",
    social: {
      github: "lucassys",
      twitter: "lucas_arch",
      linkedin: "lucasandersonarch",
    },
  },
  {
    id: 13,
    name: "Ava Williams",
    role: "ML Engineer",
    altRole: "Pattern Seeker",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
    icon: <Puzzle size={24} />,
    universe: "Universe Prime",
    altUniverse: "Neural Dimension",
    social: {
      github: "avaml",
      twitter: "ava_ml",
      linkedin: "avawilliamsml",
    },
  },
  {
    id: 14,
    name: "Ethan Park",
    role: "Mobile Developer",
    altRole: "Portal Creator",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    icon: <Laptop size={24} />,
    universe: "Universe Prime",
    altUniverse: "Mobile Realm",
    social: {
      github: "ethanmobile",
      twitter: "ethan_apps",
      linkedin: "ethanparkmobile",
    },
  },
  {
    id: 15,
    name: "Zara Khan",
    role: "Performance Engineer",
    altRole: "Speed Weaver",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=400",
    icon: <Zap size={24} />,
    universe: "Universe Prime",
    altUniverse: "Speed Dimension",
    social: {
      github: "zaraperf",
      twitter: "zara_speed",
      linkedin: "zarakhanperf",
    },
  },
];

function App() {
  const cardsRef = useRef([]);
  const gridRef = useRef(null);

  useEffect(() => {
    // Initial animation for the grid overlay
    gsap.to(".grid-overlay", {
      rotation: 360,
      duration: 200,
      repeat: -1,
      ease: "none",
    });

    // Animate cards on load with a staggered effect
    gsap.from(cardsRef.current, {
      duration: 1.5,
      opacity: 1,
      y: 10,
      stagger: {
        amount: 1,
      },
      ease: "power4.out",
    });

    // Set up card hover animations
    cardsRef.current.forEach((card, index) => {
      const frontContent = card.querySelector(".card-content");
      const altContent = card.querySelector(".alt-content");
      const timeline = gsap.timeline({ paused: true });

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
          "-=0.4"
        );

      // Hover animations
      card.addEventListener("mouseenter", () => timeline.play());
      card.addEventListener("mouseleave", () => timeline.reverse());

      // Floating animation with random offset
      gsap.to(card, {
        y: 0,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <>
      <div className="portal-background" />
      <video className="video-bg" autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2024/06/07/215697_large.mp4"
          type="video/mp4"
        />
      </video>
      <Navbar/>
      <div className="grid-overlay" />

      <div className="container">
      <header>
        <h1>Keepers of Multiverse</h1>
      </header>

        <div className="team-grid" ref={gridRef}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="member-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="card-content">
                <div className="image-container">
                  <div className="image-glow" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="profile-image"
                  />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-universe">{member.universe}</p>
                <div className="icon-container">{member.icon}</div>
                <div className="social-links">
                  <a
                    href={`https://twitter.com/${member.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div className="alt-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.altRole}</p>
                <p className="member-universe">{member.altUniverse}</p>
                <div className="icon-container">{member.icon}</div>
                <div className="social-links">
                  <a
                    href={`https://twitter.com/${member.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
