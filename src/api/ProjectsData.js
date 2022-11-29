import getItImg from '../images/project-get-it.avif';
import getItVideo from '../videos/project-get-it.mp4';

import wcImg from '../images/project-wc.avif';
import wcVideo from '../videos/project-wc.mp4';

import transfersApp from '../images/project-transfers-app.avif';
import transfersAppVideo from '../videos/project-transfers-app.mp4';

import interativeRatingImg from '../images/project-interative-rating.avif';
import interativeRatingVideo from '../videos/project-interative-rating.mp4';

const ProjectsData = [
  {
    video: transfersAppVideo,
    image: transfersApp,
    name: 'Transfers App',
    roles: ['All', 'Front-End', 'Back-End', 'Full-Stack'],
    stacks: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'NodeJS', 'Fastify', 'JWT', 'Prisma'],
    paragraphs: [
      {
        id: 0,
        content: 'O projeto consiste em uma aplicação Full-Stack que permite que os usuários criem contas e realizem transações entre sí.',
      },
      {
        id: 1,
        content: 'Front-End desenvolvido com ReactJS e TypeScript, e Back-End desenvolvido com NodeJS, Fastify e a ORM Prisma.',
      },
    ],
    linkApp: '/',
    linkRepo: 'https://github.com/guihtryb/transfers-app',
  },
  {
    video: interativeRatingVideo,
    image: interativeRatingImg,
    name: 'Interactive Rating',
    roles: ['All', 'Front-End'],
    stacks: ['HTML', 'CSS', 'ReactJS', 'JavaScript', 'Context API', 'Git & GitHub'],
    paragraphs: [
      {
        id: 0,
        content: 'Meu primeiro projeto da série de projetos que estou desenvolvendo da comunidade de treinamento Front-End, a Front-End Mentoring. O desafio consiste em desenvolver um avaliador interativo para que o usuário avalie o serviço prestado anteriormente.',
      },
      {
        id: 1,
        content: 'Utilizei ferramentas como React Context API e React Hooks, e o CSS foi construido seguindo o método mobile-first.',
      },
    ],
    linkApp: 'https://guihtryb.github.io/project-00-interactive-rating/',
    linkRepo: 'https://github.com/guihtryb/project-00-interactive-rating',
  },
  {
    video: getItVideo,
    image: getItImg,
    name: 'Get it!',
    roles: ['All', 'Back-End', 'Front-End', 'Full-Stack'],
    stacks: ['ReactJS', 'HTML', 'CSS', 'JWT', 'GitHub', 'NodeJS'],
    paragraphs: [
      {
        id: 0,
        content: 'Projeto individual, trata-se de um E-commerce em que é possível comprar items tanto com dinheiro quanto com pontos obtidos na plataforma.',
      },
      {
        id: 1,
        content: 'A aplicação possui páginas específicas para pessoa consumidora e adminstradora.',
      },
    ],
    linkApp: '/',
    linkRepo: 'https://github.com/guihtryb/get-it-controle-de-pontos',
  },
  {
    video: wcVideo,
    image: wcImg,
    name: 'Wonderful Cities',
    roles: ['All', 'Front-End', 'QA'],
    stacks: ['ReactJS', 'HTML', 'CSS', 'Cypress.io', 'RTL', 'JavaScript'],
    paragraphs: [
      {
        id: 0,
        content: 'Esse projeto eu desenvolvi durante o curso de JavaScript ES6+ Completo da Origamid. Originalmente com o tema sobre Animais, resolvi refazer o projeto utilizando React, com o método TDD.',
      },
      {
        id: 1,
        content: 'Utilizei ferramentas como React Context API e React Hooks, e minha maior conquista nesse projeto foi escrever meus primeiros testes utilizando o Cypress.io.',
      },
      {
        id: 2,
        content: 'Slides, accordion lists, tooltip entre outros recursos foram implementados para melhorar a experiência do usuário.',
      },
    ],
    linkApp: 'https://dashing-sunburst-7efb27.netlify.app/',
    linkRepo: 'https://github.com/guihtryb/wonderful-cities-TDD/',
  },
];

export default ProjectsData;
