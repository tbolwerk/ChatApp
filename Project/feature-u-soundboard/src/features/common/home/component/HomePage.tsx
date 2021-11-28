import React from 'react';
import { IRoute } from '../../../../interfaces/IRoute';
import { useFassets } from 'feature-u';

const HomePage = () => {
  const SoundContainer = useFassets('play.soundContainer');
  const SoundForm = useFassets('upload.form');

  return (
    <>
      <h1>Home</h1>
      <SoundForm />
      <SoundContainer />
    </>
  );
};

export default HomePage;
