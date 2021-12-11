import React from 'react';
import { createFeature } from 'feature-u';
import featureName from './featureName';
import ShareButton from './component/ShareButton';
import config from '../../feature_config.json';

export default createFeature({
  name: featureName,
  enabled: config.Sharing,
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
