import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, TextField, Alert, Snackbar } from '@mui/material';
import styles from './TextToSpeechForm.module.css';
import config from '../../../dotenv.config';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
  didUpload: boolean;
  setDidUpload: Dispatch<SetStateAction<boolean>>;
}

const TextToSpeechForm = ({ didUpload, setDidUpload }: Props) => {
  const [text, setText] = useState<string>('');
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const { getIdTokenClaims } = useAuth0();

  const handleClose = () => {
    setShowSnackbar(false);
  };

  const handleCreate = async () => {
    try {
      if (text) {
        const token = await getIdTokenClaims();
        await Axios.post(
          `${config.apiEndpoint}/tts`,
          {
            text: text,
          },
          {
            headers: {
              authorization: `Bearer ${token.__raw}`,
            },
          },
        ).then(() => {
          setShowSnackbar(true);
          setText('');
          setDidUpload(!didUpload);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.form}>
      <TextField label={'Text-To-Speech'} value={text} onChange={(e) => setText(e.target.value)} />
      <div className={styles.buttonContainer}>
        <Button onClick={handleCreate} variant={'contained'}>
          Create TTS
        </Button>
      </div>
      <Snackbar open={showSnackbar} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Sound uploaded!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TextToSpeechForm;
