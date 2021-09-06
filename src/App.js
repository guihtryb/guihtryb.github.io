import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

class  App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
