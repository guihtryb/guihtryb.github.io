import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';

export default function RoleItem({ name, roleWeb }) {
  const { setRoleFilter } = React.useContext(Context);

  return (
    <li>
      <Link to="/projetos" onClick={() => setRoleFilter(roleWeb)}>
        { name }
      </Link>
    </li>
  );
}

RoleItem.propTypes = {
  name: PropTypes.string.isRequired,
  roleWeb: PropTypes.string,
};

RoleItem.defaultProps = {
  roleWeb: 'Front-End',
};
