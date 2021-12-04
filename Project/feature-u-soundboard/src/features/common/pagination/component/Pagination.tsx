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
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.location.assign(`?page=${page}`);
  };

  return <Pagination count={props.data.length} onChange={handleChange} />;
}
