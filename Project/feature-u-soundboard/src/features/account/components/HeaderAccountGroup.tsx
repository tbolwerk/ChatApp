import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Avatar from './Avatar';
import { Grid } from '@mui/material';

const HeaderAccountGroup = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Grid spacing={2} sx={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
      {isAuthenticated ? (
        <>
          <Avatar />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </Grid>
  );
};

export default HeaderAccountGroup;
