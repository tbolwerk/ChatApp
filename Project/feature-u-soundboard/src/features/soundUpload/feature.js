import React from 'react';
import { createFeature } from 'feature-u';
import SoundForm from './components/SoundForm/SoundForm';

export default createFeature({
  name: 'mp3',

  // our public face ...
  fassets: {
    define: {},

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <SoundForm>{curRootAppElm}</SoundForm>;
  },
});
