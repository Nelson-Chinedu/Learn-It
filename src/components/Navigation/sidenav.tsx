import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useStyles } from 'src/components/Navigation/styled.sidenav';

import {
  STUDENT_SIDENAV_MENU,
  TEACHER_SIDENAV_MENU,
} from 'src/constant/sidenav';

const StudentSidenav: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" className={classes.logo}>
        LearnIT
      </Typography>
      <Box style={{ margin: '2em 0px 3em' }}>
        {STUDENT_SIDENAV_MENU.map(
          ({ menu, path }: { menu: string; path: string }) => (
            <Link
              to={path}
              key={menu}
              className={
                pathname.includes(path) ? classes.active : classes.inactive
              }
            >
              <Typography variant="subtitle2">{menu}</Typography>
            </Link>
          )
        )}
      </Box>
    </Box>
  );
};

const TeacherSidenav: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" className={classes.logo}>
        LearnIT
      </Typography>
      <Box style={{ margin: '2em 0px 3em' }}>
        {TEACHER_SIDENAV_MENU.map(
          ({ menu, path }: { menu: string; path: string }) => (
            <Link
              to={path}
              key={menu}
              className={
                pathname.includes(path) ? classes.active : classes.inactive
              }
            >
              <Typography variant="subtitle2">{menu}</Typography>
            </Link>
          )
        )}
      </Box>
    </Box>
  );
};

export { StudentSidenav, TeacherSidenav };
