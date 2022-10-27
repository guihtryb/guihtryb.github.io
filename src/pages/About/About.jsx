import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="main-about-bg">
        <div className="main-about-container">
          <h1>Olá,</h1>
          <h2>Meu nome é Guilherme Viana!</h2>
          <p>
            Sou apaixonado por tecnologia e seu potencial
            de transformar positivamente a vida das
            pessoas.
          </p>
          <p>
            Possuo foco em desenvolvimento Front-End e
            tenho aprofundado minhas habilidades com ReactJS.
          </p>
          <p>
            Iniciei meus estudos em desenvolvimento e lógica de programação em 2017
            e aprofundo meus conhecimentos em
            desenvolvimento Web desde 2021, quando iniciei meu curso de desenvolvimento Web
            Full-Stack na
            {' '}
            <a href="https://www.betrybe.com/">Trybe</a>
            {' '}
            ,
            e tenho
            desenvolvido projetos guiados por esse potencial desde então.
          </p>
          <p>
            A capacidade de investigação, determinação e
            resiliência, são habilidades que carrego comigo para a superação de qualquer desafio!
          </p>
        </div>
        <section className="skills-section-bg">
          <div className="skills-container">
            Skills
          </div>
        </section>
      </main>
      <ContactModal />
    </div>
  );
}
