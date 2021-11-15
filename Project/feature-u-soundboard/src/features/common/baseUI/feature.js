import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';

import _baseUI from './feature';

import MainLayout from './component/MainLayout';

export default createFeature({
  name: 'baseUI',

  // our public face ...
  fassets: {
    define: {},

    defineUse: {},

    use: [],
  },

  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <MainLayout> {curRootAppElm} </MainLayout>;
  },
});
