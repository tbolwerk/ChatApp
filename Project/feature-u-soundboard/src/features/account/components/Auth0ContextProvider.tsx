import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0Wrapper = (props: { children: React.ReactChild }) => {
  return (
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      redirectUri={window.location.origin}>
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0Wrapper;
