import React from 'react';
import { createFeature } from 'feature-u';
import TextToSpeechForm from './components/TextToSpeechForm';

export default createFeature({
  name: 'tts',

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
