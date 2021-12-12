import React from 'react';
import { createFeature } from 'feature-u';
import VoiceRecordingForm from './components/VoiceRecordingForm';
import featureName from './featureName';
import config from '../../feature_config.json';

export default createFeature({
  name: featureName,
  enabled: config.VoiceRecording,

  // our public face ...
  fassets: {
    define: {
      [`${featureName}.form`]: VoiceRecordingForm,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
