import React from 'react';
import Context from '../context/Context';

export default function ProjectModal() {
  const { project, openProjectModal, setOpenProjectModal } = React.useContext(Context);

  return project && (
    <div className={`project-modal-container ${openProjectModal && 'open'}`}>
      <div className={`project-modal ${openProjectModal && 'open'}`}>
        <div className="col-1">
          <video className="video" src={project.video} controls>
            <track kind="captions" />
          </video>
        </div>
        <div className="col-2">
          <h1 className="project-modal-title">{project.name}</h1>
          <h2 className="project-modal-role">{project.role}</h2>
          {
            project.stacks && (<h3 className="project-modal-stacks">{`Stacks: ${project.stacks.join(', ')}.`}</h3>)
          }
          {
            project.paragraphs
            && project.paragraphs.map(({ id, content }) => (<p key={id}>{content}</p>))
          }
        </div>
        <div className="project-modal-actions col-3">
          <button type="button" className="project-modal-btn-action">
            <a href={project.linkApp} target="_blank" rel="noreferrer">
              Open App
            </a>
          </button>
          <button type="button" className="project-modal-btn-action">
            <a href={project.linkRepo} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </button>
        </div>
        <button type="button" className="project-modal-btn-quit" onClick={() => setOpenProjectModal(false)}>
          X
        </button>
      </div>
    </div>
  );
}
