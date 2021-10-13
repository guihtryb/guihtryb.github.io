import wallet from '../Videos/wallet.mp4';
import pokeRTL from '../Videos/pokeRTL.mp4';
import pixelArt from '../Videos/pixelArt.mp4'

const projectsData = [
  {
    name: 'Trybe Wallet',
    description: 'In this project, I developed a digital wallet that registers, calculates and converts expenses in different currencies to a unique one using Redux.',
    skills: ['JavaScript', 'ReactJS', 'Redux', 'CSS', 'HTML', 'Git & GitHub'],
    repoLink: 'https://github.com/tryber/sd-013-b-project-starwars-planets-search/',
    video: wallet,
  },
  {
    name: 'Pixel Art',
    description: 'A web page with a functional color palette that can be used to create pixel arts',
    skills: ['JavaScript', 'DOM', 'CSS', 'HTML', 'Git & GitHub'],
    repoLink: 'https://github.com/tryber/sd-014-b-project-react-testing-library',
    video: pixelArt,
  },
  {
    name: 'Automated Tests with React Router Library',
    description: 'In this project I was responsible to use the RTL queries to test inputs, asynchronous flows, simulate user events and create APIs mocks and ensure 100% of coverage',
    skills: ['JavaScript', 'ReactJS', 'Redux', 'RTL', 'Git & GitHub'],
    repoLink: 'https://github.com/tryber/sd-014-b-project-react-testing-library',
    video: pokeRTL,
  },
];

export default projectsData;