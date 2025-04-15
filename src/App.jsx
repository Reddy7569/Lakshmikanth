import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <section id="about" className='section'><About /></section>
      <section id="resume" className='section'><Resume /></section>
      <section id="project" className='section'><Project /></section>
      <section id="contact" className='section'><Contact /></section>
    </div>
  );
}


