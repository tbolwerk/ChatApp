import React from 'react';
import { createFeature } from 'feature-u';
import App from './component/App';
import featureName from './featureName';

export default createFeature({
  name: featureName,

  fassets: {
    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <App />;
  },
});
