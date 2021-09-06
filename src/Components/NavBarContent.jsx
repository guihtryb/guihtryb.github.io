import React, { Component } from 'react'
import { Container, Navbar} from 'react-bootstrap';
import logo from '../logo.svg'
import '../Style/NavBar.css'
import '../App.css'
import NavBarLinks from './NavBarLinks';

export default class NavBarContent extends Component {
  render() {
    return (
        <Navbar /*fixed="top"*/ className="navbar-container" expand="lg" variant="light">
          <img src={logo} className="App-logo" alt="React logo" />
          <Container>
            <Navbar.Brand className="welcome-text">
              Welcome to my portfolio!
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
