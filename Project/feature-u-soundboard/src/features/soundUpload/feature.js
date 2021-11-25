import React from 'react';
import { createFeature } from 'feature-u';
import SoundForm from './components/SoundForm/SoundForm';

export default createFeature({
  name: 'upload',

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
