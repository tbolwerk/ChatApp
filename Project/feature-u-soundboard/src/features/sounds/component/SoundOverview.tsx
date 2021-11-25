import React from 'react';
import { Grid } from '@mui/material';
import MediaControlCard from './MediaControlCard';

export default function SoundOverview({ category }) {
  const sounds = [
    { title: 'scream' },
    { title: 'boo' },
    { title: 'boink' },
    { title: 'donky' },
    { title: 'lightning' },
    { title: 'sirene' },
  ];
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const filteredSounds = sounds.filter((x) =>
    x.title.toUpperCase().includes(params.search.toUpperCase()),
  );
  filteredSounds;
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {filteredSounds.map((sound, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <MediaControlCard
            title={sound.title}
            subtitle={category ?? 'Sound'}
            imageUrl={`https://picsum.photos/id/${index}/1600/900`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
