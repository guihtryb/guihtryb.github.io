import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RoleItem({ name }) {
  return (
    <li>
      <Link to="/projetos">
        { name }
      </Link>
    </li>
  );
}

RoleItem.propTypes = {
  name: PropTypes.string.isRequired,
};
