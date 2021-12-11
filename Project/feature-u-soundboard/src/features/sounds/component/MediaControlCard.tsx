/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useFassets } from 'feature-u';
import { ISound } from '../interfaces/ISound';
import { useEffect, useState } from 'react';
import { Pause } from '@mui/icons-material';

interface MediaControlCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  sound: ISound;
  handleFavoriteChange: (sound: ISound, newSound: ISound) => void;
}

export default function MediaControlCard({
  sound,
  title,
  subtitle,
  imageUrl,
  handleFavoriteChange,
}: MediaControlCardProps) {
  const theme = useTheme();
  const FavoriteStar = useFassets('favoriteSound.FavoriteStar');

  const [audio] = useState(new Audio(sound.path));
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    const handleEnd = () => setPlaying(false);
    audio.addEventListener('ended', handleEnd);
    return () => audio.removeEventListener('ended', handleEnd);
  }, []);

  const handleFavoriteStarChange = () => {
    const newSound = sound;
    newSound.favorite = !sound.favorite;
    handleFavoriteChange(sound, newSound);
  };

  const handlePlayStop = () => {
    audio.volume = 1;
    if (playing) {
      setPlaying(false);
      audio.pause();
    } else {
      setPlaying(true);
      audio.play().catch((e) => console.log(e));
    }
  };

  const renderIcon = () => {
    return playing ? (
      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    ) : (
      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    );
  };

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {subtitle}
          </Typography>
          <FavoriteStar
            favorite={sound.favorite}
            name={sound.name}
            handleChange={handleFavoriteStarChange}
          />
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={handlePlayStop}>
            {playing ? (
              <Pause sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageUrl}
        alt="Live from space album cover"
      />
    </Card>
  );
}
