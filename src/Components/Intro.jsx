import React from 'react'
import '../Style/Main.css'
import Profile from '../Images/Profile.jpeg';
import { Button } from 'react-bootstrap';


export default function Intro() {
  return (
    <section className="initial-section">
        <div className="initial-container">
          <div className="initial-welcome">
          <h1 data-aos="fade-left">
            Be Welcome!👋
          </h1>
        <div className="welcome-bar" data-aos="fade-right"></div>
          </div>
          <div className="initial-description" data-aos="fade-left">
          <p> 
            <span className="name">Guilherme Viana</span> Here.<br/>
          </p>
          <p>
            Front-End Web Developer,
          </p>
          <p>
            Studying to be Full-Stack | <strong><a className="trybe-link" href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe!</a></strong>
          </p>
          <img src={ Profile } data-aos="fade-left" alt="profile" className="profile" />
          </div>
            <a href="#about"><Button className="find-out-btn"> Find out more </Button></a>
        </div> 
      <div className="shadow"></div>
    </section>
  );
}
