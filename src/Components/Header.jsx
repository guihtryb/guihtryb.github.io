import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';
import NavBarContent from './NavBarContent';


export default function Header() {
  const { scrolled } = useContext(AppContext);
    return (
      <header id="intro" style={ scrolled ? { opacity:  1 } : { opacity:  0 } }>
        <NavBarContent />
      </header>
    );
}
