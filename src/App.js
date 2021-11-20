import Home from './Pages/Home';
import React, { Component } from 'react';
import Provider from './Context/AppProvider';

class  App extends Component {
  render() {
    return (
      <Provider>
        <Home />
      </Provider>
    );
  }
}

export default App;
