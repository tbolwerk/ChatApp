/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Header from './Header';
import { useFassets } from 'feature-u';
import { Routes, Route } from 'react-router-dom';
import { IRoute } from '../../../../interfaces/IRoute';

export default function MainLayout() {
  const routes: Array<IRoute> = useFassets('*.route.component');
  const linkComponents: Array<React.ComponentClass<any>> = useFassets('*.link.component');

  return (
    <div className="layout">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <Header sections={linkComponents} title={'Soundboard'} />
      <main>
        <Routes>
          {routes.map(({ url, Content }: IRoute, index) => (
            <Route key={index} path={url} element={<Content />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}
