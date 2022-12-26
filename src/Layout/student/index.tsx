import { FunctionComponent, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import DefaultUser from 'src/assets/images/default_user.png';

import { StudentSidenav } from 'src/components';

import { STUDENT as PAGE } from 'src/constant/pageTitle';

import useTeacherProfile from 'src/hooks/useTeacherProfile';

import { useStyles } from 'src/Layout/student/styled.student';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { data } = useTeacherProfile();
  const [{ name }] = PAGE.filter((page) => pathname.includes(page.path));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item sm={2}>
          <Box>
            <StudentSidenav />
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
                  <Avatar
                    alt="Profile picture"
                    src={data?.payload?.picture || DefaultUser}
                    sx={{ width: 35, height: 35 }}
                  />
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
                      <Typography
                        variant="subtitle2"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {(data &&
                          `${data?.payload?.firstname} ${data?.payload?.lastname}`) ||
                          ''}
                      </Typography>
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
