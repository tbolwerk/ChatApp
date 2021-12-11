import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { Navigate } from 'react-router-dom';

interface Props {
  link: string;
}

const ShareButton = ({ link }: Props) => {
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleRedirect = () => {
    setRedirect(true);
  };

  return redirect ? (
    <IconButton onClick={handleRedirect}>
      <ShareIcon />
    </IconButton>
  ) : (
    <Navigate to={link} />
  );
};

export default ShareButton;
