import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SkillCard({ name, icon }) {
  return (
    <Link to="/projetos">
      <div className="skill-icon-bg">
        <img src={icon} alt={`${name} icon`} />
      </div>
      <h4>{name}</h4>
    </Link>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
