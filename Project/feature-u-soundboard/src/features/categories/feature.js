import React from 'react';
import { createFeature, fassetValidations } from 'feature-u';
import CategoryView from './component/CategoryView';

export default createFeature({
  name: 'categories',
  enabled: false,

  // our public face ...
  fassets: {
    define: {},

    defineUse: {},

    use: [['sounds.*', { required: true, type: fassetValidations.comp }]],
  },
  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return (
      <CategoryView Category={fassets.sounds.SoundOverview}> {{ curRootAppElm }} </CategoryView>
    );
  },
});
