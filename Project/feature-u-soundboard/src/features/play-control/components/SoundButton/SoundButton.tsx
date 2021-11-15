import React, { useEffect, useState } from 'react';
import { ISound } from '../../interfaces/ISound';
import { Button } from '@mui/material';
import styles from './SoundButton.module.css';
import { Pause, PlayArrow } from '@mui/icons-material';

type Props = {
  sound: ISound;
};

const SoundButton = (props: Props) => {
  const { name, url } = props.sound;

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState<boolean>(false);

  const renderIcon = () => {
    return playing ? <Pause /> : <PlayArrow />;
  };

  const handlePlayStop = () => {
    // TODO: Play sound
    audio.volume = 0.2;
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
