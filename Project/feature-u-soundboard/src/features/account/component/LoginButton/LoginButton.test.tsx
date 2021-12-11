import React from 'react';
import { render } from '@testing-library/react';
import LoginButton from './LoginButton';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}));

describe('Login button', () => {
  test('Renders', () => {
    render(<LoginButton />);
  });
});
