import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import config from '../../../../dotenv.config';

const Auth0Wrapper = (props: { children: React.ReactChild }) => {
  return (
    <Auth0Provider
      domain={config.auth0Domain}
      clientId={config.auth0ClientID}
      redirectUri={window.location.origin}>
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0Wrapper;
