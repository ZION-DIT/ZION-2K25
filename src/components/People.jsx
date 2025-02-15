import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";

const People = ()=>{
    const teamMembers = [
        {
          id: 1,
          name: "Alex Johnson",
          role: "Festival Director",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
          social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
          },
        },
        {
          id: 2,
          name: "Sarah Chen",
          role: "Technical Head",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
          social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
          },
        },
        {
          id: 3,
          name: "Alex Johnson",
          role: "Festival Director",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
          social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
          },
        },
        {
          id: 4,
          name: "Sarah Chen",
          role: "Technical Head",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
          social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
          },
        },
        {
          id: 5,
          name: "Alex Johnson",
          role: "Festival Director",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
          social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
          },
        },
        {
          id: 6,
          name: "Sarah Chen",
          role: "Technical Head",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
          social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
          },
        },
      ];
    return(
        <section id="team" className="py-20  text-light">
        <div className="container text-center">
          <h2 className="text-center page-title display-4 mb-4 text-light">Our Event Keepers
          </h2>
          <div className="row justify-content-center">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-4 mb-4 card-fluid">
                <div className="card bg-dark text-light">
                  <img src={member.image} alt={member.name} className="card-img-top img-fluid" style={{ height: "250px", objectFit: "cover" }}/>
                  <div className="card-body bg-opacity-50">
                    <h3 className="card-title text-light fs-4">{member.name}</h3>
                    <p className="card-text text-secondary">{member.role}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} color="violet"/>
                      </a>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} color="blue"/>
                      </a>
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github size={24} color="white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )

}

export default People