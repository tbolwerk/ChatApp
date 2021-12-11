import React from 'react';
import { render } from '@testing-library/react';
import LogoutButton from './LogoutButton';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    logout: jest.fn(),
  }),
}));

describe('Logout button', () => {
  test('Renders', () => {
    render(<LogoutButton />);
  });
});
