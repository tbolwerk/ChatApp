/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { launchApp } from 'feature-u';

// launch our app, exposing the Fassets object (facilitating cross-feature-communication)
const App = (features: Array<any>) =>
  launchApp({
    features,

    registerRootAppElm(rootAppElm: React.DOMElement<React.DOMAttributes<Element>, Element>) {
      const container = document.getElementById('root') || document.createElement('div');
      ReactDOM.render(rootAppElm, container);
    },
  });

export default App;
