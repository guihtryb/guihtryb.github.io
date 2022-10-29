import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import RoleFilterSelect from '../../components/RoleFilterSelect';
import StackFIlterInput from '../../components/StackFIlterInput';
import './Projects.css';
import wc from '../../images/project-wc.png';
import ProjectModal from '../../components/ProjectModal';

export default function Projects() {
  return (
    <div>
      <Header />
      <main className="projects-main-bg">
        <div className="projects-main-container">
          <div className="filters-container">
            <RoleFilterSelect />
            <StackFIlterInput />
          </div>
          <h1 className="projects-title">
            Projects
          </h1>
          <div className="projects-container">
            <div className="project-card">
              <img
                className="project-image"
                alt="wonderful cities project"
                src={wc}
              />
              <h2 className="project-name">Wonderful Cities</h2>
              <div className="stacks-container">
                <span className="stack">ReactJS</span>
                <span className="stack">CSS</span>
                <span className="stack">Cypress</span>
                <span className="stack">RTL</span>
              </div>
              <button className="button-see-more" type="button">Ver mais</button>
            </div>
            <div className="project-card">
              <img
                className="project-image"
                alt="wonderful cities project"
                src={wc}
              />
              <h2 className="project-name">Wonderful Cities</h2>
              <div className="stacks-container">
                <span className="stack">ReactJS</span>
                <span className="stack">CSS</span>
                <span className="stack">Cypress</span>
                <span className="stack">RTL</span>
              </div>
              <button className="button-see-more" type="button">Ver mais</button>
            </div>
            <div className="project-card">
              <img
                className="project-image"
                alt="wonderful cities project"
                src={wc}
              />
              <h2 className="project-name">Wonderful Cities</h2>
              <div className="stacks-container">
                <span className="stack">ReactJS</span>
                <span className="stack">CSS</span>
                <span className="stack">Cypress</span>
                <span className="stack">RTL</span>
              </div>
              <button className="button-see-more" type="button">Ver mais</button>
            </div>
            <div className="project-card">
              <img
                className="project-image"
                alt="wonderful cities project"
                src={wc}
              />
              <h2 className="project-name">Wonderful Cities</h2>
              <div className="stacks-container">
                <span className="stack">ReactJS</span>
                <span className="stack">CSS</span>
                <span className="stack">Cypress</span>
                <span className="stack">RTL</span>
              </div>
              <button className="button-see-more" type="button">Ver mais</button>
            </div>
            <div className="project-card">
              <img
                className="project-image"
                alt="wonderful cities project"
                src={wc}
              />
              <h2 className="project-name">Wonderful Cities</h2>
              <div className="stacks-container">
                <span className="stack">ReactJS</span>
                <span className="stack">CSS</span>
                <span className="stack">Cypress</span>
                <span className="stack">RTL</span>
              </div>
              <button className="button-see-more" type="button">Ver mais</button>
            </div>
            <div className="project-card">
              <img
                className="project-image"
                alt="wonderful cities project"
                src={wc}
              />
              <h2 className="project-name">Wonderful Cities</h2>
              <div className="stacks-container">
                <span className="stack">ReactJS</span>
                <span className="stack">CSS</span>
                <span className="stack">Cypress</span>
                <span className="stack">RTL</span>
              </div>
              <button className="button-see-more" type="button">Ver mais</button>
            </div>
          </div>
        </div>
      </main>
      <ProjectModal project />
      <ContactModal />
    </div>
  );
}
