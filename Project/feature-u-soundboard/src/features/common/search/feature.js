import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';

import Searchbar from './components/Searchbar';

export default createFeature({
  name: 'search',

  // our public face ...
  fassets: {
    define: {
      'search.Searchbar': Searchbar,
    },

    defineUse: {},

    use: [],
  },
});
