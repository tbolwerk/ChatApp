/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';

export interface Props {
  data: Array<any>;
}

export default function Pagination(props: Props) {
  const urlPageParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlPageParams.entries());
  const [page, setPage] = React.useState(params.page ?? '');
  console.log(page);
  return null;
}
