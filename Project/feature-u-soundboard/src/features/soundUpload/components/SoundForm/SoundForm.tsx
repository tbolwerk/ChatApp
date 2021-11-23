import React, { ChangeEvent, useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import styles from './SoundForm.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import config from '../../../../dotenv.config';

const SoundForm = () => {
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<File | null>();
  const { user, getIdTokenClaims } = useAuth0();

  const handleUpload = async () => {
    // TODO: Do file upload.
    try {
      const token = await getIdTokenClaims();
      const fd = new FormData();
      fd.set('name', name);
      fd.set('sound', file);
      await Axios.post(`${config.apiEndpoint}/sounds`, fd, {
        headers: {
          authorization: `Bearer ${token.__raw}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.form}>
      <TextField label={'Sound Name'} value={name} onChange={(e) => setName(e.target.value)} />
      <Input
        className={styles.input}
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFile(e.target.files[0]);
        }}
      />
      <Button onClick={handleUpload} variant={'contained'}>
        Upload MP3
      </Button>
    </div>
  );
};

export default SoundForm;
