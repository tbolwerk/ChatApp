import * as React from 'react';
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
}

export default function MediaControlCard(props: MediaControlCardProps) {
  const theme = useTheme();
  const sound: ISound = { name: props.title, path: props.imageUrl, user: props.subtitle };

  const { name, path } = sound;

  const [audio] = useState(new Audio(path));
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    const handleEnd = () => setPlaying(false);
    audio.addEventListener('ended', handleEnd);
    return () => audio.removeEventListener('ended', handleEnd);
  }, []);

  const renderIcon = () => {
    return playing ? (
      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    ) : (
      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    );
  };

  const handlePlayStop = () => {
    audio.volume = 0.1;
    if (playing) {
      setPlaying(false);
      audio.pause();
    } else {
      setPlaying(true);
      audio.play().catch((e) => console.log(e));
    }
  };
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.subtitle}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={handlePlayStop}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.imageUrl}
        alt="Live from space album cover"
      />
    </Card>
  );
}
