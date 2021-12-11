import React from 'react';
import { render } from '@testing-library/react';
import HeaderAccountGroup from './HeaderAccountGroup';

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: true,
  }),
}));

jest.mock('feature-u', () => {
  return {
    useFassets: (x: string) =>
      x == 'play.soundContainer' || x == 'upload.form' ? () => <div /> : undefined,
  };
});

describe('Header account group', () => {
  test('Renders', () => {
    render(<HeaderAccountGroup />);
  });
});
