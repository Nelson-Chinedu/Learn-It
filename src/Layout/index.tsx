import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

import { SideNavigation, TopNavigation } from 'src/components';

import useMenu from 'src/hooks/useMenu';

import { Wrapper } from 'src/Layout/styled.layout';

import { ILayout } from 'src/interface/layout';

import { RootState } from 'src/store';

import { handleSidenav } from 'src/features/sidenavSlice';

import { useGetUserProfileQuery } from 'src/services/userSlice';

const Layout: FunctionComponent<ILayout> = ({ children, sidenav }) => {
  const { isCollapsedSidenav } = useSelector(
    (state: RootState) => state.sidenav,
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { data, isSuccess } = useGetUserProfileQuery();
  const { open, anchorEl, handleClick, handleClose } = useMenu();

  const path = pathname.includes('m') ? '/m' : '/s';

  const _handleSidenav = () => {
    dispatch(handleSidenav(!isCollapsedSidenav));
  };

  return (
    <Wrapper isCollapsedSidenav={isCollapsedSidenav}>
      <Box component="nav" className="sidenav-wrapper">
        <SideNavigation SIDE_MENUS={sidenav} sidenav={_handleSidenav} />
      </Box>
      <Box
        component="main"
        sx={{
          width: isCollapsedSidenav ? '95%' : '82%',
          marginLeft: isCollapsedSidenav ? '5%' : '18%',
        }}
      >
        <TopNavigation
          isSuccess={isSuccess}
          data={data}
          path={path}
          open={open}
          anchorEl={anchorEl}
          handleClick={handleClick}
          handleClose={handleClose}
        />
        <Box
          sx={{
            margin: '5em auto',
            width: '95%',
          }}
        >
          {children}
        </Box>
      </Box>
    </Wrapper>
  );
};

export { Layout };
