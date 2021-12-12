/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from 'react';
import { ISound } from '../interfaces/ISound';
import config from '../../../dotenv.config';
import Axios from 'axios';
import { Grid, Box, Container } from '@mui/material';
import MediaControlCard from './MediaControlCard';
import { useFassets } from 'feature-u';

interface Props {
  category?: string;
}

export default function SoundOverview({ category }: Props) {
  const FavoriteFilterButton = useFassets('favoriteSound.FavoriteFilterButton');
  const useFavoriteFilter = useFassets('favoriteSound.useFavoriteFilter');

  const [sounds, setSounds] = useState<Array<ISound>>([]);
  const { filterOn } = useFavoriteFilter ? useFavoriteFilter() : { filterOn: false };

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

    getSounds().catch((e) => console.error(e));
  }, []);

  const handleFavoriteChange = (sound: ISound, newSound: ISound) => {
    const newSounds = sounds.map((s) =>
      s.name == sound.name && s.user == sound.user && s.path == sound.path ? newSound : s,
    );
    setSounds(newSounds);
  };

  const entriesPerPage = 3;

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const favoriteFilteredSounds = sounds.filter((s) => (filterOn ? s.favorite : true));
  const filteredSounds = favoriteFilteredSounds.filter(
    (s) =>
      params.search === undefined || s.name.toUpperCase().includes(params.search.toUpperCase()),
  );
  const start: number = parseInt(params.page, 10) ?? 1;
  const end = start + entriesPerPage;
  const pagedSounds =
    params.page === undefined ? filteredSounds : filteredSounds?.slice(start - 1, end - 1);

  const PaginationFeature = useFassets('pagination.PaginationFeature');
  return (
    <Container>
      <Container>{FavoriteFilterButton && <FavoriteFilterButton />}</Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {pagedSounds.map((sound, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <MediaControlCard
              title={sound.name}
              subtitle={category ?? 'Sound'}
              imageUrl={`https://picsum.photos/id/${index}/1600/900`}
              sound={sound}
              handleFavoriteChange={handleFavoriteChange}
            />
          </Grid>
        ))}
      </Grid>
      <Container sx={{ width: '100%' }}>
        <Box sx={{ margin: 'auto', width: 'fit-content' }}>
          {PaginationFeature && <PaginationFeature data={sounds} />}
        </Box>
      </Container>
    </Container>
  );
}
