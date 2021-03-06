import React from 'react';
import { createFeature } from 'feature-u';
import ToggleUITheme from './component/ToggleUITheme';
import featureName from './featureName';
import ThemeWrapper from './component/ThemeProvider';

export default createFeature({
  name: featureName,
  // our public face ...
  fassets: {
    define: {
      [`${featureName}.ToggleUITheme`]: ToggleUITheme,
      [`${featureName}.ThemeWrapper`]: ThemeWrapper,
    },

    defineUse: {},

    use: [],
  },

  // inject our baseUI components into the root of our app
  appWillStart({ fassets, curRootAppElm }) {
    return <> {curRootAppElm} </>;
  },
});
