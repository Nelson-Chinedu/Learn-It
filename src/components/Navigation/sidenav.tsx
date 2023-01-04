import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useStyles } from 'src/components/Navigation/styled.navigation';

import { ISidenav, IRoute } from 'src/interface/sidenav';

const SideNavigation: FunctionComponent<ISidenav> = ({ SIDE_MENUS }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" className={classes.logo}>
        LearnIT
      </Typography>
      <Box style={{ margin: '2em 0px 3em' }}>
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
