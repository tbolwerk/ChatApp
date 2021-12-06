import React from 'react';
import { createFeature } from 'feature-u';
import SoundContainer from './components/SoundContainer/SoundContainer';
import config from '../../feature_config.json';

export default createFeature({
  name: 'play-control',
  enabled: config.SoundPlayback,

  // our public face ...
  fassets: {
    define: {
      'play.soundContainer': SoundContainer,
    },

    defineUse: {},

    use: [],
  },

  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <> {curRootAppElm} </>;
  },
});
