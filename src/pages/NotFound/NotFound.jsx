import React from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Header />
      <main className="main-not-found-bg">
        <div className="img-bg" />
        <section className="main-not-found-container">
          <h1 className="title">
            Ops! Página não encontrada.
          </h1>
          <Link to="/home" className="btn-back-home">
            Voltar para Home
          </Link>
        </section>
      </main>
      <ContactModal />
    </div>
  );
}
