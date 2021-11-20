import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import SoundOverview from './component/SoundOverview';

export default createFeature({
  name: 'sounds',

  // our public face ...
  fassets: {
    define: {},

    defineUse: {},

    use: [],
  },
  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <SoundOverview> {curRootAppElm} </SoundOverview>;
  },
});
