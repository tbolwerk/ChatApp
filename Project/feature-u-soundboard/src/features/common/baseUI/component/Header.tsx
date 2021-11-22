import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { useFassets } from 'feature-u';

interface HeaderProps {
  sections: ReadonlyArray<React.ComponentClass<any>>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  const HeaderAccountGroup = useFassets('account.HeaderAccountGroup');

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}>
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <HeaderAccountGroup />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        {sections.map((Section, index) => (
          <Section
            color="inherit"
            noWrap
            variant="body2"
            sx={{ p: 1, flexShrink: 0 }}
            key={index}
          />
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
