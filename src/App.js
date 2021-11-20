import Home from './Pages/Home';
import React from 'react';
import Provider from './Context/AppProvider';

function  App() {
    return (
      <Provider>
        <Home />
      </Provider>
    );
}

export default App;
