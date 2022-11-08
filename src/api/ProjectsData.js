import wcVideo from '../videos/project-wc.mp4';
import triviaVideo from '../videos/project-trivia.mp4';
import wcImage from '../images/project-wc.avif';
import triviaImg from '../images/project-trivia.avif';
import comingSoon from '../images/coming.avif';

const ProjectsData = [
  {
    video: wcVideo,
    image: wcImage,
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
  {
    video: triviaVideo,
    image: triviaImg,
    name: 'Trivia Game',
    roles: ['All', 'Front-End'],
    stacks: ['Redux', 'ReactJS', 'HTML', 'CSS', 'JavaScript'],
    paragraphs: [
      {
        id: 0,
        content: 'Desenvolvido durante o módulo de Front-End na Trybe, durante o bloco de Redux, o App consiste em um jogo de Perguntas & Respostas com tempo limitado e sistema de Ranking.',
      },
      {
        id: 0,
        content: 'O projeto foi desenvolvido em grupo utilizando metodologias ágeis, e foi realizado integração com uma API externa para as informações do game.',
      },
    ],
    linkApp: 'https://guihtryb.github.io/trivia-game',
    linkRepo: 'https://github.com/guihtryb/trivia-game',
  },
  {
    video: comingSoon,
    image: comingSoon,
    name: 'Coming Soon 3',
    roles: ['All', 'Front-End'],
    stacks: ['JavaScript', 'HTML', 'CSS'],
    paragraphs: [
      {
        id: 0,
        content: 'Coming Soon.',
      },
    ],
    linkApp: '/',
    linkRepo: '/',
  },
  {
    video: comingSoon,
    image: comingSoon,
    name: 'Coming Soon 4',
    roles: ['All', 'Back-End'],
    stacks: ['MongoDB', 'NodeJS', 'JWT'],
    paragraphs: [
      {
        id: 0,
        content: 'Coming Soon.',
      },
    ],
    linkApp: '/',
    linkRepo: '/',
  },
  {
    video: comingSoon,
    image: comingSoon,
    name: 'Coming Soon 5',
    roles: ['All', 'Back-End'],
    stacks: ['SQL', 'NodeJS', 'Sequelize'],
    paragraphs: [
      {
        id: 0,
        content: 'Coming Soon.',
      },
    ],
    linkApp: '/',
    linkRepo: '/',
  },
  {
    video: comingSoon,
    image: comingSoon,
    name: 'Coming Soon 6',
    roles: ['All', 'Back-End'],
    stacks: ['Docker', 'SQL'],
    paragraphs: [
      {
        id: 0,
        content: 'Coming Soon.',
      },
    ],
    linkApp: '/',
    linkRepo: '/',
  },
  {
    video: comingSoon,
    image: comingSoon,
    name: 'Coming Soon 7',
    roles: ['All', 'Full-Stack', 'Front-End', 'Back-End'],
    stacks: ['ReactJS', 'HTML', 'CSS', 'NodeJS', 'Sequelize', 'MySQL'],
    paragraphs: [
      {
        id: 0,
        content: 'Coming Soon.',
      },
    ],
    linkApp: '/',
    linkRepo: '/',
  },
  {
    video: comingSoon,
    image: comingSoon,
    name: 'Coming Soon 8',
    roles: ['All', 'Full-Stack', 'Front-End', 'Back-End'],
    stacks: [''],
    paragraphs: [
      {
        id: 0,
        content: 'Coming Soon.',
      },
    ],
    linkApp: '/',
    linkRepo: '/',
  },
];

export default ProjectsData;
