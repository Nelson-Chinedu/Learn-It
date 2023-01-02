import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Menu } from 'src/components';

import DefaultUser from 'src/assets/images/default_user.png';

import useMenu from 'src/hooks/useMenu';
import { IUser } from 'src/hooks/useUserProfile';

const TopNavigation: FunctionComponent<IUser> = ({ isSuccess, data }) => {
  const { pathname } = useLocation();
  const { open, anchorEl, handleClick, handleClose } = useMenu();

  const path = pathname.includes('app') ? '/app' : '';

  return (
    <Container
      maxWidth="xl"
      sx={{
        borderBottom: '1px solid #e3e0e0',
        position: 'fixed',
        zIndex: 2,
        background: 'white',
        width: '82%',
      }}
    >
      <Toolbar disableGutters>
        <Grid container justifyContent="flex-end" alignItems="flex-end">
          <Grid item>
            <Grid
              container
              spacing={2}
              alignItems="flex-end"
              justifyContent="center"
            >
              <Grid item>
                <NotificationsNoneOutlinedIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Avatar
                  alt="Profile picture"
                  src={data?.payload?.picture || DefaultUser}
                  sx={{ width: 30, height: 30 }}
                />
              </Grid>
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  onClick={handleClick}
                  className="menu"
                >
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {(data &&
                        isSuccess &&
                        `${data.payload.firstname} ${data.payload.lastname}`) ||
                        'Welcome'}
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
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        menus={[
          { name: 'My Profile', path: `${path}/profile` },
          { name: 'Settings', path: `${path}/settings` },
          { name: 'Logout', path: '#' },
        ]}
      />
    </Container>
  );
};
export { TopNavigation };
