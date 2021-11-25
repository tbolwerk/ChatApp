/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import CategoryView from './component/CategoryView';
import featureName from './featureName';
import route from './route';
export default createFeature({
  name: featureName,
  enabled: true,

  // our public face ...
  fassets: {
    define: {},

    defineUse: {
      [`${featureName}.route.component`]: route,
    },

    use: [['sounds.*', { required: true, type: fassetValidations.comp }]],
  },
  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <CategoryView> {{ curRootAppElm }} </CategoryView>;
  },
});
