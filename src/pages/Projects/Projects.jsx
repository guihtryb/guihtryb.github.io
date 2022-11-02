import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import RoleFilterSelect from '../../components/RoleFilterSelect';
import StackFIlterInput from '../../components/StackFIlterInput';
import './Projects.css';
import ProjectModal from '../../components/ProjectModal';
import ProjectsData from '../../api/ProjectsData';
import Context from '../../context/Context';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const { roleFilter, stack } = React.useContext(Context);

  const handleFilters = (data) => {
    if (stack) {
      return data.stacks.some((item) => item.toLowerCase()
        .includes(stack.toLowerCase()))
      && data.roles.includes(roleFilter)
      && (<ProjectCard projectData={data} key={data.name} />);
    }
    return data.roles.includes(roleFilter)
    && (<ProjectCard projectData={data} key={data.name} />);
  };

  return (
    <div>
      <Header />
      <main className="projects-main-bg">
        <div className="img-bg" alt="background decoration" />
        <div className="projects-main-container">
          <div className="filters-container">
            <RoleFilterSelect />
            <StackFIlterInput />
          </div>
          <h1 className="projects-title">
            Projetos
          </h1>
          <div className="projects-container">
            {
              ProjectsData.map(handleFilters)
            }
          </div>
        </div>
      </main>
      <ProjectModal />
      <ContactModal />
    </div>
  );
}
