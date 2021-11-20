import React from 'react'
import '../Style/Main.css'
import Profile from '../Images/Profile.jpeg';
import { Button } from 'react-bootstrap';
import About from './About';


function AboutIntroductionSection() {
  return (
    <section className="about-section">
        <div className="content">
          <div className="welcome-content">
          <h1 data-aos="fade-left">
            Be Welcome!👋
          </h1>
        <div className="welcome-bar" data-aos="fade-right"></div>
          </div>
          <div className="apresentation">
          <p className="description" data-aos="fade-left"> 
            <span className="name">Guilherme Viana</span> Here. 
            <br/>
            I'm a Full-Stack Web Developer | <strong><a className="trybe-link" href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe!</a></strong>
          </p>
          <img src={ Profile } data-aos="fade-left" alt="profile" className="profile" />
          </div>
            <a href="#about"><Button className="find-out-btn"> Find out more </Button></a>
        </div> 
      <div className="shadow"></div>
    </section>
  );
}

export function Main() {
    return (
      <main className="main-content">
        { AboutIntroductionSection() }
        <About />
      </main>
    );
  };

