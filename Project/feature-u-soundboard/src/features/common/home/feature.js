import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import _home from './feature';
import featureName from './featureName';
import route from './route';

export default createFeature({
  name: featureName,

  fassets: {
    define: {},

    defineUse: {
      [`${featureName}.route.component`]: route,
    },

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
