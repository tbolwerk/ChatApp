import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../common/baseUI/component/Loading';
import { useFassets } from 'feature-u';

const AccountPage = () => {
  const { user } = useAuth0();
  const Loading = useFassets('common.loading');

  return <img src={user.picture}></img>;
};

export default withAuthenticationRequired(AccountPage, {
  onRedirecting: () => <Loading />,
});
