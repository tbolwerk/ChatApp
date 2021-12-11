import React from 'react';
import { render } from '@testing-library/react';
import AccountPage from './AccountPage';

jest.mock('@auth0/auth0-react', () => ({
  withAuthenticationRequired: (component: React.ReactNode, _) => component,
  useAuth0: () => {
    return {
      user: { name: 'user', picture: 'placeholder' },
    };
  },
}));

jest.mock('feature-u', () => {
  return {
    useFassets: (x: string) =>
      x == 'play.soundContainer' || x == 'upload.form' ? () => <div /> : undefined,
  };
});

describe('Account page', () => {
  test('Renders', () => {
    render(<AccountPage />);
  });
});
