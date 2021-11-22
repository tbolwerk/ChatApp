import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import styles from './SoundForm.module.css';
import {useAuth0} from "@auth0/auth0-react";
import Axios from "axios";

const SoundForm = () => {
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<File | null>();
  const { user } = useAuth0();

  const handleUpload = () => {
    // TODO: Do file upload.
      Axios.post(`${process.env.API_ENDPOINT}/sounds`, )
  };

  return (
    <div className={styles.form}>
      <TextField label={'Sound Name'} value={name} onChange={(e) => setName(e.target.value)} />
      <Input className={styles.input} type="file" onChange={(e) => {
          // setFile(e.target.value);
          console.log(e.target);
      }} />
      <Button onClick={handleUpload} variant={'contained'}>
        Upload MP3
      </Button>
    </div>
  );
};

export default SoundForm;
