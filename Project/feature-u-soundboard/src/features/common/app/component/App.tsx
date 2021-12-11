import React from 'react';
import { useFassets } from 'feature-u';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const MainLayout = useFassets('baseUI.mainLayout');
  const Auth0Provider = useFassets('account.auth0Provider');

  const app = (
    <BrowserRouter>
      <div className="app">
        <MainLayout />
      </div>
    </BrowserRouter>
  );

  return Auth0Provider ? <Auth0Provider>{app}</Auth0Provider> : app;
};

export default App;
