import wcVideo from '../videos/project-wc.mp4';
import wcImage from '../images/project-wc.png';
import comingSoon from '../images/coming.jpeg';

const ProjectsData = [
  {
    video: wcVideo,
    image: wcImage,
    name: 'Wonderful Cities',
    roles: ['Front-End'],
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
    video: comingSoon,
    image: comingSoon,
    name: 'Coming Soon 2',
    roles: ['Front-End'],
    stacks: ['Redux', 'HTML', 'CSS', 'RTL'],
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
    name: 'Coming Soon 3',
    roles: ['Front-End'],
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
    roles: ['Back-End'],
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
    roles: ['Back-End'],
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
    roles: ['Back-End'],
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
    roles: ['Full-Stack', 'Front-End', 'Back-End'],
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
    roles: ['Full-Stack', 'Front-End', 'Back-End'],
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
