/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useMemo, useState } from 'react';
import { ISound } from '../interfaces/ISound';
import config from '../../../dotenv.config';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Pagination } from '@mui/material';
import MediaControlCard from './MediaControlCard';

export default function SoundOverview({ category }) {
  const init_sounds = [
    { title: 'scream' },
    { title: 'boo' },
    { title: 'boink' },
    { title: 'donky' },
    { title: 'lightning' },
    { title: 'sirene' },
  ];

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
        const res = await Axios.get<Array<ISound>>(`${config.apiEndpoint}/allsounds`);
        setSounds(
          res.data.map((s) => {
            s.path = `${config.apiEndpoint}/${s.path}`;
            return s;
          }),
        );
      } catch (e) {
        throw e;
      }
    };

    getSounds().catch((e) => console.log(e));
  }, []);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.location.assign(`?page=${page}`);
  };

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {filteredSounds.map((sound, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <MediaControlCard
            title={sound.name}
            subtitle={category ?? 'Sound'}
            imageUrl={`https://picsum.photos/id/${index}/1600/900`}
            sound={sound}
          />
        </Grid>
      ))}
      <Pagination count={sounds.length} onChange={handleChange} />
    </Grid>
  );
}
