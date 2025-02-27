import React, { useState } from 'react';
import "./feq.css"
import { ChevronDown, BookOpen } from 'lucide-react';

const faqs = [
  {
    question: "What is ZION?",
    answer: "Zion is an annual technical festival organized by Dr. D.Y. Patil Institute of Technology, Pimpri, Pune, that aims to provide a platform for students to showcase their technical skills and creativity."
  },
  {
    question: "What is the edition of ZION?",
    answer: "After 17 successful editions, it is the 18 edition of ZION Tech Fest."
  },
  {
    question: "How to Reach?",
    answer: "Nearest Metro Station: Sant Tukaram nagar, Nearest Bus Stop: YCM, Nearest Bus Station: Vallabhnagar Bus Station, Nearest Airport: Viman Nagar. Also in the footer of this page we have provided map of way to our college."
  },
  {
    question: "How much will it cost?",
    answer: "Event registration prices vary. But we assure you that it will a very good investment from the prespective of experience."
  },
  {
    question: "What if I don't know how to code?",
    answer: "No worries, there is a wide range of events other than coding that will be taking place in ZION Tech Fest."
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
          <span className="h5 mb-0">{question}</span>
        </div>
        <ChevronDown
          className={`chevron-icon flex-shrink-0 ms-3 ${isOpen ? 'rotate' : ''}`}
          size={24}
          color='#8c00ff'
        />
      </button>
      <div className={`faq-answer ${isOpen ? 'show' : 'hide'}`}>
        <div className="p-4">
          <p className="mb-0 lh-lg">
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
          
          <h1 className="page-title display-4 mb-4 text-glow">
            The Cosmic Library
          </h1>
          <p className="subtitle mx-auto" style={{ maxWidth: '700px' }}>
            Explore the knowledge of the multiverse through our collection of answers
          </p>
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