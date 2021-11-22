import React from 'react';
import Header from './Header';
import { useFassets } from 'feature-u';
import { Routes, Route } from 'react-router-dom';
import { IRoute } from '../../../../interfaces/IRoute';

export default function MainLayout() {
  const routes: Array<IRoute> = useFassets('*.route.component');
  const linkComponents: Array<React.ComponentClass<any>> = useFassets('*.link.component');

  const UploadForm = useFassets('upload.form');

  const wrapInAuth0Provider = (children: JSX.Element) => <Auth0Provider>{children}</Auth0Provider>;

  return (
    <div className="layout">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <Header sections={linkComponents} title={'Soundboard'} />
      <main>
        <Routes>
          {routes.map(({ url, Content }: IRoute, index) => (
            <Route key={index} path={url} element={Content} />
          ))}
        </Routes>
        <h1>start</h1>
        {routes[0].Content}
        <h1>end</h1>
      </main>
    </div>
  );
}
