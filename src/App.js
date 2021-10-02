import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Projects from './Components/ProjectsLibrary';

class  App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
