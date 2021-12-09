import React from 'react';
import { createFeature } from 'feature-u';
import VoiceRecordingForm from './components/VoiceRecordingForm';

export default createFeature({
  name: 'voice',

  // our public face ...
  fassets: {
    define: {
      'voice.form': VoiceRecordingForm,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
