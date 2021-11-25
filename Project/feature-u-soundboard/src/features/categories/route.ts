import CategoryView from './component/CategoryView';
import { IRoute } from '../../interfaces/IRoute';
import featureName from './featureName';

const featurePathUrl = `/${featureName}`;

const route: IRoute = {
  url: featurePathUrl,
  Content: CategoryView,
};

export default route;
