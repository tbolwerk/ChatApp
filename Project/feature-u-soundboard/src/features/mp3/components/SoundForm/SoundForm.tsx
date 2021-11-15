import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import styles from './SoundForm.module.css';

const SoundForm = () => {
  const [name, setName] = useState<string>('');

  const handleUpload = () => {
    // TODO: Do file upload.
  };

  return (
    <div className={styles.form}>
      <TextField label={'Sound Name'} value={name} onChange={(e) => setName(e.target.value)} />
      <Input className={styles.input} type="file" />
      <Button onClick={handleUpload} variant={'contained'}>
        Upload MP3
      </Button>
    </div>
  );
};

export default SoundForm;
