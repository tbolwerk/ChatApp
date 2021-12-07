import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { Redirect } from 'react-router-dom';

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
    <Redirect to={link} />
  );
};

export default ShareButton;
