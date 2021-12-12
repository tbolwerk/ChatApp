import React, { ChangeEvent, useRef, useState, SetStateAction, Dispatch } from 'react';
import { Button, Snackbar, Alert, Input, TextField } from '@mui/material';
import styles from './SoundForm.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import config from '../../../../dotenv.config';

interface Props {
  didUpload: boolean;
  setDidUpload: Dispatch<SetStateAction<boolean>>;
}

const SoundForm = ({ didUpload, setDidUpload }: Props) => {
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<File | null>();
  const fileInput = useRef<HTMLInputElement>();
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const { getIdTokenClaims } = useAuth0();

  const handleClose = () => {
    setShowSnackbar(false);
  };

  const handleUpload = async () => {
    try {
      if (name && file) {
        const token = await getIdTokenClaims();
        const fd = new FormData();
        fd.set('name', name);
        fd.set('sound', file);
        if (fileInput.current) {
          fileInput.current.value = '';
        }
        await Axios.post(`${config.apiEndpoint}/sounds`, fd, {
          headers: {
            authorization: `Bearer ${token.__raw}`,
          },
        }).then(() => {
          setName('');
          setShowSnackbar(true);
          setDidUpload(!didUpload);
        });
      } else {
        alert('Fill in all the fields!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.form}>
      <TextField label={'Sound Name'} value={name} onChange={(e) => setName(e.target.value)} />
      <Input
        ref={fileInput}
        className={styles.input}
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFile(e.target.files[0]);
        }}
      />
      <Button onClick={handleUpload} variant={'contained'}>
        Upload MP3
      </Button>
      <Snackbar open={showSnackbar} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Sound uploaded!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SoundForm;
