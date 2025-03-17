import React, { useState } from 'react';
import "./feq.css"
import { ChevronDown, BookOpen } from 'lucide-react';

const faqs = [
  {
    question: "What is ZION?",
    answer: "ZION is the annual technical festival of Dr. D.Y. Patil Institute of Technology, Pimpri, Pune, offering students a platform to showcase their technical skills, creativity, and problem-solving abilities. Featuring coding challenges, robotics contests, hackathons, paper presentations, and tech quizzes, it fosters innovation, collaboration, and hands-on experience. "
  },
  {
    question: "What does this edition of ZION provides?",
    answer: "After 18 successful editions, the 19th edition of ZION Tech Fest continues to provide a dynamic platform for students to showcase their technical skills, creativity, and problem-solving abilities. With coding challenges, robotics contests, hackathons, paper presentations, and tech quizzes."
  },
  {
    question: "How to Reach?",
    answer: "Nearest Metro Station: Sant Tukaram nagar, Nearest Bus Stop: YCM, Nearest Bus Stand: Vallabhnagar Bus Stand. Nearest Railway Station: Kasarwadi."
  },
  {
    question: "How much will it cost?",
    answer: "Event registration prices vary. But we assure you that it will a very good investment from the prespective of experience."
  },
  {
    question: "What if I don't know how to code?",
    answer: "No worries! ZION Tech Fest is not just about coding—it offers a diverse range of events catering to various technical and non-technical interests. From robotics competitions, circuit designing to paper presentations, business strategy games, and mechanical design challenges, there’s something for everyone. Additionally, fun-filled activities, quizzes, and brainstorming sessions ensure that participants from all backgrounds can engage, learn, and compete. Whether you're a programmer, an innovator, or just passionate about technology, ZION provides the perfect platform to explore, experiment, and excel."
  },
  {
    question: "What is total prize pool of ZION?",
    answer: "The total prize pool of ZION Tech Fest is INR 100K+, making it one of the most rewarding technical festivals! Stay tuned for exciting rewards, cash prizes, and exclusive goodies across various competitions. Whether you're competing in coding challenges, robotics contests, hackathons, or technical quizzes, there are plenty of opportunities to win big and showcase your skills. Don't miss out on the chance to earn recognition and amazing prizes! "
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-card floating-shelf">
      <button
        className="faq-button d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center">
          <BookOpen className="me-3" size={20} color="#8c00ff" />
          <span className="h5 mb-0 syncopate-bold-q">{question}</span>
        </div>
        <ChevronDown
          className={`chevron-icon flex-shrink-0 ms-3 ${isOpen ? 'rotate' : ''}`}
          size={24}
          color='#8c00ff'
        />
      </button>
      <div className={`faq-answer ${isOpen ? 'show' : 'hide'}`}>
        <div className="p-4">
          <p className="mb-0 lh-lg saira">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (

    <div className="space-library d-flex align-items-center py-5">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      <div className="glow glow-3"></div>
      <div className="container py-5 position-relative">
        <div className="text-center mb-5">
          
          <h1 className="page-title display-4 mb-4 text-glow audiowide-regular">
            The Cosmic Library
          </h1>
          
        </div>
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;