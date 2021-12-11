/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { amber, deepOrange, grey, orange } from '@mui/material/colors';
import React from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const lightTheme = {
  primary: amber,
  divider: amber[200],
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
};

const darkTheme = {
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: deepOrange[900],
    paper: deepOrange[900],
  },
  text: {
    primary: '#fff',
    secondary: grey[500],
  },
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightTheme : darkTheme),
  },
});

const ThemeWrapper = (props: { children: React.ReactChild }) => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>props.children</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeWrapper;
