import { createRoot } from 'react-dom/client';
import './App.css';
import { App } from './App';

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: pexel(1103970),
    html: '<p>hi</p><p>i am</p><p>Ogulcan</p>',
  },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430), html: 'Text 1' },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452), html: 'Text 2' },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(327482),
    html: '<h3>CATIC</h3><ul><li>One</li><li>One</li><li>One</li></ul>',
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(325185),
    html: 'Text 4',
  },
  // { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574), text: 'Text 5' },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(227675),
    html: 'Text 6',
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(911738),
    html: 'Text 7',
  },
  // { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986), text: 'Text 8' },
];

createRoot(document.getElementById('root')).render(<App images={images} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
