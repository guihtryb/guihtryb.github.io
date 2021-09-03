import Header from './Components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

class  App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" component={ Header } />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
