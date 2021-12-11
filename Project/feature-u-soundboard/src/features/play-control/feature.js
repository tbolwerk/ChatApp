import React from 'react';
import { createFeature } from 'feature-u';
import SoundContainer from './components/SoundContainer/SoundContainer';
import SoundButton from './components/SoundButton/SoundButton';

export default createFeature({
  name: 'play-control',
  enabled: true,
  // our public face ...
  fassets: {
    define: {
      'play.soundContainer': SoundContainer,
      'play.soundButton': SoundButton,
    },

    defineUse: {},

    use: [],
  },

  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <> {curRootAppElm} </>;
  },
});
