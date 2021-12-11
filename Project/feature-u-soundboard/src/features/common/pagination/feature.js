import React from 'react';
import { createFeature } from 'feature-u';
import PaginationFeature from './component/Pagination';
import config from '../../../feature_config.json';
import featureName from './featureName';

export default createFeature({
  name: featureName,
  enabled: config.Pagination,
  // our public face ...
  fassets: {
    define: {
      [`${featureName}.PaginationFeature`]: PaginationFeature,
    },

    defineUse: {},

    use: [],
  },

  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <> {curRootAppElm} </>;
  },
});
