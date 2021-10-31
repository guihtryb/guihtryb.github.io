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
    window.scrollTo(0, 1660);
  }

  scrollToContact() {
    window.scrollTo(0, 2280);
  }
  
  render() {
    return (
      <div className="teste">
      <a href="#intro"><button id="name">GuilhermeViana</button></a>
      <Nav className="me-auto" >
        <Nav.Link href="#about" className="nav-link"><span>About</span></Nav.Link>
        <Nav.Link href="#projects" className="nav-link"><span>Projects</span></Nav.Link>
        <Nav.Link href="#contact" className="nav-link"><span>Contact</span></Nav.Link>
      </Nav>
      </div>
    );
  };
}
