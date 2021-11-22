import React from 'react';
import { useFassets } from 'feature-u';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const MainLayout = useFassets('baseUI.mainLayout');
  const Auth0Provider = useFassets('account.auth0Provider');

  const wrapInAuth0Provider = (children: JSX.Element) => <Auth0Provider>{children}</Auth0Provider>;

  const app = (
    <BrowserRouter>
      <div className="app">
        <MainLayout />
      </div>
    </BrowserRouter>
  );

  return Auth0Provider ? wrapInAuth0Provider(app) : app;
};

export default App;
