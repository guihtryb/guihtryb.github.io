import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Style/Projects.css'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import projectsData from '../Data/ProjectsData';

export default function ProjectsLibrary() {
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
    <section id="projects" className='projects-section'>
      <div className="projects-container">
        <div className="projects-title-container" data-aos="fade-up">
          <h2>Projects</h2>
          <div className="projects-bar"></div>
        </div>
        <div className="projects-slider" data-aos="fade-up" data-aos-duration="2600">
          <div className="arrows-container">
            <FaArrowCircleLeft className="left-arrow"  onClick={ nextSlide }/>
            <FaArrowCircleRight className="right-arrow" onClick={ prevSlide } />
          </div>
          { projectsData.map(({ name, description, skills, repoLink, video }, index) => (
            <div className={ index === current ? 'slide active' : 'slide'} key={ name }>
          { index === current && (
          <div className="projects-box" key={ index }>
            <div className="projects-video-and-name-container">
              <video className="projects-video" controls>
              <source src={ video } type="video/mp4"/>
              </video>
                <h2 className="projects-name">{ name }</h2>
            </div>
            <div className="projects-info">
            <p className="projects-description">
            { description }
            </p>
            <div className="projects-skills-container">
            { skills.map((skill) => <button className="project-skill" key={skill} > {skill} </button> ) }
            </div>
            </div>
          </div>
          )}
          </div>
          ))} 
        </div>
      </div>
    </section>
  )
}
