import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
export default class NavBarLinks extends Component {
  
  scrollToIntro() {
  window.scrollTo(0, 65);
  }

  scrollToAbout() {
  window.scrollTo(0, 940);
  }

  render() {
    return (
      <div>
        <div id="name-box">
      <button id="name" onClick={this.scrollToIntro}>GuilhermeViana</button>
        </div>
      <Nav className="me-auto" >
        <Nav.Link onClick={this.scrollToAbout} id="About" className="nav-link"><span>About</span></Nav.Link>
        <Nav.Link href="#projects" id="Projects" className="nav-link"><span>Projects</span></Nav.Link>
        <Nav.Link href="#contact" id="Contact" className="nav-link"><span>Contact</span></Nav.Link>
      </Nav>
      </div>
    );
  };
}
