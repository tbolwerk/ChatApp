import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar as MuiAvatar } from '@mui/material';

const Avatar = () => {
  const { user } = useAuth0();

  return <MuiAvatar alt={(user && user.name) || 'profileImage'} src={user && user.picture} />;
};

export default Avatar;
