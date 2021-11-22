import React from 'react';
import { Grid } from '@mui/material';
import MediaControlCard from './MediaControlCard';

export default function SoundOverview({ category }) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <MediaControlCard
            title={category ?? 'Sound'}
            imageUrl={`https://picsum.photos/id/${index}/1600/900`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
