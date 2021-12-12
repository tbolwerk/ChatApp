import React from 'react';
import { createFeature } from 'feature-u';
import SoundForm from './components/SoundForm/SoundForm';
import config from '../../feature_config.json';
import featureName from './featureName';

export default createFeature({
  name: featureName,
  enabled: config.SoundUpload,
  // our public face ...
  fassets: {
    define: {
      [`${featureName}.form`]: SoundForm,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
