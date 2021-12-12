/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Header from './Header';
import { useFassets } from 'feature-u';
import { Routes, Route } from 'react-router-dom';
import { IRoute } from '../../../../interfaces/IRoute';
import { useTheme } from '@mui/material/styles';

export default function MainLayout() {
  const routes: Array<IRoute> = useFassets('*.route.component');
  const linkComponents: Array<React.ComponentClass<any>> = useFassets('*.link.component');
  const theme = useTheme();

  return (
    <div
      className="layout"
      style={{
        backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
        color: theme.palette.mode === 'dark' ? 'white' : 'black',
        height: '100vh',
      }}>
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <Header sections={linkComponents} title={'Soundboard'} />
      <main
        style={{
          backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
          height: '100vh',
        }}>
        <Routes>
          {routes.map(({ url, Content }: IRoute, index) => (
            <Route key={index} path={url} element={<Content />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}
