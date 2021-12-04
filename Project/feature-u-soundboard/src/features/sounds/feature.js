import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import SoundOverview from './component/SoundOverview';

export default createFeature({
  name: 'sounds',
  enabled: true,

  // our public face ...
  fassets: {
    define: {
      'sounds.SoundOverview': SoundOverview,
    },

    defineUse: {},
    use: [['pagination.*', { required: true, type: fassetValidations.comp }]],
  },
  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <SoundOverview> {curRootAppElm} </SoundOverview>;
  },
});
