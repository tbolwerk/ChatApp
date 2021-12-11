/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useFassets } from 'feature-u';

const HomePage = () => {
  const Sounds = useFassets('sounds.SoundOverview');
  const FavoriteFilterContainer = useFassets('favoriteSound.FavoriteFilterContainer');

  if (Sounds) {
    if (FavoriteFilterContainer) {
      return (
        <FavoriteFilterContainer>
          <Sounds />
        </FavoriteFilterContainer>
      );
    } else {
      return <Sounds />;
    }
  } else {
    return <h1>Home</h1>;
  }
};

export default HomePage;
