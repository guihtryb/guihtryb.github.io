import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

export default function SkillCard({ name, icon }) {
  const { setStack } = React.useContext(Context);

  return (
    <Link to="/portfolio/projetos" onClick={() => setStack(name)}>
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
