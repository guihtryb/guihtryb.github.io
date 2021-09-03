import React, { Component } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../logo.svg'
import '../Style/NavBar.css'
import '../App.css'


export default class NavBarContent extends Component {
  render() {
    return (
        <Navbar fixed="top" className="navbar-container" expand="lg" variant="light">
          <img src={logo} className="App-logo" alt="React logo" />
          <Container>
            <Navbar.Brand>
              Welcome to my portfolio!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  };
}
