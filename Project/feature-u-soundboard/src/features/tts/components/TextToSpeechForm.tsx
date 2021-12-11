import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from './TextToSpeechForm.module.css';
import config from '../../../dotenv.config';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const TextToSpeechForm = () => {
  const [text, setText] = useState<string>('');
  const [creating, setCreating] = useState<boolean>(false);

  const { getIdTokenClaims } = useAuth0();

  const handleCreate = async () => {
    try {
      if (text) {
        const token = await getIdTokenClaims();
        setCreating(true);
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
        );
        setCreating(false);
        setText('');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.form}>
      <TextField label={'Text-To-Speech'} value={text} onChange={(e) => setText(e.target.value)} />
      <div className={styles.buttonContainer}>
        <Button disabled={creating} onClick={handleCreate} variant={'contained'}>
          Create TTS
        </Button>
      </div>
    </div>
  );
};

export default TextToSpeechForm;
