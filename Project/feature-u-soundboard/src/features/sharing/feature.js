import React from 'react';
import { createFeature } from 'feature-u';
import _account from './feature';
import featureName from './featureName';
import ShareButton from './component/ShareButton';

export default createFeature({
  name: featureName,
  enabled: true,
  // our public face ...
  fassets: {
    define: {
      [`${featureName}.ShareButton`]: ShareButton,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
