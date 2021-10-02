import React, { useEffect } from 'react'
import '../Style/Main.css'
import ProjectsLibrary from './ProjectsLibrary';
import Profile from '../Images/Profile.jpeg';
import Aos from 'aos';
import { Button} from 'react-bootstrap';


function scrollToAbout() {
  window.scrollTo(0, 940);
}

function AboutIntroductionSection() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <section className="about-section">
      <div className="shadow"></div>
      <article >
        <div className="content">
          <h1 data-aos="fade-right">
            Be Welcome!👋
          </h1>
          <p className="description" data-aos="fade-left"> 
            <span className="name">Guilherme Viana</span> Here. 
            <br/>
            I'm a Full-Stack Web Developer,
            <br/>
            studying nowadays at <strong><a className="trybe-link" href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe!</a></strong>
          </p>
          <div className="div-box"></div>
          <div className="find-out-box" data-aos="fade-up">
            <Button className="find-out-btn" onClick={ scrollToAbout }> Find out more </Button>
          </div>
        </div> 
      </article>
      <img src={ Profile } data-aos="fade-left" alt="profile" className="profile" />
    </section>
  );
}

export function Main() {
    return (
      <main className="main-content">
        { AboutIntroductionSection() }
        <ProjectsLibrary />
      </main>
    );
  };

