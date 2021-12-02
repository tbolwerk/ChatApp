import React from 'react';
import { useFassets } from 'feature-u';

const HomePage = () => {
  const Sounds = useFassets('sounds.SoundOverview');
  const TTS = useFassets('tts.form');

  return <TTS />;

  return Sounds ? <Sounds /> : <h1>Home</h1>;
};

export default HomePage;
