import React, { Component } from 'react';
import MoreAbout from '../Components/About';
import Contact from '../Components/Contact';
import Header from '../Components/Header';
import Intro from '../Components/Intro';
import ProjectsLibrary from '../Components/ProjectsLibrary';

export default class Home extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Intro/>
      <MoreAbout />
      <ProjectsLibrary />
      <Contact />
    </div>
    )
  }
}
