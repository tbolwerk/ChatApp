import React, { useEffect, useMemo, useState } from 'react';
import { ISound } from '../../interfaces/ISound';
import styles from './SoundContainer.module.css';
import SoundButton from '../SoundButton/SoundButton';
import config from '../../../../dotenv.config';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
  soundChanged?: boolean;
}

const SoundContainer = ({ soundChanged }: Props) => {
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
          return await Axios.get<Array<ISound>>(`${config.apiEndpoint}/sounds`, {
            headers: {
              authorization: `Bearer ${token.__raw}`,
            },
          });
        }
      } catch (e) {
        throw e;
      }
    };

    getSounds()
      .then((res) => {
        setSounds(
          res.data.map((s) => {
            s.path = `${config.apiEndpoint}/${s.path}`;
            return s;
          }),
        );
      })
      .catch((e) => console.log(e));
  }, [user, soundChanged]);

  const handleSoundUpdate = (sound: ISound, newSound: ISound) => {
    const newSounds = sounds.map((s) =>
      s.name == sound.name && s.path == sound.path && s.user == sound.user ? newSound : s,
    );
    setSounds(newSounds);
  };

  const renderSoundButtons = () => {
    return filteredSounds.map((s) => {
      return <SoundButton key={s.path} sound={s} updateSound={handleSoundUpdate} />;
    });
  };

  return <div className={styles.container}>{renderSoundButtons()}</div>;
};

export default SoundContainer;
