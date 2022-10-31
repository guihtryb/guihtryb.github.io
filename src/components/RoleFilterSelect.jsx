import React from 'react';
import Context from '../context/Context';

export default function RoleFilterSelect() {
  const { setRoleFilter, roleFilter } = React.useContext(Context);

  const roleFilters = ['All', 'Front-End', 'Back-End', 'Full-Stack'];
  return (
    <label htmlFor="role-filter" className="label-role-filter">
      {' '}
      Selecione uma categoria:
      <select
        id="role-filter"
        className="select-role-filter input"
        value={roleFilter}
        onChange={({ target }) => setRoleFilter(target.value)}
      >
        {
          roleFilters.map((role) => (
            <option key={role}>
              {role}
            </option>
          ))
        }
      </select>
    </label>
  );
}
