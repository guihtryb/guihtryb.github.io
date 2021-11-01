import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
export default class NavBarLinks extends Component {

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
