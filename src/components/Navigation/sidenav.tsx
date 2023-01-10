import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { useStyles } from 'src/components/Navigation/styled.navigation';

import { ISidenav, IRoute } from 'src/interface/sidenav';

const SideNavigation: FunctionComponent<ISidenav> = ({ SIDE_MENUS }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Box className={classes.root}>
      <Stack
        className={classes.logo}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">LearnIT</Typography>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Stack>
      <Box style={{ margin: '3em 0px 3em' }}>
        {SIDE_MENUS.map(({ menu, path }: IRoute) => (
          <Link
            to={path}
            key={menu}
            className={
              pathname.includes(path) ? classes.active : classes.inactive
            }
          >
            <Typography variant="subtitle2" className="menu">
              {menu}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export { SideNavigation };
