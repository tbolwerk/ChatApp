import React from 'react';
import { useFassets } from 'feature-u';

const HomePage = () => {
  const Sounds = useFassets('sounds.SoundOverview');
  const Voice = useFassets('voice.form');

  return <Voice />;

  return Sounds ? <Sounds /> : <h1>Home</h1>;
};

export default HomePage;
