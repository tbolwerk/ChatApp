/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { Pagination } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
export interface Props {
  data: Array<any>;
  entrySize: number;
}

export default function PaginationFeature({ data, entrySize }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event, value: number) => {
    setSearchParams(new URLSearchParams(`?page=${value}`));
  };

  const params = Object.fromEntries(searchParams.entries());
  const page: number = parseInt(params.page, 10) ?? 1;

  return (
    <Pagination count={Math.ceil(data.length / entrySize)} onChange={handleChange} page={page} />
  );
}
