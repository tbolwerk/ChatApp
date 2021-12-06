import React from 'react';
import { createFeature } from 'feature-u';
import SoundForm from './components/SoundForm/SoundForm';
import config from '../../feature_config.json';

export default createFeature({
  name: 'upload',
  enabled: config.SoundUpload,
  // our public face ...
  fassets: {
    define: {
      'upload.form': SoundForm,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
