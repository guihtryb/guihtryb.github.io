import React from 'react'
import '../Style/Main.css'
import Profile from '../Images/Profile.jpeg';
import { Button } from 'react-bootstrap';
import About from './About';


function AboutIntroductionSection() {
  return (
    <section className="about-section">
        <div className="content">
          <h1 id="intro" data-aos="fade-right">
            Be Welcome!👋
          </h1>
          <p className="description" data-aos="fade-left"> 
            <span className="name">Guilherme Viana</span> Here. 
            <br/>
            I'm a Full-Stack Web Developer,
            <br/>
            studying nowadays at <strong><a className="trybe-link" href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe!</a></strong>
          </p>
          <img src={ Profile } data-aos="fade-left" alt="profile" className="profile" />
          <div className="find-out-box" data-aos="fade-up">
            <a href="#about"><Button className="find-out-btn"> Find out more </Button></a>
          </div>
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

