import React, { Component } from 'react';
import Contact from '../Components/Contact';
import Header from '../Components/Header';
import { Main } from '../Components/Main';
import ProjectsLibrary from '../Components/ProjectsLibrary';


export default class Home extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Main/>
      <ProjectsLibrary />
      <Contact />
    </div>
    )
  }
}
