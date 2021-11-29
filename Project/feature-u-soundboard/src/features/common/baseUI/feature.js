import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';

import _baseUI from './feature';

import MainLayout from './component/MainLayout';
import Loading from './component/Loading';
import featureName from './featureName';

export default createFeature({
  name: featureName,

  fassets: {
    define: {
      [`${featureName}.loading`]: Loading,
      [`${featureName}.mainLayout`]: MainLayout,
    },

    defineUse: {},

    use: ['*.route.component'],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
