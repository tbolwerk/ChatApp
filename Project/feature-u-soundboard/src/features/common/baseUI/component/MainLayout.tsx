import React from 'react';
import Header from './Header';
import { Grid } from '@mui/material';
import MediaControlCard from '../../../sounds/component/MediaControlCard';
export default function MainLayout({ children }) {
  return (
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
}

// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
