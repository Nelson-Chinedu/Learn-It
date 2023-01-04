import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';

import { SideNavigation, TopNavigation } from 'src/components';

import useUserProfile from 'src/hooks/useUserProfile';
import useMenu from 'src/hooks/useMenu';

import { useStyles } from 'src/Layout/styled.layout';

import { ILayout } from 'src/interface/layout';

const Layout: FunctionComponent<ILayout> = ({ children, sidenav }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { data, isSuccess } = useUserProfile();
  const { open, anchorEl, handleClick, handleClose } = useMenu();

  const path = pathname.includes('m') ? '/m' : '/s';

  return (
    <Box className={classes.root}>
      <Box component="nav" className="sidenav-wrapper">
        <SideNavigation SIDE_MENUS={sidenav} />
      </Box>
      <Box component="main" sx={{ width: '82%', marginLeft: '18%' }}>
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
    </Box>
  );
};

export { Layout };
