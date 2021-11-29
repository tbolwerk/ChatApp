import React, { useEffect, useMemo, useState } from 'react';
import { ISound } from '../../interfaces/ISound';
import styles from './SoundContainer.module.css';
import SoundButton from '../SoundButton/SoundButton';
import config from '../../../../dotenv.config';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const SoundContainer = () => {
  const [sounds, setSounds] = useState<Array<ISound>>([]);
  const { user, getIdTokenClaims } = useAuth0();

  const filteredSounds = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(searchParams.entries());
    return sounds.filter(
      (s) =>
        params.search === undefined || s.name.toUpperCase().includes(params.search.toUpperCase()),
    );
  }, [sounds, window.location.search]);

  useEffect(() => {
    const getSounds = async () => {
      try {
        const token = await getIdTokenClaims();
        if (token) {
          console.log(config.apiEndpoint);
          const res = await Axios.get<Array<ISound>>(`${config.apiEndpoint}/sounds`, {
            headers: {
              authorization: `Bearer ${token.__raw}`,
            },
          });
          setSounds(
            res.data.map((s) => {
              s.path = `${config.apiEndpoint}/${s.path}`;
              return s;
            }),
          );
        }
      } catch (e) {
        throw e;
      }
    };

    getSounds().catch((e) => console.log(e));
  }, [user]);

  const renderSoundButtons = () => {
    return filteredSounds.map((s) => {
      return <SoundButton key={s.path} sound={s} />;
    });
  };

  return <div className={styles.container}>{renderSoundButtons()} </div>;
};

export default SoundContainer;
