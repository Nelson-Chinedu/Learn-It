import { FunctionComponent, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import User from 'src/assets/images/Avatar.png';

import { Sidenav } from 'src/components/Navigation/sidenav';

import { useStyles } from 'src/Layout/student/styled.student';

type Props = {
  children: ReactNode;
};

const PAGE = [
  {
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/course',
    name: 'My courses',
  },
];

const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [{ name }] = PAGE.filter((page) => pathname.includes(page.path));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item sm={2}>
          <Box>
            <Sidenav />
          </Box>
        </Grid>
        <Grid item sm={10}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="flex-end"
            style={{ marginBottom: '1em' }}
          >
            <Grid item>
              <Typography variant="h4">{name}</Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <NotificationsNoneOutlinedIcon fontSize="small" />
                </Grid>
                <Grid item>
                  <Avatar src={User} className={classes.avatar} />
                </Grid>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography variant="subtitle2">John Doe</Typography>
                    </Grid>
                    <Grid item>
                      <ArrowDropDownIcon fontSize="small" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export { Layout };
