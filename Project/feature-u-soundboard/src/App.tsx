/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { launchApp } from 'feature-u';

// import aspects      from 'aspects';

// launch our app, exposing the Fassets object (facilitating cross-feature-communication)
const App = (features) =>
  launchApp({
    features,
    // aspects: [],

    registerRootAppElm(rootAppElm: React.DOMElement<React.DOMAttributes<Element>, Element>) {
      const container = document.getElementById('root') || document.createElement('div');
      ReactDOM.render(rootAppElm, container);
    },
  });

export default App;
