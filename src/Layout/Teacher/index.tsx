import { FunctionComponent, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import User from 'src/assets/images/Avatar.png';

import { TeacherSidenav, Menu } from 'src/components';

import useMenu from 'src/hooks/useMenu';

import { TEACHER as PAGE } from 'src/constant/pageTitle';

import { useStyles } from 'src/Layout/Teacher/styled.teacher';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { open, anchorEl, handleClick, handleClose } = useMenu();
  const [{ name }] = PAGE.filter((page) => pathname.includes(page.path));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item sm={2}>
          <Box>
            <TeacherSidenav />
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
                    src={User}
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
                  <Grid
                    container
                    alignItems="center"
                    onClick={handleClick}
                    className="menu"
                  >
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
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        menus={[
          { name: 'My Profile', path: '/app/profile' },
          { name: 'Settings', path: '/app/settings' },
          { name: 'Logout', path: '#' },
        ]}
      />
    </Box>
  );
};

export { Layout };
