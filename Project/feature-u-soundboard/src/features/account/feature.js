import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';

import _account from './feature';

import HeaderAuthenticationButton from './components/HeaderAuthenticationButton';
import Auth0Provider from './components/Auth0Provider';

export default createFeature({
  name: 'account',

  // our public face ...
  fassets: {
    define: {
      'account.headerAuthenticationButton': HeaderAuthenticationButton,
      'account.auth0Provider': Auth0Provider,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    return <>{curRootAppElm}</>;
  },
});
