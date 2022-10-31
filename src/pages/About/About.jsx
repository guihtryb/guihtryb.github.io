import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal';
import Header from '../../components/Header/Header';
import SkillCard from '../../components/SkillCard';
import './About.css';
import skills from './skills';

export default function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="main-about-bg">
        <div className="img-about-bg" alt="background decoration" />
        <div className="main-about-container">
          <h1>Olá,</h1>
          <h2>
            Meu nome é
            {' '}
            <span>
              {' '}
              Guilherme Viana!
            </span>

          </h2>
          <p>
            Sou
            {' '}
            <span>apaixonado</span>
            {' '}
            por
            {' '}
            <span>tecnologia</span>
            {' '}
            e seu potencial de
            {' '}
            <span>
              transformar positivamente
            </span>
            {' '}
            a vida das pessoas.
          </p>
          <p>
            Possuo foco em desenvolvimento
            {' '}
            <span>
              Front-End
            </span>
            {' '}
            e tenho aprofundado minhas habilidades com
            {' '}
            <span> ReactJS</span>
            .
          </p>
          <p>
            Iniciei meus estudos em
            {' '}
            <span>desenvolvimento</span>
            {' '}
            e
            {' '}
            <span>lógica de programação</span>
            {' '}
            em 2017, durante meu ensino médio/técnico no IFMG,
            e aprofundo meus conhecimentos em desenvolvimento
            Web desde 2021, quando iniciei meu curso de
            {' '}
            <span>
              desenvolvimento Web Full-Stack
            </span>
            {' '}
            na
            {' '}
            <a href="https://www.betrybe.com/">
              <span>
                Trybe
              </span>
            </a>
            {' '}
            ,
            e tenho desenvolvido projetos guiados por esse potencial de transformação desde então.
          </p>
          <p>
            A capacidade de
            {' '}
            <span>
              investigação
            </span>
            ,
            <span> determinação </span>
            e
            {' '}
            <span>resiliência</span>
            , são habilidades que carrego comigo para a superação de
            {' '}
            <span>
              qualquer desafio!
            </span>
          </p>
        </div>
        <section className="skills-section-bg">
          <h3 className="skill-subtitle">Skills</h3>
          <div
            className="skills-container"
          >
            {
                skills.map(({ name, icon }) => (
                  <div className="skill" key={name}>
                    <SkillCard name={name} icon={icon} />
                  </div>
                ))
              }
          </div>
        </section>
      </main>
      <ContactModal />
    </div>
  );
}
