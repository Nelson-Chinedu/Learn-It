import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
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
import { BASE_PATHS, STUDENT_PATHS } from 'src/constant/path';

export interface ITopNavigation {
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
  const { pathname } = useLocation();
  const [logout] = useLogoutMutation();
  const { isCollapsedSidenav } = useSelector(
    (state: RootState) => state.sidenav,
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
        boxSizing: 'border-box',
        width: pathname.includes(
          `${BASE_PATHS.APP}/${STUDENT_PATHS.ONBOARDING}`,
        )
          ? '66.67%'
          : isCollapsedSidenav
            ? '95%'
            : '82%',
      }}
    >
      <Toolbar disableGutters>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          width={'100%'}
          spacing={3}
        >
          <Box>
            <NotificationsNoneOutlinedIcon fontSize="small" />
          </Box>
          <Box>
            <Avatar
              alt="Profile picture"
              src={(data && data?.payload?.picture) || DefaultUser}
              sx={{
                width: 30,
                height: 30,
                textTransform: 'capitalize',
                fontSize: '12px',
              }}
            >
              {`${
                data && data?.payload?.firstname?.charAt(0)
              } ${data && data?.payload?.lastname?.charAt(0)}`}
            </Avatar>
          </Box>
          <Grid
            container
            alignItems="center"
            onClick={handleClick}
            className="menu"
            sx={{ cursor: 'pointer' }}
          >
            <Grid>
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
            <Grid>
              <ArrowDropDownIcon fontSize="small" />
            </Grid>
          </Grid>
        </Stack>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        menus={[
          { name: 'My Profile', path: `${path}/profile` },
          { name: 'Settings', path: `${path}/settings` },
          { name: 'Logout', action: _handleLogout },
        ]}
      />
    </Container>
  );
};
export { TopNavigation };
