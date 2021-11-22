import AccountPage from './components/AccountPage';
import { IRoute } from '../../interfaces/IRoute';
import featureName from './featureName';

const featurePathUrl = `/${featureName}`;

const route: IRoute = {
  url: featurePathUrl,
  Content: AccountPage,
};

export default route;
