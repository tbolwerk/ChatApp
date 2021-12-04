/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { Pagination } from '@mui/material';
import React from 'react';

export interface Props {
  data: Array<any>;
}

export default function PaginationFeature(props: Props) {
  const handleChange = (event, value: number) => {
    window.location.assign(`?page=${value}`);
  };

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const page: number = parseInt(params.page, 10) ?? 1;

  return <Pagination count={props.data.length} onChange={handleChange} page={page} />;
}
