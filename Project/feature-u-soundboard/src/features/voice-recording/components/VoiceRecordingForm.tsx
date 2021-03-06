import { Button, Snackbar, Alert, TextField } from '@mui/material';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styles from './VoiceRecordingForm.module.css';
import { Stop } from '@mui/icons-material';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import config from '../../../dotenv.config';
import Loading from '../../common/baseUI/component/Loading';

interface Props {
  didUpload: boolean;
  setDidUpload: Dispatch<SetStateAction<boolean>>;
}

const VoiceRecordingForm = ({ didUpload, setDidUpload }: Props) => {
  const [name, setName] = useState<string>('');
  const [recorder, setRecorder] = useState<MediaRecorder>(null);
  const [recording, setRecording] = useState<boolean>(false);
  const [audioBlob, setAudioBlob] = useState<Blob>(null);
  const [player, setPlayer] = useState<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const { getIdTokenClaims } = useAuth0();

  const handleClose = () => {
    setShowSnackbar(false);
  };

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
    const handleUpload = async () => {
      try {
        if (name && audioBlob) {
          const token = await getIdTokenClaims();
          const fd = new FormData();
          fd.set('name', name);
          fd.set('sound', audioBlob);
          setUploading(true);
          await Axios.post(`${config.apiEndpoint}/sounds`, fd, {
            headers: {
              authorization: `Bearer ${token.__raw}`,
            },
          }).then(() => {
            setName('');
            setShowSnackbar(true);
            setUploading(false);
            setDidUpload(!didUpload);
          });
        } else {
          alert('Fill in all the fields!');
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (audioBlob && !recording) {
      return (
        <Button onClick={handleUpload} variant={'contained'}>
          {uploading ? <Loading /> : 'Upload'}
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
      <Snackbar open={showSnackbar} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Sound uploaded!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default VoiceRecordingForm;
