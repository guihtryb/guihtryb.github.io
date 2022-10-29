import React from 'react';
import wc from '../videos/project-wc.mp4';

export default function ProjectModal() {
  return (
    <div className="project-modal-container">
      <div className="project-modal">
        <div className="col-1">
          <video className="video" src={wc} controls>
            <track kind="captions" />
          </video>
        </div>
        <div className="col-2">
          <h1 className="project-modal-title">Wonderful Cities</h1>
          <h2 className="project-modal-role"> Front-End</h2>
          <h3 className="project-modal-stacks">Stacks: ReactJS, Cypress, RTL.</h3>
          <p>
            O projeto reúne informações e fatos que
            contribuam para o usuário escolher ou saber mais sobre seu próximo destino.
          </p>
          <p>
            Desenvolvido com React.JS e ferramentas como React Context API e React Hooks,
            desenvolvi seguindo o método TDD e fazendo uso da RTL e do Cypress.io.
          </p>
          <p>
            Foram implementados slides, accordion lists, tooltip entre outros recursos para
            melhorar a experiência do usuário.
          </p>
        </div>
        <div className="project-modal-actions col-3">
          <button type="button" className="project-modal-btn-action">
            <a href="/projetos" target="_blank">
              Open App
            </a>
          </button>
          <button type="button" className="project-modal-btn-action">
            <a href="/projetos" target="_blank">
              GitHub Repo
            </a>
          </button>
        </div>
        <button type="button" className="project-modal-btn-quit">
          X
        </button>
      </div>
    </div>
  );
}
