import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { useFassets } from 'feature-u';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

interface HeaderProps {
  sections: ReadonlyArray<React.ComponentClass<any>>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  const HeaderAccountGroup = useFassets('account.HeaderAccountGroup');
  const Searchbar = useFassets('search.Searchbar');

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container sx={{ flex: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography component="h2" variant="h5" align="center" color="black" noWrap>
              {title}
            </Typography>
          </Link>
        </Container>
        {Searchbar && <Searchbar />}
        {HeaderAccountGroup && <HeaderAccountGroup />}
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
