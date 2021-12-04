/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Grid, Pagination } from '@mui/material';
import MediaControlCard from './MediaControlCard';
import { useFassets } from 'feature-u';
export default function SoundOverview({ category }) {
  const sounds = [
    { title: 'scream' },
    { title: 'boo' },
    { title: 'boink' },
    { title: 'donky' },
    { title: 'lightning' },
    { title: 'sirene' },
  ];

  const entriesPerPage = 3;

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const filteredSounds = sounds.filter(
    (x) =>
      params.search === undefined || x.title.toUpperCase().includes(params.search.toUpperCase()),
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
            title={sound.title}
            subtitle={category ?? 'Sound'}
            imageUrl={`https://picsum.photos/id/${index}/1600/900`}
          />
        </Grid>
      ))}
      <PaginationFeature data={sounds} />
    </Grid>
  );
}
