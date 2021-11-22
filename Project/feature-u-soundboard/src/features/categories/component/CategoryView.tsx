import React, { useState } from 'react';
import { CardContent, Grid, Typography } from '@mui/material';
// import MediaControlCard from './MediaControlCard';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

const categories = [
  { title: 'Games', imageUrl: null },
  { title: 'Movies', imageUrl: null },
  { title: 'Television', imageUrl: null },
  { title: 'Viral', imageUrl: null },
  { title: 'Anime & Manga', imageUrl: null },
  { title: 'Sound effects', imageUrl: null },
  { title: 'Politics', imageUrl: null },
  { title: 'Music', imageUrl: null },
  { title: 'Memes', imageUrl: null },
  { title: 'Pranks', imageUrl: null },
  { title: 'Reactions', imageUrl: null },
  { title: 'Sports', imageUrl: null },
];

function onHoverCard(e: any) {
  e.target.style.cursor = 'pointer';
}

function offHoverCard(e: any) {}

export default function CategoryView({ Child }) {
  const [showChild, setShowChild] = useState(false);

  return showChild ? (
    <Child />
  ) : (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(categories).map((category, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card
            onMouseOver={onHoverCard}
            onMouseOut={offHoverCard}
            onClick={(e) => setShowChild(true)}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography>{category.title}</Typography>
              <CardMedia
                component="img"
                sx={{ width: 200, display: 'flex', alignItems: 'center' }}
                image={category.imageUrl ?? `https://picsum.photos/id/${index}/1600/900`}
                alt={category.title}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
