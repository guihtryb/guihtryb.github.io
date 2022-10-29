import React from 'react';
import Context from '../context/Context';

export default function StackFIlterInput() {
  const { setStack } = React.useContext(Context);

  return (
    <label htmlFor="search-by-stack" className="label-stack-filter">
      {' '}
      Filtre por stack:
      <input
        id="search-by-stack"
        className="input"
        onChange={({ target }) => setStack(target.value)}
        placeholder="Ex: JavaScript"
      />
    </label>
  );
}
