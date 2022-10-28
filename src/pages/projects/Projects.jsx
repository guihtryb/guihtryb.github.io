import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import RoleFilterSelect from '../../components/RoleFilterSelect';
import StackFIlterInput from '../../components/StackFIlterInput';
import './Projects.css';

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
          <div className="projects-container">
            <h1>
              Projects
            </h1>
          </div>
        </div>
      </main>
      <ContactModal />
    </div>
  );
}
