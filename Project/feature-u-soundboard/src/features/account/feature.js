import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import _account from './feature';
import featureName from './featureName';
import HeaderAccountGroup from './components/HeaderAccountGroup';
import Auth0Provider from './components/Auth0Provider';
import route from './route';
import config from '../../feature_config.json';

export default createFeature({
  name: 'account',
  enabled: config.Account,
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
