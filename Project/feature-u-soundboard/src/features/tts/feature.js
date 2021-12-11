import React from 'react';
import { createFeature } from 'feature-u';
import TextToSpeechForm from './components/TextToSpeechForm';
import config from '../../feature_config.json';

import featureName from './featureName';

export default createFeature({
  name: featureName,
  enabled: config.TTS,

  // our public face ...
  fassets: {
    define: {
      'tts.form': TextToSpeechForm,
    },

    defineUse: {},

    use: [],
  },

  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <> {curRootAppElm} </>;
  },
});
