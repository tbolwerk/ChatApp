import React from 'react';
import { createFeature } from 'feature-u';
import PaginationFeature from './component/Pagination';

export default createFeature({
  name: 'pagination',
  // our public face ...
  fassets: {
    define: {
      'pagination.PaginationFeature': PaginationFeature,
    },

    defineUse: {},

    use: [],
  },

  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <> {curRootAppElm} </>;
  },
});
