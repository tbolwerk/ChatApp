/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useFassets } from 'feature-u';
import Sounds from './SoundOverview';

const SoundsPage = () => {
  const FavoriteFilterContainer = useFassets('favoriteSound.FavoriteFilterContainer');

  if (FavoriteFilterContainer) {
    return (
      <FavoriteFilterContainer>
        <Sounds />
      </FavoriteFilterContainer>
    );
  } else {
    return <Sounds />;
  }
};

export default SoundsPage;
