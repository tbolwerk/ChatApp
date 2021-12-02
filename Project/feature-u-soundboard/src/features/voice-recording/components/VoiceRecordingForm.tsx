import { Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './VoiceRecordingForm.module.css';
import { Stop } from '@mui/icons-material';

const VoiceRecordingForm = () => {
  const [name, setName] = useState<string>('');
  const [recorder, setRecorder] = useState<MediaRecorder>(null);
  const [recording, setRecording] = useState<boolean>(false);
  const [audioBlob, setAudioBlob] = useState<Blob>(null);
  const [player, setPlayer] = useState<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => setRecorder(new MediaRecorder(stream)))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const saveRecording = (e: BlobEvent) => {
      const audioBlob = new Blob([e.data]);
      setAudioBlob(audioBlob);
      const audioUrl = URL.createObjectURL(audioBlob);
      const p = new Audio(audioUrl);
      p.addEventListener('ended', () => setPlaying(false));
      setPlayer(p);
    };

    if (recorder) {
      recorder.addEventListener('dataavailable', saveRecording);
    }
  }, [recorder]);

  const renderPreviewButton = (): JSX.Element | undefined => {
    const handlePreview = () => {
      if (playing) {
        player.pause();
        setPlaying(false);
      } else {
        setPlaying((old) => !old);
        player.fastSeek(0);
        player.play().catch((e) => console.log(e));
      }
    };

    if (player && !recording) {
      return (
        <Button onClick={handlePreview} variant={'contained'}>
          {playing ? <Stop /> : 'Preview'}
        </Button>
      );
    }
  };

  const renderUploadButton = (): JSX.Element | undefined => {
    const handleUpload = () => {};

    if (audioBlob && !recording) {
      return (
        <Button onClick={handleUpload} variant={'contained'}>
          Upload
        </Button>
      );
    }
  };

  const handleRecord = () => {
    setRecording(true);
    recorder.start();
  };

  const handleStop = () => {
    setRecording(false);
    recorder.stop();
  };

  return (
    <div className={styles.form}>
      <TextField label={'Recording name'} value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={() => (recording ? handleStop() : handleRecord())} variant={'contained'}>
        {recording ? 'Stop' : 'Record'}
      </Button>
      {renderPreviewButton()}
      {renderUploadButton()}
    </div>
  );
};

export default VoiceRecordingForm;
