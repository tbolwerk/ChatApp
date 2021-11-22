import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useFassets } from 'feature-u';

const AccountPage = () => {
  const { user } = useAuth0();
  const Loading = useFassets('common.loading');

  const Page = () => (
    <div>
      <h1>Account info</h1>
      <img src={user.picture}></img>
    </div>
  );

  return withAuthenticationRequired(Page, {
    onRedirecting: () => <Loading />,
  });
};

export default AccountPage;
