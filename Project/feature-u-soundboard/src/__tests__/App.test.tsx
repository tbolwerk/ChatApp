/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { render, screen } from '@testing-library/react';
import launchApp from '../App';
import allFeatures from '../features';

import baseUI from '../features/common/baseUI/feature';
import playControl from '../features/play-control/feature';
import soundUpload from '../features/soundUpload/feature';
import categories from '../features/categories/feature';
import sounds from '../features/sounds/feature';
import account from '../features/account/feature';
import app from '../features/common/app/feature';
import home from '../features/common/home/feature';
import search from '../features/search/feature';
import { AssertionError } from 'assert';

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: 'foobar' },
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
    };
  },
}));

describe('App feature configurations', () => {
  test('Renders with all features', () => {
    launchApp(allFeatures);
  });
  test('Renders with only the baseUI features', () => {
    launchApp([baseUI, app, home]);
  });
  test('Throws error because account is not available', () => {
    expect(() => launchApp([baseUI, app, home, playControl])).toThrow(AssertionError);
  });
  test('Renders without soundUpload', () => {
    launchApp([sounds, categories, search, playControl, account, baseUI, app, home]);
  });
  test('Renders without search and categories', () => {
    launchApp([sounds, soundUpload, playControl, account, baseUI, app, home]);
  });
});
