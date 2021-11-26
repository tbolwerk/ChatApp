import React, { useEffect, useState } from 'react';
import { ISound } from '../../interfaces/ISound';
import { Button } from '@mui/material';
import styles from './SoundButton.module.css';
import { Pause, PlayArrow } from '@mui/icons-material';

type Props = {
  sound: ISound;
};

const SoundButton = (props: Props) => {
  const { name, path } = props.sound;

  const [audio] = useState(new Audio(path));
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    const handleEnd = () => setPlaying(false);
    audio.addEventListener('ended', handleEnd);
    return () => audio.removeEventListener('ended', handleEnd);
  }, []);

  const renderIcon = () => {
    return playing ? <Pause /> : <PlayArrow />;
  };

  const handlePlayStop = () => {
    audio.volume = 0.1;
    if (playing) {
      setPlaying(false);
      audio.pause();
    } else {
      setPlaying(true);
      audio.play().catch((e) => console.log(e));
    }
  };

  return (
    <Button
      style={{
        padding: 20,
        margin: 5,
      }}
      variant={'outlined'}
      className={styles.button}
      onClick={handlePlayStop}>
      {name}
      {renderIcon()}
    </Button>
  );
};

export default SoundButton;
