import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
// import registerServiceWorker from './registerServiceWorker';

// Inform your Mapbox token (https://www.mapbox.com/account/)
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hbmFycGNyaWJlaXJvIiwiYSI6ImNqdWwxZnB0dDE2bnM0OW43ZHpsaGE3ODAifQ.xY8Q8NmmyKNthb-w-XBFMg'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();
