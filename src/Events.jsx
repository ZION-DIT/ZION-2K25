import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";
import "./Events.css";
import Navbar from "./Navbar";

const eventsData = [
  {
    id: 1,
    title: "Coding Relay",
    image: "https://cdn.pixabay.com/photo/2020/03/05/16/44/engineer-4904884_640.jpg",
    date: "28 March 2025",
    location: "",
    heads: ["Ruchi Barne (9699380787)", "Soham Sahasrabudhe (7083921771)"],
    description: [
      "Get ready for a high-stakes coding competition with three intense rounds!",
      "Round 1 - HackIQ: A rapid-fire quiz on CS fundamentals, OS, DBMS, networking, and algorithms.",
      "Round 2 - Bug Busters: Debug and fix flawed code, circuits, and logical errors.",
      "Round 3- DSA Showdown: Tackle complex coding challenges with optimal algorithms and data structures.",
    ],
    formLink: "https://forms.gle/dPszGHJhpMFcfqG37",
    fees: "Solo-60 Rs | Duo-100 Rs",
    teamsize: "1-2",
    prize: 7500
  },
  {
    id: 2,
    title: "Web Fusion",
    image: "https://cdn.pixabay.com/photo/2015/03/03/10/26/software-657188_640.jpg",
    date: "28 March 2025",
    location: "",
    heads: ["Rohit Lad"],
    description: [
      "Round 1 –Participants will be given a single topic and must develop a basic website using HTML, CSS, JavaScript (or any framework) with the help of ChatGPT for assistance.",
      "Time Limit: 60 minutes",
      "Top performers qualify for the final round!",
      "Round 2 – Finalists will receive three problem statements and must create a web-based solution using ChatGPT for assistance.",
      "Time Limit: 1 hour 45 minutes",
      "Evaluation Criteria: Innovation, functionality, UI/UX, and technical execution.",
    ],
    formLink: "https://forms.gle/9ZPpYoaeAtno9r3z8",
    fees: "Solo-60 Rs | Duo-100 Rs",
    teamsize: "1-2",
    prize: 6000
  },
  {
    id: 3,
    title: "Hash-It-Out",
    image: "https://plus.unsplash.com/premium_photo-1682141013747-5aed8665c154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhY2thdGhvbnxlbnwwfHwwfHx8MA%3D%3D",
    date: "27 March 2025",
    location: "9000",
    heads: ["Gayatri Mahajan", "Siddhesh Rane"],
    description: [
      "Round 1: Pitching & Idea Development (2 Hours).",
      "Teams will receive a problem statement on the spot.",
      "30 minutes to brainstorm and create a 5-slide PPT.",
      "Pitch to judges and earn points.",
      "One team will be selected as the Best Pitch winner.",
      "Round 2: Coding & Development (5 Hours).",
      "Develop a working prototype based on your idea.",
      "Round 1 points will be added to the final score.",
      "Domains:",
      "Web Development.",
      "Machine Learning.",
      "Android Development."
    ],
    formLink: "https://forms.gle/7NZX8SiG5gRMCt9M6",
    fees: "150Rs",
    teamsize: "2-4",
    prize: 7500
  },
  {
    id: 4,
    title: "Tech Feud",
    image: "https://media.istockphoto.com/id/185108212/photo/hit-the-buzzer.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFVKa1n5Q5-jRONoON_a5Lb0z0kOHPPR2NVUfAYbz4c=",
    date: "27 March 2025",
    location: "",
    heads: ["Shraddha Patil", "Ayush Auti"],
    description: [
      "Tech Feud is a 3-round Technical Quiz inspired by the popular TV show 'Family Feud' but with technical questions.",
      "Round 1 (Qualification): All registered teams answer five questions. Teams with the highest scores advance.",
      "Round 2 (Semi-finals): Qualified teams face another set of five questions with increased difficulty and complexity.",
      "Round 3 (Finals): The top two teams from the semi-finals compete with ten questions. The team with the highest score wins 'Tech Feud'.",
    ],
    formLink: "https://forms.gle/ZAYAkPaLL8LrRsLj9",
    fees: "99Rs",
    teamsize: "3-5",
    prize: 7500
  },
  {
    id: 5,
    title: "Cad Xplore",
    image: "https://cdn.pixabay.com/photo/2023/11/07/13/06/plane-8372334_640.jpg",
    date: "28 March 2025",
    location: "",
    heads: ["Rushikesh Patil", "Ishwari Unde"],
    description: [
      "Showcase your expertise in 𝐒𝐨𝐥𝐢𝐝𝐖𝐨𝐫𝐤𝐬 or 𝐂𝐀𝐓𝐈𝐀 and compete for the title!",
      "Competition Rounds:",
      "Round 1: 3D Modeling Challenge (Elimination)",
      "Recreate a given 3D object using CAD software.",
      "Judging: accuracy, CAD features, time management.",
      "Final Round: Assembly Modeling Challenge",
      "Assemble pre-designed 3D parts using constraints and mates.",
      "Judging: assembly accuracy, constraints usage, motion feasibility."
    ],
    formLink: "https://forms.gle/Qp8Um9udf894mLa96",
    fees: "60Rs",
    teamsize: "Solo",
    prize: 7500
  },
  {
    id: 6,
    title: "Tinker X",
    image: "https://cdn.pixabay.com/photo/2016/03/29/16/49/electricity-1288717_640.jpg",
    date: "27 March 2025",
    location: "Los Angeles, CA",
    heads: ["Diya Darvekar", "Pavankumar Nimbolkar"],
    description: [
      "Round 1 - Quiz, 15 minutes, 3 questions",
      "Covers basic electronic components",
      "Includes circuit logics and designs",
      "Round 2 - Complete the Circuit",
      "Focuses on circuit understanding",
      "Involves identification and correction",
      "Identify and add missing pieces or parts of the circuit",
      "Round 3 - Problem Statement",
      "Requires problem-solving of a given circuit-based problem",
      "Solve the given circuit-related problem"
    ],
    formLink: "https://forms.gle/ns7gE5ckGfmrudq57",
    fees: "Solo-60Rs | Duo-100Rs",
    teamsize: "1-2",
    prize: 6000
  },
  {
    id: 7,
    title: "Stellar Chase",
    image: "https://cdn.pixabay.com/photo/2020/03/02/16/19/vintage-4896141_1280.jpg",
    date: "27, 28 March 2025",
    location: "Silicon Valley, CA",
    heads: ["Soham Ingole", "Bhumi Manjule"],
    description: [
      "Round 1: The Star Hunt",
      "Teams must find 5 stars of different colors within 20 minutes and Top 20 teams qualify for the next round.",
      "Round 2: Run for Survival",
      "20 teams battle with 1 Crown & 4 Attackers each.",
      "The battleground shrinks over time and Top 10 teams advance to the Final Hunt.",
      "Round 3: The Treasure Hunt",
      "Grand Finale – a hunt for hidden treasures!",
      "Teams solve clues, puzzles, and obstacles.",
      "First to unlock the treasure wins the Stellar Chase Champion Title."
    ],
    formLink: "https://forms.gle/AhHdefsiiaKJMzVt9",
    fees: "200Rs",
    teamsize: "5",
    prize: 7500
  },
  {
    id: 8,
    title: "King of Nifty",
    image: "https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hhcmUlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D",
    date: "27 March 2025",
    location: "New York, NY",
    heads: ["Sarthak Bhat", "Sanskar Modi"],
    description: [
      "King of Nifty is a stock market simulation event where participants trade using virtual money.",
      "Analyze market trends, make strategic investments, and maximize portfolio value within the time frame.",
      "The participant with the highest returns is crowned the 'King of Nifty.'",
      "This competition tests financial acumen, risk management, and real-time decision-making, making it perfect for aspiring traders."
    ],
    formLink: "https://forms.gle/NpSWEK9pNJuPWjrYA",
    fees: "Solo-80Rs | Duo-120Rs",
    teamsize: "1-2",
    prize: 7500
  },
  {
    id: 9,
    title: "Bridge Mania",
    image: "https://cdn.pixabay.com/photo/2018/08/03/11/48/frankfurt-3581739_640.jpg",
    date: "28 March 2025",
    location: "Silicon Valley, CA",
    heads: ["Aditi Rokade (+91 91560 96531)", "Shrikant More"],
    description: [
      "Design Competition – Bridge Mania!",
      "Challenge: Participants will compete to create the most efficient and aesthetically pleasing bridge design using specified materials, following given guidelines and within the time frame.",
      "Don't miss this opportunity to unleash your creativity, test your skills, and compete for recognition in the exciting realm of bridge engineering!",
      "Register now and be a part of Bridge Mania!"
    ],
    formLink: "https://forms.gle/LCYs62eC2mKhyFxj9",
    fees: "Duo-100 | Squad-200Rs",
    teamsize: "2 or 4",
    prize: 6000
  },
  {
    id: 10,
    title: "Clutch & Conquer",
    image: "https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_640.jpg",
    date: "27, 28 March 2025",
    location: "Silicon Valley, CA",
    heads: ["Pratik Pagagre", "Rudr Sinhingle"],
    description: [
      "Are you ready to drop in, frag out, and dominate?",
      "This is your chance to showcase your skills in BGMI & Valorant and claim ultimate victory!",
      "Two Days. Two Games. One Champion.",
      "Challenge:",
      "BGMI – Squad Battles",
      "Valorant – Team-Based Tactical Warfare ",
      "Compete. Clutch. Conquer."
    ],
    formLink: "https://forms.gle/b7MzP3dA8Pe7uaiw9",
    fees: "BGMI-200Rs | Valorant-250Rs",
    teamsize: "BGMI-4(Squad) | Valorant-5(Team)",
    prize: 8000
  },
  {
    id: 11,
    title: "Arms of Steel",
    image: "https://cdn.pixabay.com/photo/2014/12/14/16/05/arm-wrestling-567950_640.jpg",
    date: "28 March 2025",
    location: "New York, NY",
    heads: ["Pankaj Sutar", "Ritesh Jadhav"],
    description: [
      "Weight Category Battles:",
      "Participants are divided into four weight categories: 50-60kg, 60-70kg, 70-80kg and 80+,  competing within their respective groups."
    ],
    formLink: "https://forms.gle/4ieb7XG8hA9G66Eg8",
    fees: "60Rs",
    teamsize: "Solo",
    prize: 6000
  },
  {
    id: 12,
    title: "Xperience",
    image: "https://cdn.pixabay.com/photo/2022/10/04/21/25/xr-7499160_640.jpg",
    date: "27, 28, 29 March 2025",
    location: "Los Angeles, CA",
    heads: ["Sarvadnya Walzade", "Sandipani Morey"],
    description: [
      "F1 – Racing Simulator Challenge.",
      "Feel the adrenaline rush as you take the driver's seat in our high-speed Racing Simulator!",
      "Experience realistic F1 racing physics & test your driving skills.",
      "HOVR – Virtual Reality Experience",
      "Step into another dimension with our VR World Experience!",
      "Explore immersive virtual landscapes and enjoy next-level interactions."
    ],
    formLink: "https://forms.gle/Y5JenmbKKwAZxjfLA",
    fees: "F1-60Rs | HOVR-60Rs | Combo-100Rs",
    teamsize: "Solo"
  },
  {
    id: 13,
    title: "Circuit Hustle",
    image: "https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNpcmN1aXR8ZW58MHx8MHx8fDA%3D",
    date: "28 March 2025",
    location: "Los Angeles, CA",
    heads: ["Ramal Shelke", "Astha Naik"],
    description: [
      "What to Expect:",
      "Hands-on circuit-building challenges",
      "Test your skills against the best minds in electrical engineering",
      "Cash prizes and Certificates for the winning teams!",
      "How It Works:",
      "Form a team and register for the competition ",
      "Compete against other teams in exciting circuit-based tasks ",
      "Let your creativity shine and build circuits like never before! "
    ],
    formLink: "https://forms.gle/CdLKjHBgnmR6Y5bN8",
    fees: "100Rs",
    teamsize: "2-3",
    prize: 6000
  },
  {
    id: 14,
    title: "Design Blitz",
    image: "https://damassets.autodesk.net/content/dam/autodesk/www/products/fusion-360/fy24/overview/teams-1-year-thumb-788x444-v3.jpg",
    date: "28 March 2025",
    location: "Los Angeles, CA",
    heads: ["Drup Irle", "Rushikesh Swami"],
    description: [
      "Round 1 – 2D Sketching Challenge",
      "Participants will be given a problem statement and must create a precise 2D sketch using Fusion 360 in 45 minutes.",
      "Top participants move to the next round.",
      "Round 2 – 3D Modeling Challenge",
      "Qualified participants will make a 3D model, showcasing creativity and technical skills in 45 minutes.",
      "Judging Criteria: Innovation & Creativity, Technical Execution, Aesthetics & Detailing, Presentation & Explanation"
    ],
    formLink: "https://forms.gle/gQ3jhdjxDsGKnAgX9",
    fees: "60Rs",
    teamsize: "Solo",
    prize: 6000
  },
  {
    id: 15,
    title: "Powerplay",
    image: "https://cdn.pixabay.com/photo/2023/12/12/09/26/cricket-8444899_640.jpg",
    date: "27 March 2025",
    location: "Los Angeles, CA",
    heads: ["Ashutosh Ranjan", "Irfa Arshad"],
    description: [
      "Round 1: Guess the Stat (Elimination)",
      "Teams guess the player, team, or match from given stats.",
      "Multiple-choice options available; answering without them earns extra points.",
      "Round 2: Stat Match-Up Challenge",
      "Teams match 5 cricket stats to the correct player, team, or tournament.",
      "Time limit: 90 seconds.",
      "Round 3: Draft Your Fantasy XI",
      "Build the best team within 100 credits to maximize player points.",
      "Pick 11 players from a given list of 30-40 within a 60-credit budget.",
      "Time: 15 minutes.",
      "Winner: Team with the highest total player points without exceeding 100 credits."
    ],
    formLink: "https://forms.gle/29NqiforPPL5nMiB9",
    fees: "100Rs",
    teamsize: "2-3",
    prize: 6000
  }
];

