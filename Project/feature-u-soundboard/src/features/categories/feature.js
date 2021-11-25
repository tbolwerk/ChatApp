import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import CategoryView from './component/CategoryView';

export default createFeature({
  name: 'categories',
  enabled: true,
  // our public face ...
  fassets: {
    define: {},

    defineUse: {},

    use: [],
  },
  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <CategoryView> {curRootAppElm} </CategoryView>;
  },
});
