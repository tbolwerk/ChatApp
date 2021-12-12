/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import CategoryView from './component/CategoryView';
import featureName from './featureName';
import { link, route } from './route';
import config from '../../feature_config.json';

export default createFeature({
  name: featureName,
  enabled: config.Categories,

  // our public face ...
  fassets: {
    define: {
      [`${featureName}.link.component`]: link,
    },

    defineUse: {
      [`${featureName}.route.component`]: route,
    },

    use: [['pagination.*', { required: false, type: fassetValidations.comp }]],
  },
  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <CategoryView> {{ curRootAppElm }} </CategoryView>;
  },
});
