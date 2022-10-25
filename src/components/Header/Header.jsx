import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const { pathname } = useLocation();

  const pages = ['Home', 'Sobre', 'Projetos'];
  const currRoute = (page) => pathname === `/${page.toLowerCase()}`;

  return (
    <header className="header-bg">
      <nav className="menu-container">
        <ul className="menu-list">
          {
            pages.map((page) => (page !== 'Home' ? (
              <li
                key={page}
                style={{
                  borderBottom: currRoute(page) ? '3.5px solid #52B788' : '0',
                  paddingBottom: currRoute(page) ? '0' : '3.5px solid #52B788',
                }}
              >
                <Link to={`/${page.toLowerCase()}`} style={{ color: currRoute(page) ? '#52B788' : '#FFF' }}>{page}</Link>
              </li>
            ) : (
              <li
                key={page}
                style={{
                  borderBottom: pathname === '/' ? '3.5px solid #52B788' : '0',
                  paddingBottom: pathname === '/' ? '0' : '3.5px solid #52B788',
                }}
              >
                <Link to="/" style={{ color: pathname === '/' ? '#52B788' : '#FFF' }}>{page}</Link>
              </li>
            )))
          }
        </ul>
      </nav>
    </header>
  );
}
