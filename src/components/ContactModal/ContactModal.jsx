import React from 'react';
import './ContactModal.css';
import linkedin from '../../images/icons/linkedin.svg';
import gmail from '../../images/icons/gmail.svg';
import github from '../../images/icons/github.svg';

export default function ContactModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`modal-container ${isOpen ? ' open' : ''}`}>
      <div className={`contact-modal ${isOpen ? ' open' : ''}`}>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Say Hi! 👋
        </button>
        <ul className={`contact-list ${isOpen ? ' open' : ''}`}>
          <li>
            <img src={linkedin} alt="linkedin icon" height="32px" width="32px" />
            <a target="_blank" href="https://www.linkedin.com/in/guilhermehviana/" rel="noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <img src={gmail} alt="gmail icon" height="32px" width="32px" />
            <a target="_blank" href="mailto:guilhermehviana01@gmail.com" rel="noreferrer">
              Gmail
            </a>
          </li>
          <li>
            <img src={github} alt="github icon" height="32px" width="32px" />
            <a target="_blank" href="https://github.com/guihtryb" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
