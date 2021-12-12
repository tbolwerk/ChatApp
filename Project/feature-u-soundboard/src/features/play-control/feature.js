import React from 'react';
import { createFeature } from 'feature-u';
import SoundContainer from './components/SoundContainer/SoundContainer';
import { AssertionError } from 'assert';
import SoundButton from './components/SoundButton/SoundButton';
import config from '../../feature_config.json';
import featureName from './featureName';

export default createFeature({
  name: featureName,
  enabled: config.SoundPlayback,

  // our public face ...
  fassets: {
    define: {
      [`${featureName}.soundContainer`]: SoundContainer,
      [`${featureName}.soundButton`]: SoundButton,
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
