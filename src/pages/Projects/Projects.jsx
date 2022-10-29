import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import RoleFilterSelect from '../../components/RoleFilterSelect';
import StackFIlterInput from '../../components/StackFIlterInput';
import './Projects.css';
import ProjectModal from '../../components/ProjectModal';
import ProjectsData from '../../api/ProjectsData';
import Context from '../../context/Context';

export default function Projects() {
  const {
    setOpenProjectModal, setProject, roleFilter, stack,
  } = React.useContext(Context);

  const handleOpenProject = (project) => {
    setOpenProjectModal(true);
    setProject(project);
  };

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
            {
              ProjectsData.map((projectData) => {
                if (stack) {
                  return projectData.stacks.some((item) => item.toLowerCase()
                    .includes(stack.toLowerCase()))
                  && projectData.roles.includes(roleFilter)
                  && (
                    <div className="project-card" key={projectData.name}>
                      <img
                        className="project-image"
                        alt="wonderful cities project"
                        src={projectData.image}
                      />
                      <h2 className="project-name">{projectData.name}</h2>
                      <div className="stacks-container">
                        {
                        projectData.stacks.map((projectStack) => (<span className="stack" key={projectStack}>{projectStack}</span>))
                      }
                      </div>
                      <button className="button-see-more" type="button" onClick={() => handleOpenProject(projectData)}>Ver mais</button>
                    </div>
                  );
                }
                return projectData.roles.includes(roleFilter)
                && (
                  <div className="project-card" key={projectData.name}>
                    <img
                      className="project-image"
                      alt="wonderful cities project"
                      src={projectData.image}
                    />
                    <h2 className="project-name">{projectData.name}</h2>
                    <div className="stacks-container">
                      {
                      projectData.stacks.map((projectStack) => (<span className="stack" key={projectStack}>{projectStack}</span>))
                    }
                    </div>
                    <button className="button-see-more" type="button" onClick={() => handleOpenProject(projectData)}>Ver mais</button>
                  </div>
                );
              })
            }
          </div>
        </div>
      </main>
      <ProjectModal />
      <ContactModal />
    </div>
  );
}
