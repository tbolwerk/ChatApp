import React from 'react';
import { createFeature } from 'feature-u';
import SoundContainer from './components/SoundContainer/SoundContainer';
import { AssertionError } from 'assert';

export default createFeature({
  name: 'play-control',

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
    if (!fassets.hasFeature('account'))
      throw new AssertionError({
        message: 'Account feature is needed in order to use the play-control feature',
      });
    return <> {curRootAppElm} </>;
  },
});