/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { IRoute } from '../../interfaces/IRoute';
import featureName from './featureName';
import { Link } from 'react-router-dom';
import capitalize from '../../util/capitalize';
import SoundOverview from './component/SoundOverview';

const featurePathUrl = `/${featureName}`;

export const route: IRoute = {
  url: featurePathUrl,
  Content: SoundOverview,
};

export const link = () => <Link to={featurePathUrl}>{capitalize(featureName)}</Link>;
