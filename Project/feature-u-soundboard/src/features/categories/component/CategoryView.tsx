import React, { useState } from 'react';
import { CardContent, Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useFassets } from 'feature-u';
//TODO: change to database call and seed this data on creation of database.
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
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params.search);
const filteredCategories = categories.filter(
  (x) => params.search === undefined || x.title.toUpperCase().includes(params.search.toUpperCase()),
);
const entriesPerPage = 3;
const start: number = parseInt(params.page, 10) ?? 1;
const end = start + entriesPerPage;
const pagedCategories =
  filteredCategories?.slice(start - 1, end - 1) ?? filteredCategories?.slice(0, entriesPerPage);
let categoriesList = pagedCategories;
function onHoverCard(e: any) {
  e.target.style.cursor = 'pointer';
}

function offHoverCard(e: any) {}

export default function CategoryView() {
  const Category = useFassets('sounds.SoundOverview');
  const PaginationFeature = useFassets('pagination.PaginationFeature');
  if (PaginationFeature === undefined) {
    categoriesList = filteredCategories;
  }
  const [selectedCategory, setSelectedCategory] = useState('');
  return selectedCategory != '' ? (
    <Category category={selectedCategory} />
  ) : (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(categoriesList).map((category, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card
            onMouseOver={onHoverCard}
            onMouseOut={offHoverCard}
            onClick={(e) => setSelectedCategory(category.title)}>
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
      <PaginationFeature data={categories} />
    </Grid>
  );
}
