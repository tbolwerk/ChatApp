import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: { name: 'user', picture: 'placeholder' },
  }),
}));

describe('Avatar', () => {
  test('Renders', () => {
    render(<Avatar />);
  });
});
