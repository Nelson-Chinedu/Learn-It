import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useStyles } from 'src/components/Navigation/styled.navigation';

import {
  STUDENT_SIDENAV_MENU,
  TEACHER_SIDENAV_MENU,
} from 'src/constant/sidenav';

const SideNavigation: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const SIDE_MENUS = pathname.includes('app')
    ? TEACHER_SIDENAV_MENU
    : STUDENT_SIDENAV_MENU;

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" className={classes.logo}>
        LearnIT
      </Typography>
      <Box style={{ margin: '2em 0px 3em' }}>
        {SIDE_MENUS.map(({ menu, path }: { menu: string; path: string }) => (
          <Link
            to={path}
            key={menu}
            className={
              pathname.includes(path) ? classes.active : classes.inactive
            }
          >
            <Typography variant="subtitle2">{menu}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export { SideNavigation };
