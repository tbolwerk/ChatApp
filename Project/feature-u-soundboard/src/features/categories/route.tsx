import React from 'react';
import CategoryView from './component/CategoryView';
import { IRoute } from '../../interfaces/IRoute';
import featureName from './featureName';
import { Link } from 'react-router-dom';
import capitalize from '../../util/capitalize';

const featurePathUrl = `/${featureName}`;

export const route: IRoute = {
  url: featurePathUrl,
  Content: CategoryView,
};

export const link = () => <Link to={featurePathUrl}>{capitalize(featureName)}</Link>;
