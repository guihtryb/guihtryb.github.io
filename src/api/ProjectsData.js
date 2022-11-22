import getItImg from '../images/project-get-it.avif';
import getItVideo from '../videos/project-get-it.mp4';

import wcImg from '../images/project-wc.avif';
import wcVideo from '../videos/project-wc.mp4';

import transfersApp from '../images/project-transfers-app.avif';
import transfersAppVideo from '../videos/project-transfers-app.mp4';

const ProjectsData = [
  {
    video: transfersAppVideo,
    image: transfersApp,
    name: 'Transfers App',
    roles: ['All', 'Front-End', 'Back-End', 'Full-Stack'],
    stacks: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Fastify', 'JWT', 'Prisma'],
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
    roles: ['All', 'Front-End'],
    stacks: ['ReactJS', 'HTML', 'CSS', 'Cypress.io', 'RTL', 'JavaScript'],
    paragraphs: [
      {
        id: 0,
        content: 'O projeto reúne informações e fatos que contribuam para o usuário escolher ou saber mais sobre seu próximo destino.',
      },
      {
        id: 1,
        content: 'Desenvolvido com ReactJS e ferramentas como React Context API e React Hooks,desenvolvi seguindo o método TDD e fazendo uso da RTL e do Cypress.io.',
      },
      {
        id: 2,
        content: 'Foram implementados slides, accordion lists, tooltip entre outros recursos para melhorar a experiência do usuário.',
      },
    ],
    linkApp: 'https://dashing-sunburst-7efb27.netlify.app/',
    linkRepo: 'https://github.com/guihtryb/wonderful-cities-TDD/',
  },
];

export default ProjectsData;
