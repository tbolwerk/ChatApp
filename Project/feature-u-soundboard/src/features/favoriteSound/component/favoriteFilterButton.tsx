import React from 'react';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';
import { useFavoriteFilter } from './favoriteFilterContainer';

const FavoriteFilterButton = () => {
  const { filterOn, setFilterOn } = useFavoriteFilter();

  const handleFilterChange = () => {
    setFilterOn(!filterOn);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch />}
        label="Filter favorites"
        labelPlacement="start"
        onChange={handleFilterChange}
      />
    </FormGroup>
  );
};

export default FavoriteFilterButton;
