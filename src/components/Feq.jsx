import React, { useState } from 'react';
import "./feq.css"
import { ChevronDown, BookOpen } from 'lucide-react';

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We offer a comprehensive suite of digital solutions including web development, mobile app development, cloud services, and digital transformation consulting. Our team specializes in creating custom solutions tailored to your specific business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while more complex applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based services. Each project is unique, and we'll work with you to find the most cost-effective solution that meets your needs and budget."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and technical support. We can customize a support plan that fits your specific needs."
  },
  {
    question: "What technologies do you use?",
    answer: "We stay current with the latest technologies and choose the best tools for each project. Our tech stack includes React, Node.js, Python, AWS, and many other modern technologies. We'll recommend the most appropriate technology based on your project requirements."
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
          <BookOpen className="me-3" size={20} color="#4dabf7" />
          <span className="h5 mb-0">{question}</span>
        </div>
        <ChevronDown
          className={`chevron-icon flex-shrink-0 ms-3 ${isOpen ? 'rotate' : ''}`}
          size={24}
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
          <h1 className="page-title display-4 mb-4">
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