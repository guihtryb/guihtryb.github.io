import React from 'react';
import RoleItem from '../RoleItem/RoleItem';
import './RolesList.css';

export default function RolesList() {
  return (
    <ul className="list-roles">
      <RoleItem name="Front-End Developer" role-web="Front-End" />
      <RoleItem name="Full-Stack Web Development Student" roleWeb="Full-Stack" />
    </ul>

  );
}
