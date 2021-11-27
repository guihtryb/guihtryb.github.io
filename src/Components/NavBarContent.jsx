import React, { useContext, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import AppContext from '../Context/AppContext';
import '../Style/NavBar.css'
import NavBarLinks from './NavBarLinks';

export default function NavBarContent () {
  const [showNavBar, setShowNavBar] = useState(false);
  const { scrolled } = useContext(AppContext);

  const handleCLick = () => setShowNavBar(!showNavBar);

  return (
      <Navbar className="navbar-container" style={ scrolled || showNavBar ? { opacity:  1 } : { backgroundColor: 'transparent', boxShadow: '0px 0px 0px', transition:'all ease 0.1s' } } expand="lg" variant="light">
        <Container>
          <Navbar.Brand className="welcome-text">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ handleCLick }/>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavBarLinks />
        </Navbar.Collapse>
        </Container> 
      </Navbar>
  );
}
