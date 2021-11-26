import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';

import Searchbar from './component/Searchbar';

export default createFeature({
  name: 'search',
  enabled: true,
  // our public face ...
  fassets: {
    define: {
      'search.Searchbar': Searchbar,
    },

    defineUse: {},

    use: [],
  },
});
