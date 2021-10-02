import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // renderProjetcs() {
    // projectsData.map((project) => (
    //   <section>
    //     <h3>{ project.name }</h3>
    //     <img className="project-gif" src={project.gif} alt={`project ${ project.name } gif`}/>
    //     <span>{project.description}</span>
    //     <div className="tags">
    //       { project.tags.map((tag) => (
    //         <div>{ tag }</div>
    //       ))}
    //     </div>
    //   </section>
    // ))
  // }
    return (
      <section className='project-library'>
        <h2 className="skills-title" data-aos="fade-up">JavaScript + HTML + CSS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <h2 className="skills-title" data-aos="fade-up">ReactJS</h2>
        <div className="div-box"></div>
      </section>
    )
  }

export default Projects;