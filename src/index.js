import { createRoot } from 'react-dom/client';
import './App.css';
import { App } from './App';
import welcomeImg from './img/1103970.jpeg';
import educationImg from './img/7078283.jpeg';
import modayImg from './img/5825593.jpeg';
import freelanceImg from './img/3369537.jpeg';
import caticImg from './img/2619248.jpeg';
import atarcabosImg from './img/7078387.jpeg';
import whereverImg from './img/911738.jpeg';

// const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;
const images = [
  // Front
  {
    name: 'Welcome',
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: welcomeImg,
    isMainFrame: true,
    html: `<div class="row">
    <h5 class="col">
      hi <br />
      i am <br />
      Ogulcan
    </h5>
  </div>
  <div class="row mb-2">
    <div class="col-12">full stack developer</div>
    <div class="col-12">curious mind, self-starter</div>
  </div>
  <div class="row">
    <div class="col text-center">
      <a class="btn btn-secondary btn-sm" href="mailto:muratogulcansahin@gmail.com"
        ><i class="fa-solid fa-envelope"></i
      ></a>
    </div>
    <div class="col text-center">
      <a class="btn btn-secondary btn-sm" target="_blank" href="https://github.com/olci34"
        ><i class="fa-brands fa-github"></i
      ></a>
    </div>
    <div class="col text-center">
      <a
        class="btn btn-secondary btn-sm"
        target="_blank"
        href="https://www.linkedin.com/in/muratogulcansahin/"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
    </div>
  </div>`,
  },
  // Back
  {
    name: 'Education-Skills',
    position: [-0.8, 0, -0.8],
    rotation: [0, 0, 0],
    url: educationImg,
    isMainFrame: false,
    html: `<h5>Education</h5>
    <div class="row border-bottom border-dark justify-content-between">
      <div class="col">Istanbul University</div>
      <div class="col">09/2011 - 07/2015</div>
    </div>
    <div class="row">
      <div class="col">B.S. - Maritime Transportation and Management Engineering</div>
    </div>
    <div class="row border-bottom border-dark justify-content-between mt-2">
      <div class="col">Flatiron School</div>
      <div class="col">01/2021 - 06/2021</div>
    </div>
    <div class="row mb-3">
      <div class="col">Bootcamp - Fullstack Web Development</div>
    </div>
    
    <h5>Skills</h5>
    <div class="row">
      <div class="col">
        C#, ASP.NET, TypeScript, Angular, React, Akita, Redux, Ruby on Rails, RDMS, T-SQL, Git, REST,
        AJAX, Bootstrap, Three.js, Angular Material
      </div>
    </div>`,
  },
  {
    name: 'Project-MoDay',
    position: [0.8, 0, -0.8],
    rotation: [0, 0, 0],
    url: modayImg,
    isMainFrame: false,
    html: `<h5>Project</h5>
    <div class="row"><div class="col">MoDay</div></div>
    <div class="row border-bottom border-dark">
    <div class="col">Movie Suggestion Console App</div></div>
    <div class="row">
      <ul class="col">
        <li>Collected data by web scraping</li>
        <li>Incorporated a third party API for movie details and ratings</li>
        <li>Engineered a recommendation algortihm for user search</li>
      </ul>
    </div>
    <div class="row">
      <div class="col text-center">
        <a class="btn btn-secondary btn-sm" target="_blank" href="#"><i class="fa-solid fa-code"></i></a>
      </div>
      <div class="col text-center">
        <a class="btn btn-secondary btn-sm" target="_blank" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>
    </div>`,
  },
  // Left
  {
    name: 'Experience-Freelance',
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    isMainFrame: false,
    url: freelanceImg,
    html: `<h5>Experience</h5>
    <div class="row"><div class="col">Freelance</div></div>
    <div class="row border-bottom border-dark justify-content-between">
      <div class="col">Junior Software Dev</div>
      <div class="col">03/2021 - Present</div>
    </div>
    <div class="row">
      <ul class="col">
        <li>Delivered Ruby on Rails solutions</li>
        <li>Integrated Stripe API to help payment transactions</li>
        <li>Developed marketing and transactional emailing infrastructure with SendGrid API</li>
      </ul>
    </div>`,
  },
  {
    name: 'Experience-CATIC',
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    isMainFrame: false,
    url: caticImg,
    html: `<h5>Experience</h5>
    <div class="row"><div class="col">CATIC</div></div>
    <div class="row border-bottom border-dark justify-content-between">
      <div class="col">Junior Software Dev</div>
      <div class="col">01/2022 - Present</div>
    </div>
    <div class="row">
      <ul class="col">
        <li>Built SPA Angular components, exploited Akita state management</li>
        <li>Managed RDMS using T-SQL in SQL Server</li>
        <li>Maintained ASP.NET internal and external REST APIs</li>
        <li>Designed and implemented bussiness rules in Agile</li>
      </ul>
    </div>`,
  },
  // Right
  {
    name: 'Project-Atar-Cabos',
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    isMainFrame: false,
    url: atarcabosImg,
    html: `<h5>Project</h5>
    <div class="row"><div class="col">Atar Cabos</div></div>
    <div class="row border-bottom border-dark">
    <div class="col">Sailing School / Virtual Education Platform</div>
    </div>
    <div class="row">
      <ul class="col">
        <li>Developed a Rails web app</li>
        <li>Designed database schema</li>
        <li>Employed Bootstrap for web and mobile friendly user experience</li>
        <li>Implemented Stripe API for payment process</li>
      </ul>
    </div>
    <div class="row">
      <div class="col text-center">
        <a class="btn btn-secondary btn-sm" target="_blank" href="#"><i class="fa-solid fa-code"></i></a>
      </div>
      <div class="col text-center">
        <a class="btn btn-secondary btn-sm" target="_blank" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>
    </div>`,
  },
  {
    name: 'Project-Wherever',
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    isMainFrame: false,
    url: whereverImg,
    html: `<h5>Project</h5>
    <div class="row"><div class="col">Wherever</div></div>
    <div class="row border-bottom border-dark"><div class="col">3D Solar System SPA</div></div>
    <div class="row">
      <ul class="col">
        <li>Applied React functional components and exploited hooks</li>
        <li>Created 3D interactive user interface with Three.js</li>
        <li>Deployed backend Rails app with Heroku</li>
      </ul>
    </div>
    <div class="row">
      <div class="col text-center">
        <a class="btn btn-secondary btn-sm" target="_blank" href="#"><i class="fa-solid fa-code"></i></a>
      </div>
      <div class="col text-center">
        <a class="btn btn-secondary btn-sm" target="_blank" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>
    </div>`,
  },
];

createRoot(document.getElementById('root')).render(<App images={images} />);
