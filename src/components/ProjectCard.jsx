import PropTypes from 'prop-types';
import React from 'react';
import SeeMoreButton from './SeeMoreButton';

export default function ProjectCard({ projectData }) {
  return (
    <div className="project-card">
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
      <SeeMoreButton projectData={projectData} />
    </div>
  );
}

ProjectCard.propTypes = {
  projectData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
