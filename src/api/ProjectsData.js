import getItVideo from '../videos/project-get-it.mp4';
import getItImg from '../images/project-get-it.avif';
import wcVideo from '../videos/project-wc.mp4';
import rtlVideo from '../videos/project-rtl.mp4';
import wcImage from '../images/project-wc.avif';
import rtlImg from '../images/project-rtl.avif';
import comingSoon from '../images/coming.avif';

const ProjectsData = [
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
    video: rtlVideo,
    image: rtlImg,
    name: 'Pokédex RTL',
    roles: ['All', 'Front-End', 'QA'],
    stacks: ['JavaScript', 'ReactJS', 'CSS', 'React Testing Library', 'GitHub'],
    paragraphs: [
      {
        id: 0,
        content: 'Projeto desenvolvido durante o módulo de Front-End da Trybe, durante o bloco sobre React Testing Library, com objetivo de utilizar os seletores da React Testing Library, simular eventos, testar fluxos assíncronos, criar mocks de APIs e testar inputs, para testes automotizados.',
      },
      {
        id: 1,
        content: 'Minha função foi testar a aplicação, e opcioanalmente estilizei partes como o header e os botôes da aplicação.',
      },
    ],
    linkApp: 'https://guihtryb.github.io/pokedex-rtl/',
    linkRepo: 'https://github.com/guihtryb/pokedex-rtl',
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
