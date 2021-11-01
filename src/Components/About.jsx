import React from 'react';
import '../Style/About.css';
import { Button } from 'react-bootstrap';

const skills = ['ReactJS','RTL','Redux','JavaScript','Bootstrap','Jest','HTML5','CSS3','Git & GitHub'];

const About = () => {
  return (
    <section className="about-me-section">
        <div id="about"></div>
        <div className="about-title" data-aos="fade-up">
        <h2>About</h2>
        <div className="about-bar"></div>
        </div>
      <article className="about-me-content" data-aos="fade-up">
        I am a passionate person about learning new things and accept new challenges,
        which matches with what I consider to be one of my best qualities: the <strong> constant search </strong> for new technology content combined with <strong> immersion </strong> and <strong> practice</strong>.
      </article>
      <section className="skills-section">
      <div className="skills-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div className="skills-bar"></div>
      </div>
      <div className="skills-container">
        { skills.map((skill) => <button className="skill" key={skill} data-aos="fade-up" data-aos-duration="2600"> {skill} </button> ) }
      </div>
      <a href="#projects"><Button className="projects-btn" data-aos="fade-up" data-aos-duration="3200"> Projects </Button></a>
      </section>
    </section>
  );
}

export default About;
