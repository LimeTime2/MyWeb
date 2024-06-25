import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/navbar'
import Education from './Components/Education/education'
import Skills from './Components/Skill/skill';
import Timeline from './Components/Timeline/timeline';
import ContactForm from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">  
        <Education />
        <Skills />
        <Timeline />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App
