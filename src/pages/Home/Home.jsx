import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import RolesList from '../../components/RolesList/RolesList';
import Title from '../../components/Title/Title';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="main-home-bg">
        <div className="img-bg" alt="background decoration" />
        <div className="main-home-container">
          <div className="home-content">
            <Title />
            <RolesList />
          </div>
        </div>
      </main>
      <ContactModal />
    </div>
  );
}
