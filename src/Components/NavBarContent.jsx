import React, { Component } from 'react'
import { Container, Navbar} from 'react-bootstrap';
import '../Style/NavBar.css'
import '../App.css'
import NavBarLinks from './NavBarLinks';

export default class NavBarContent extends Component {
  render() {
    return (
        <Navbar className="navbar-container" expand="lg" variant="light">
          <Container>
            <Navbar.Brand className="welcome-text">
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavBarLinks />
          </Navbar.Collapse>
          </Container> 
       </Navbar>
    );
  };
}
