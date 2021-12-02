import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from './TextToSpeechForm.module.css';

const TextToSpeechForm = () => {
  const [text, setText] = useState<string>('');
  const [url, setUrl] = useState<string>('#');

  const handlePreview = () => {
    if (text) {
      console.log('setting', text);
    }
  };

  return (
    <div className={styles.form}>
      <TextField label={'Text-To-Speech'} value={text} onChange={(e) => setText(e.target.value)} />
      <div className={styles.buttonContainer}>
        <a href={url}>Preview</a>
        <Button onClick={handlePreview} variant={'contained'}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default TextToSpeechForm;
