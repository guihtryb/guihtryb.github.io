import React, { Component } from 'react'
import '../Style/Main.css'
import ProjectsLibrary from './ProjectsLibrary';

export default class Main extends Component {
  render() {
    return (
      <main className="main-content">
        <div className="div-box"></div>
        <ProjectsLibrary />
      </main>
    );
  };
}
