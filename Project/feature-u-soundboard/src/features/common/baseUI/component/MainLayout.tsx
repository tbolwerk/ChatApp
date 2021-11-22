import React from 'react';
import Header from './Header';
import { useFassets } from 'feature-u';

export default function MainLayout({ children }) {
  const Auth0Provider = useFassets('account.auth0Provider');

  const wrapInAuth0Provider = (children: JSX.Element) => <Auth0Provider>{children}</Auth0Provider>;

  const layout = (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <Header
        sections={[
          { title: 'categories', url: '#' },
          { title: 'theme', url: '#' },
        ]}
        title={'Soundboard'}
      />
      {children}
    </div>
  );

  return Auth0Provider ? wrapInAuth0Provider(layout) : layout;
}

// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
