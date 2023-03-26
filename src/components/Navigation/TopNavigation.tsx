import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Menu } from 'src/components';

import DefaultUser from 'src/assets/images/default_user.png';

import { IUserData } from 'src/interface/user';

import { RootState } from 'src/store';

import { useLogoutMutation } from 'src/modules/Auth/services/authSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

interface ITopNavigation {
  path: string;
  isSuccess: boolean;
  data: IUserData;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  anchorEl: Element | ((element: Element) => Element);
  handleClose: () => void;
}

const TopNavigation: FunctionComponent<ITopNavigation> = ({
  isSuccess,
  data,
  path,
  open,
  anchorEl,
  handleClick,
  handleClose,
}) => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { isCollapsedSidenav } = useSelector(
    (state: RootState) => state.sidenav
  );

  const _handleLogout = async () => {
    try {
      const res = await logout().unwrap();
      if (res.status === 200) {
        localStorage.removeItem('clu');
        localStorage.removeItem('csu');
        successNotification('Logout successful');
        navigate('/auth/signin', { replace: true });
      }
    } catch (error) {
      errorNotification('An error occured');
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        borderBottom: '1px solid #e3e0e0',
        position: 'fixed',
        zIndex: 9,
        background: 'white',
        width: isCollapsedSidenav ? '95%' : '82%',
      }}
    >
      <Toolbar disableGutters>
        <Grid container justifyContent="flex-end" alignItems="flex-end">
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
                  sx={{
                    width: 30,
                    height: 30,
                    textTransform: 'capitalize',
                    fontSize: '12px',
                  }}
                >
                  {`${data?.payload?.firstname?.charAt(
                    0
                  )} ${data?.payload?.lastname?.charAt(0)}`}
                </Avatar>
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
        handleClose={handleClose}
        menus={[
          { name: 'My Profile', path: `${path}/profile` },
          { name: 'Settings', path: `${path}/settings` },
          { name: 'Logout', path: '#', action: _handleLogout },
        ]}
      />
    </Container>
  );
};
export { TopNavigation };
