import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Style/Projects.css'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import projectsData from '../Data/ProjectsData';

const ProjectsLibrary = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [current, setCurrent] = useState(0);
  const projectsLength = projectsData.length;

  const nextSlide = () => {
    setCurrent(current === projectsLength - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? projectsLength - 1 : current - 1);
  }

  return (
    <section id="projects" className='project-library'>
      <div className="projects-title" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects-bar"></div>
      </div>
      <div className="slider" data-aos="fade-up" data-aos-duration="2600">
      <FaArrowCircleLeft className="left-arrow"  onClick={ nextSlide }/>
      <FaArrowCircleRight className="right-arrow" onClick={ prevSlide } />
    { projectsData.map(({ name, description, skills, repoLink, video }, index) => (
      <div className={ index === current ? 'slide active' : 'slide'} key={ name }>
        { index === current && (
        <div className="project-box" key={ index }>
          <video className="project-image" controls>
            <source src={ video } type="video/mp4"/>
          </video>
        <div className="project-infos">
          <h2 className="project-name">{ name }</h2>
          <hr />
          <p className="project-description">
            { description }
          </p>
          <div className="skills-container">
      { skills.map((skill) => <button className="project-skill" key={skill} > {skill} </button> ) }
          </div>
        <hr className="hr-link"/>
          <span className="repo-link"> Link to repo: 👉 <a href={repoLink} target="_blank" rel="noreferrer">{ repoLink }</a></span>
        </div>
      </div>
        )}
      </div>
      ))}
      </div>
  </section>
  )
}

export default ProjectsLibrary;