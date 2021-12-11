import { DialogTitle, Dialog, IconButton, DialogContent, Alert } from '@mui/material';
import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';

interface Props {
  link: string;
}

const ShareButton = ({ link }: Props) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const openDialog = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
  };

  return (
    <>
      <IconButton onClick={openDialog}>
        <ShareIcon />
      </IconButton>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>Click on the link to copy it.</DialogTitle>
        <DialogContent>
          <span style={{ cursor: 'pointer' }} onClick={copyToClipboard}>
            {link}
          </span>
          {copied && <Alert severity="success">Link succesfully copied!</Alert>}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareButton;
