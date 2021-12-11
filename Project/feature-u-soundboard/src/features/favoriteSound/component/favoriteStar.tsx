import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import config from '../../../dotenv.config';

interface Props {
  favorite: boolean;
  name: string;
  handleChange: () => void;
}

const FavoriteStar = ({ favorite, name, handleChange }: Props) => {
  const { getIdTokenClaims } = useAuth0();

  const toggleFavorite = async () => {
    try {
      const token = await getIdTokenClaims();
      handleChange();

      await Axios.put(
        `${config.apiEndpoint}/sounds/favorite`,
        { name, favorite: !favorite },
        {
          headers: {
            authorization: `Bearer ${token.__raw}`,
          },
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <IconButton onClick={toggleFavorite}>{favorite ? <StarIcon /> : <StarBorderIcon />}</IconButton>
  );
};

export default FavoriteStar;
