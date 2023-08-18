import { createRoot } from 'react-dom/client';
import './App.css';
import { App } from './App';

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;
const images = [
  // Front
  {
    name: 'Welcome',
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: pexel(1103970),
    html: `
    <h5 class="row text-center">hi</h5>
    <h5 class="row text-center">i am</h5>
    <h5 class="row text-center">Ogulcan</h5>`,
  },
  // Back
  {
    name: 'Education-Skills',
    position: [-0.8, 0, -0.8],
    rotation: [0, 0, 0],
    url: pexel(6077089),
    html: `<h5>Education</h5>
    <div class="row border-bottom border-light justify-content-between">
      <div class="col">Istanbul University</div>
      <div class="col">09/2011 - 07/2015</div>
    </div>
    <div class="row">
      <div class="col">B.S. - Maritime Transportation and Management Engineering</div>
    </div>
    <div class="row border-bottom border-light justify-content-between mt-2">
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
        AJAX, Bootstrap
      </div>
    </div>`,
  },
  {
    name: 'Project-MoDay',
    position: [0.8, 0, -0.8],
    rotation: [0, 0, 0],
    url: pexel(310452),
    html: `<h5>MoDay</h5>
    <div class="row border-bottom border-light">Movie Suggestion Console App</div>
    <div class="row">
      <ul class="col">
        <li>Collected data by web scraping</li>
        <li>Incorporated a third party API for movie details and ratings</li>
        <li>Engineered a recommendation algortihm for user search</li>
      </ul>
    </div>
    <div class="row">
      <div class="col">
        <a class="btn btn-secondary btn-sm"><i class="fa-solid fa-code"></i></a>
      </div>
      <div class="col">
        <a class="btn btn-secondary btn-sm">visit</a>
      </div>
    </div>`,
  },
  // Left
  {
    name: 'Experience-Freelance',
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(1154739),
    html: `<h5>Freelance</h5>
    <div class="row border-bottom border-light justify-content-between">
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
    url: pexel(1493226),
    html: `<h5>CATIC</h5>
    <div class="row border-bottom border-light justify-content-between">
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
  // { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574), text: 'Text 5' },
  // Right
  {
    name: 'Project-Atar-Cabos',
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(691858),
    html: `<h5>Atar Cabos</h5>
    <div class="row border-bottom border-light">Sailing School / Virtual Education Platform</div>
    <div class="row">
      <ul class="col">
        <li>Developed a Rails web app</li>
        <li>Designed database schema</li>
        <li>Employed Bootstrap for web and mobile friendly user experience</li>
        <li>Implemented Stripe API for payment process</li>
      </ul>
    </div>
    <div class="row">
      <div class="col">
        <a class="btn btn-secondary btn-sm"><i class="fa-solid fa-code"></i></a>
      </div>
      <div class="col">
        <a class="btn btn-secondary btn-sm">visit</a>
      </div>
    </div>`,
  },
  {
    name: 'Project-Wherever',
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(911738),
    html: `<h5>Wherever</h5>
    <div class="row border-bottom border-light">3D Solar System SPA</div>
    <div class="row">
      <ul class="col">
        <li>Applied React functional components and exploited hooks</li>
        <li>Created 3D interactive user interface with Three.js</li>
        <li>Deployed backend Rails app with Heroku</li>
      </ul>
    </div>
    <div class="row">
      <div class="col">
        <a class="btn btn-secondary btn-sm"><i class="fa-solid fa-code"></i></a>
      </div>
      <div class="col">
        <a class="btn btn-secondary btn-sm">visit</a>
      </div>
    </div>`,
  },
  // { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986), text: 'Text 8' },
];

createRoot(document.getElementById('root')).render(<App images={images} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
