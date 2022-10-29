import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [stack, setStack] = React.useState('');
  const [roleFilter, setRoleFilter] = React.useState('Front-End');
  const [project, setProject] = React.useState({});
  const [openProjectModal, setOpenProjectModal] = React.useState(false);

  const contextValue = React.useMemo(() => ({
    project,
    setProject,
    openProjectModal,
    setOpenProjectModal,
    stack,
    setStack,
    roleFilter,
    setRoleFilter,
  }));

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
