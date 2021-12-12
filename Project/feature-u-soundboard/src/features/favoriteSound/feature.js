import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import featureName from './featureName';
import FavoriteStar from './component/favoriteStar';
import { FavoriteFilterContainer, useFavoriteFilter } from './component/favoriteFilterContainer';
import FavoriteFilterButton from './component/favoriteFilterButton';
import config from '../../feature_config.json';

export default createFeature({
  name: featureName,
  enabled: config.Favorites,
  // our public face ...
  fassets: {
    define: {
      [`${featureName}.FavoriteStar`]: FavoriteStar,
      [`${featureName}.FavoriteFilterButton`]: FavoriteFilterButton,
      [`${featureName}.FavoriteFilterContainer`]: FavoriteFilterContainer,
      [`${featureName}.useFavoriteFilter`]: useFavoriteFilter,
    },

    defineUse: {},

    use: [],
  },

  appWillStart({ fassets, curRootAppElm }) {
    console.assert(
      fassets.hasFeature('account'),
      `Error: Account feature is needed in order to use the ${featureName} feature`,
    );
    return <>{curRootAppElm}</>;
  },
});
