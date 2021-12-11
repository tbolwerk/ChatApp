/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { IRoute } from '../../interfaces/IRoute';
import featureName from './featureName';
import { Link } from 'react-router-dom';
import capitalize from '../../util/capitalize';
import SoundsPage from './component/SoundsPage';

const featurePathUrl = `/${featureName}`;

export const route: IRoute = {
  url: featurePathUrl,
  Content: SoundsPage,
};

export const link = () => <Link to={featurePathUrl}>{capitalize(featureName)}</Link>;
