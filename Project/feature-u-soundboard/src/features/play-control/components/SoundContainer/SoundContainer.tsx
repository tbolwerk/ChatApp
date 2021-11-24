import React, { useEffect, useState } from 'react';
import { ISound } from '../../interfaces/ISound';
import styles from './SoundContainer.module.css';
import SoundButton from '../SoundButton/SoundButton';
import config from '../../../../dotenv.config';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const SoundContainer = () => {
  const [sounds, setSounds] = useState<Array<ISound>>([
    {
      id: '43',
      name: 'Johnny',
      url: 'https://www.mboxdrive.com/7th.mp3',
    },
  ]);
  const { user, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const getSounds = async () => {
      try {
        const token = await getIdTokenClaims();
        console.log(config.apiEndpoint);
        if (token) {
          const res = await Axios.get(`${config.apiEndpoint}/sounds`, {
            headers: {
              authorization: `Bearer ${token.__raw}`,
            },
          });
          console.log(res);
        }
      } catch (e) {
        throw e;
      }
    };

    getSounds().catch((e) => console.log(e));
  }, [user]);

  const renderSoundButtons = () => {
    return sounds.map((s) => {
      return <SoundButton key={s.id} sound={s} />;
    });
  };

  return <div className={styles.container}>{renderSoundButtons()} </div>;
};

export default SoundContainer;
