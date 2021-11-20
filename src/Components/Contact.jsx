
import React, { useEffect } from 'react';
import Aos from 'aos';
import '../Style/Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact()  {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="contact" className="contact-me-section">
      <div className="contact-title">
        <h2>Contact</h2>
          <div className="contact-bar"></div>
        <div className="contact-items">
        <a href="https://github.com/guihtryb" rel="noreferrer" target="_blank"><FaGithub data-aos="fade-up" className="gitIcon"/></a>
        <a href="https://www.linkedin.com/in/guilherme-viana-097a7b210" target="_blank" rel="noreferrer"><FaLinkedin data-aos="fade-up" className="linkedinIcon"/></a>
        </div>
      </div>
    </section>
  );
}
