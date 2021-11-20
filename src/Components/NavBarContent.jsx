import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import AppContext from '../Context/AppContext';
import '../Style/NavBar.css'
import NavBarLinks from './NavBarLinks';

export default function NavBarContent () {
  const { scrolled } = useContext(AppContext);

    return (
        <Navbar className="navbar-container" style={ scrolled ? { opacity:  1 } : { backgroundColor: 'transparent', boxShadow: '0px 0px 0px' } } expand="lg" variant="light">
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
}
