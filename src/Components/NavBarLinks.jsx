import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export default function NavBarLinks () {

    return (
    <div className="navbar-links-container">
      <div className="navbar-name-container">
      <a href="#intro" className="navbar-name">GuilhermeViana</a>
      </div>
      <Nav className="me-auto" >
        <Nav.Link href="#about" className="navbar-link"><span>About</span></Nav.Link>
        <Nav.Link href="#projects" className="navbar-link"><span>Projects</span></Nav.Link>
        <Nav.Link href="#contact" className="navbar-link"><span>Contact</span></Nav.Link>
      </Nav>
    </div>
    );
}
