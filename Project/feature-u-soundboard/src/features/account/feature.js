import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';

import _account from './feature';

import HeaderAccountGroup from './components/HeaderAccountGroup';
import Auth0Provider from './components/Auth0Provider';

export default createFeature({
  name: 'account',

  // our public face ...
  fassets: {
    define: {
      'account.HeaderAccountGroup': HeaderAccountGroup,
      'account.auth0Provider': Auth0Provider,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
