import React from 'react';
import { useFassets } from 'feature-u';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const MainLayout = useFassets('baseUI.mainLayout');
  const Auth0Provider = useFassets('account.auth0Provider');
  const ThemeProvider = useFassets('theme.ThemeWrapper');

  const wrapInAuth0Provider = (children: JSX.Element) => <Auth0Provider>{children}</Auth0Provider>;
  const wrapInThemeProvider = (children: JSX.Element) => <ThemeProvider>{children}</ThemeProvider>;

  const app = (
    <BrowserRouter>
      <div className="app">
        <MainLayout />
      </div>
    </BrowserRouter>
  );
  const optionalWrappedInAuthProvider = Auth0Provider ? wrapInAuth0Provider(app) : app;
  return ThemeProvider
    ? wrapInThemeProvider(optionalWrappedInAuthProvider)
    : optionalWrappedInAuthProvider;
};

export default App;