const Events = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isOverlayActive) {
      window.history.pushState({ modalOpen: true }, "");
    }

    const handleBackButton = (e) => {
      if (isOverlayActive) {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, [isOverlayActive]);

  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleExpand = (id) => {
    setExpandedEventId(id);
    setIsOverlayActive(true);
    document.body.style.overflow = "visible";
  };

  const handleClose = () => {
    setExpandedEventId(null);
    setIsOverlayActive(false);
    document.body.style.overflow = "";
    if (isOverlayActive) {
      navigate(location.pathname, { replace: true });
    }
  };

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return (
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p>{description}</p>;
  };

  return (
    <div>
      <video className="video-bg" autoPlay loop muted>
        <source src="/videos/teambg.webm" type="video/webm" />
      </video>
      <Navbar />

      {isOverlayActive && <div className="dark-overlay" onClick={handleClose}></div>}

      <div className="container py-5">
        <h2 className="text-center page-title display-4 mb-4 text-light audiowide-regular">
          Cosmic Events
        </h2>
        <div className="row g-4">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="col-md-6 col-lg-4"
              id={event.id}
              onClick={() => handleExpand(event.id)}
            >
              <div
                className={`card event-card glassmorph ${expandedEventId === event.id ? "expanded" : ""}`}
                style={{ backgroundImage: `url("${event.image}")`, backgroundSize: "cover", backgroundPosition: "center" }}

              >
                <div className="card-content">
                  <h5 className="card-title zen-dots-regular">{event.title}</h5>
                  <p className="card-text saira">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="card-text saira">
                    <strong>Location:</strong> Dr. D. Y. Patil Institute of Technology, Pimpri, Pune
                  </p>

                  {expandedEventId === event.id && (
                    <div className="expanded-content">
                      <p className="card-text saira">
                        <strong>Description:</strong> {renderDescription(event.description)}
                      </p>
                      <p className="card-text saira">
                        <strong>Event Heads:</strong> {event.heads.filter((head) => head !== "").join(", ") || "TBA"}
                        <br />
                        {event.prize && (
                          <>
                            <strong>Prize Pool:</strong> {event.prize} Rs
                            <br />
                          </>
                        )}
                        <strong>Team Size:</strong> {event.teamsize}
                        <br />
                        <strong>Fees:</strong> {event.fees}
                      </p>
                      <button className="close-btn" onClick={handleClose}>
                        ✕
                      </button>
                      <div className="card-btn syncopate-bold">
                        <a href={event.formLink} target="_blank" rel="noopener noreferrer">
                          <button>Register</button>
                        </a>
                      </div>
                    </div>
                  )}

                  {expandedEventId === null && (
                    <div className="card-btn syncopate-bold">
                      <button onClick={() => handleExpand(event.id)}>Explore</button>
                      <a
                        href={event.formLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!event.formLink) {
                            e.preventDefault();
                            alert("Registration will open soon");
                          }
                        }}
                      >
                        <button>Register</button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
