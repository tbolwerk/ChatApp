import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import Searchbar from './component/Searchbar';
import config from '../../feature_config.json';

export default createFeature({
  name: 'search',
  enabled: config.Search,
  // our public face ...
  fassets: {
    define: {
      'search.Searchbar': Searchbar,
    },

    defineUse: {},

    use: [],
  },
});
