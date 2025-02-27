import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Events.css";
import Navbar from "./Navbar";

const eventsData = [
  {
    id: 1,
    title: "",
    image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "March 15, 2024",
    location: "Silicon Valley, CA",
    description: "An innovative conference on emerging technologies.",
  },
  {
    id: 2,
    title: "AI & ML Hackathon",
    image: "https://plus.unsplash.com/premium_photo-1690303193720-38d825579eef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhY2thb258ZW58MHx8MHx8fDA%3D",
    date: "April 20, 2024",
    location: "New York, NY",
    description: "Compete in AI & ML challenges with top developers.",
  },
  {
    id: 3,
    title: "Startup Meetup",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnQlMjBtZWV0aW5nfGVufDB8fDB8fHww",
    date: "May 10, 2024",
    location: "Los Angeles, CA",
    description: "Network with startup founders and investors.",
  },
  {
    id: 4,
    title: "Tech Conference 2024",
    image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "March 15, 2024",
    location: "Silicon Valley, CA",
    description: "An innovative conference on emerging technologies.",
  },
  {
    id: 5,
    title: "AI & ML Hackathon",
    image: "https://plus.unsplash.com/premium_photo-1690303193720-38d825579eef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhY2thb258ZW58MHx8MHx8fDA%3D",
    date: "April 20, 2024",
    location: "New York, NY",
    description: "Compete in AI & ML challenges with top developers.",
  },
  {
    id: 6,
    title: "Startup Meetup",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnQlMjBtZWV0aW5nfGVufDB8fDB8fHww",
    date: "May 10, 2024",
    location: "Los Angeles, CA",
    description: "Network with startup founders and investors.",
  },
  {
    id: 7,
    title: "Tech Conference 2024",
    image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "March 15, 2024",
    location: "Silicon Valley, CA",
    description: "An innovative conference on emerging technologies.",
  },
  {
    id: 8,
    title: "AI & ML Hackathon",
    image: "https://plus.unsplash.com/premium_photo-1690303193720-38d825579eef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhY2thb258ZW58MHx8MHx8fDA%3D",
    date: "April 20, 2024",
    location: "New York, NY",
    description: "Compete in AI & ML challenges with top developers.",
  },
  {
    id: 9,
    title: "Startup Meetup",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnQlMjBtZWV0aW5nfGVufDB8fDB8fHww",
    date: "May 10, 2024",
    location: "Los Angeles, CA",
    description: "Network with startup founders and investors.",
  }
];

const Events = () => {
  const [flippedStates, setFlippedStates] = useState(
    eventsData.reduce((acc, event) => ({ ...acc, [event.id]: false }), {})
  );

  const handleFlip = (id) => {
    setFlippedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <video className="video-bg" autoPlay loop muted onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.5)}>
        <source src="https://cdn.pixabay.com/video/2019/07/08/25047-347958032_large.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center page-title display-4 mb-4 text-light">Cosmic Events</h2>
        <div className="row g-4">
          {eventsData.map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4 ">
              <ReactCardFlip isFlipped={flippedStates[event.id]} flipDirection="horizontal">
                {/* Front Side */}
                <div className="card event-card glassmorph" onClick={() => handleFlip(event.id)}>
                  <img src={event.image} alt={event.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text"><strong>Date:</strong> {event.date}</p>
                    <p className="card-text"><strong>Location:</strong> {event.location}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card event-card glassmorph back" onClick={() => handleFlip(event.id)}>
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <p className="card-text text-center">{event.description}</p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
