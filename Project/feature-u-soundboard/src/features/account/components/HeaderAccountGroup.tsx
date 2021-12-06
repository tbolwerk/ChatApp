import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';

import { Grid } from '@mui/material';
import featureName from '../featureName';

const HeaderAccountGroup = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Grid sx={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
      {isAuthenticated ? (
        <>
          <Link to={`/${featureName}`}>
            <Avatar />
          </Link>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </Grid>
  );
};

export default HeaderAccountGroup;
