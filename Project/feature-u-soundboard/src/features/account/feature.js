import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import _account from './feature';
import featureName from './featureName';
import HeaderAccountGroup from './component/HeaderAccountGroup';
import Auth0Provider from './component/Auth0Provider';
import route from './route';

export default createFeature({
  name: featureName,
  enabled: true,
  // our public face ...
  fassets: {
    define: {
      [`${featureName}.HeaderAccountGroup`]: HeaderAccountGroup,
      [`${featureName}.auth0Provider`]: Auth0Provider,
    },

    defineUse: {
      [`${featureName}.route.component`]: route,
    },

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
