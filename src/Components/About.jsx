import React from 'react';
import '../Style/About.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const skills = [
  {
  stack: 'ReactJS',
  type: 'front-end',
  },
  {
  stack: 'RTL',
  type: 'front-end',
  },
  {
    stack: 'Redux',
    type: 'front-end',
  },
  {
    stack: 'JavaScript',
    type: 'front-end',
  },
  {
    stack: 'Jest',
    type: 'front-end',
  },
  {
    stack: 'HTML5',
    type: 'front-end',
  },
  {
    stack: 'CSS3',
    type: 'front-end',
  },
  {
    stack: 'Git & GitHub',
    type: '',
  },
  {
    stack: 'SQL',
    type: 'back-end',
  },
  {
    stack: 'Docker',
    type: 'back-end',
  },
];

export default function MoreAbout() {
  return (
    <section className="about-section" id="about">
        <div className="shadow-top"></div>
      <div className="about-container">
      <div className="about-title-container" data-aos="fade-right">
        <h2>About</h2>
        <div className="about-bar"></div>
        </div>
      <article className="about-content" data-aos="fade-right">
        I am a passionate person about learning new things and accept new challenges,
        which matches with what I consider to be one of my best qualities: the <strong> constant search </strong> for new technology content combined with <strong> immersion </strong> and <strong> practice</strong>.
      </article>
      <section className="skills-section">
      <div className="skills-title" data-aos="fade-right">
        <h2>Skills</h2>
        <div className="skills-bar"></div>
      </div>
      <div className="skills-container">
        { skills.map((skill) => <button className={`skill ${skill.type}`} key={skill.stack}> {skill.stack} </button> ) }
      </div>
      </section>
      <a href="#projects" className="skills-arrow-container">
        <div >
          <ArrowForwardIosIcon className="skills-arrow"/>
        </div>
      </a>
      </div>
      <div className="shadow"></div>
    </section>
  );
}
