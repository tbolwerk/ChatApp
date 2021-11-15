import React, { useState } from 'react';
import { ISound } from '../../interfaces/ISound';
import styles from './SoundContainer.module.css';
import SoundButton from '../SoundButton/SoundButton';

const SoundContainer = () => {
  const [sounds, setSounds] = useState<Array<ISound>>([
    {
      id: '43',
      name: 'Johnny',
      url: 'https://www.mboxdrive.com/7th.mp3',
    },
    {
      id: '43',
      name: 'Johnny',
      url: 'https://www.mboxdrive.com/7th.mp3',
    },
    {
      id: '43',
      name: 'Johnny',
      url: 'https://www.mboxdrive.com/7th.mp3',
    },
    {
      id: '43',
      name: 'Johnny',
      url: 'https://www.mboxdrive.com/7th.mp3',
    },
  ]);

  const renderSoundButtons = () => {
    return sounds.map((s) => {
      return <SoundButton key={s.id} sound={s} />;
    });
  };

  return <div className={styles.container}>{renderSoundButtons()} </div>;
};

export default SoundContainer;
