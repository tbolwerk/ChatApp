/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import { launchApp } from 'feature-u';
import features from './features';
// import aspects      from 'aspects';
// import {splash}     from 'util/SplashScreen';

// launch our app, exposing the Fassets object (facilitating cross-feature-communication)
export default launchApp({
  // *4*

  features, // *1*
  // aspects,                         // *2*

  registerRootAppElm(rootAppElm: React.DOMElement<React.DOMAttributes<Element>, Element>) {
    // *3*
    ReactDOM.render(rootAppElm, document.getElementById('root'));
  },

  // showStatus(msg='', err=null) {   // *5*
  // splash(msg, err);
  // },
});
