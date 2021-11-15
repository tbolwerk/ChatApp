import React from 'react';
import './App.css';
import Header from './components/Header';
import SoundForm from './features/mp3/components/SoundForm/SoundForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <Header
        sections={[
          { title: 'categories', url: '#' },
          { title: 'theme', url: '#' },
        ]}
        title={'Soundboard'}
      />
      <SoundForm />
    </div>
  );
}

export default App;
