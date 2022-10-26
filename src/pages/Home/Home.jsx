import React from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="section-home-bg">
        <div className="section-home-container">
          <div className="home-content">
            <h1 className="title">
              <span>
                Guilherme
              </span>
              <div className="surname">
                <span>V</span>
                <span>i</span>
                <span>a</span>
                <span>n</span>
                <span>a</span>
              </div>
            </h1>
            <ul className="list-roles">
              <li className="front">
                <Link to="/projetos" params={{ testValue: 'Hello' }}>
                  Front-End Developer
                </Link>
              </li>
              <li>
                <Link to="/projetos" params={{ testValue: 'Hello' }}>
                  Full-Stack Web Development Student
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ContactModal />
    </div>
  );
}
