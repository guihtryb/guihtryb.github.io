import PropTypes from 'prop-types';
import React from 'react';
import Context from '../context/Context';

export default function SeeMoreButton({ projectData }) {
  const { setOpenProjectModal, setProject } = React.useContext(Context);

  const handleOpenProject = (project) => {
    setOpenProjectModal(true);
    setProject(project);
  };

  return (
    <button
      className="button-see-more"
      type="button"
      onClick={() => handleOpenProject(projectData)}
    >
      Ver mais
    </button>
  );
}

SeeMoreButton.propTypes = {
  projectData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
