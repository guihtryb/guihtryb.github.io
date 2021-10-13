import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
export default class NavBarLinks extends Component {
  
  scrollToIntro() {
  window.scrollTo(0, 65);
  }

  scrollToAbout() {
  window.scrollTo(0, 940);
  }

  scrollToProjects() {
    window.scrollTo(0, 1690);
  }

  scrollToContact() {
    window.scrollTo(0, 2280);
  }
  
  render() {
    return (
      <div>
        <div id="name-box">
      <button id="name" onClick={this.scrollToIntro}>GuilhermeViana</button>
        </div>
      <Nav className="me-auto" >
        <Nav.Link onClick={this.scrollToAbout} id="About" className="nav-link"><span>About</span></Nav.Link>
        <Nav.Link onClick={this.scrollToProjects} id="Projects" className="nav-link"><span>Projects</span></Nav.Link>
        <Nav.Link className="nav-link" onClick={ this.scrollToContact }><span>Contact</span></Nav.Link>
      </Nav>
      </div>
    );
  };
}
