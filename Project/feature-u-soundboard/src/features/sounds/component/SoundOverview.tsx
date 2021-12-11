/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useMemo, useState } from 'react';
import { ISound } from '../interfaces/ISound';
import config from '../../../dotenv.config';
import Axios from 'axios';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Grid, Pagination } from '@mui/material';
import MediaControlCard from './MediaControlCard';
import { useFassets } from 'feature-u';
import { useTheme } from '@mui/material/styles';
export default function SoundOverview({ category }) {
  const theme = useTheme();

  const init_sounds = [
    { title: 'scream' },
    { title: 'boo' },
    { title: 'boink' },
    { title: 'donky' },
    { title: 'lightning' },
    { title: 'sirene' },
  ];

  const [sounds, setSounds] = useState<Array<ISound>>([]);

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
  const entriesPerPage = 3;

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const filteredSounds = sounds.filter(
    (x) =>
      params.search === undefined || x.name.toUpperCase().includes(params.search.toUpperCase()),
  );
  const start: number = parseInt(params.page, 10) ?? 1;
  const end = start + entriesPerPage;
  const pagedSounds =
    params.page === undefined ? filteredSounds : filteredSounds?.slice(start - 1, end - 1);

  const PaginationFeature = useFassets('pagination.PaginationFeature');
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {pagedSounds.map((sound, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <MediaControlCard
            title={sound.name}
            subtitle={category ?? 'Sound'}
            imageUrl={`https://picsum.photos/id/${index}/1600/900`}
            sound={sound}
          />
        </Grid>
      ))}
      {PaginationFeature && <PaginationFeature data={sounds} />}
    </Grid>
  );
}
