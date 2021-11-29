import wallet from '../Videos/wallet.mp4';
import pokeRTL from '../Videos/pokeRTL.mp4';
import pixelArt from '../Videos/pixelArt.mp4'

const projectsData = [
  {
    name: 'Trybe Wallet',
    description: 'A digital wallet that registers, calculates and converts expenses in different currencies to a unique one using Redux.',
    skills: [
      {
        stack: 'JavaScript',
        family: 'front-end',
      },
      {
        stack: 'ReactJS',
        family: 'front-end',
      },
      {
        stack: 'Redux',
        family: 'front-end',
      },
      {
        stack: 'CSS',
        family: 'front-end',
      },
      {
        stack:'HTML',
        family: 'front-end',
      },
      {
        stack:'Git & GitHub'
      },
    ],
    repoLink: 'https://github.com/guihtryb/sd-013-b-project-trybewallet',
    app: 'https://guihtryb.github.io/digital-wallet/',
    video: wallet,
  },
  // {
  //   name: 'Pixel Art',
  //   description: 'A web page with a functional color palette that can be used to create pixel arts',
  //   skills: ['JavaScript', 'DOM', 'CSS', 'HTML', 'Git & GitHub'],
  //   repoLink: 'https://github.com/guihtryb/sd-013-b-project-pixels-art',
  //   video: pixelArt,
  // },
  // {
  //   name: 'Automated Tests with React Router Library',
  //   description: 'I use the RTL` queries to test inputs, asynchronous flows, simulate user events and create APIs mocks and ensure 100% of coverage',
  //   skills: ['JavaScript', 'ReactJS', 'Redux', 'RTL', 'Git & GitHub'],
  //   repoLink: 'https://github.com/guihtryb/sd-013-b-project-react-testing-library',
  //   video: pokeRTL,
  // },
];

export default projectsData;