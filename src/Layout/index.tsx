import { FunctionComponent, ReactNode } from 'react';
import Box from '@mui/material/Box';

import { SideNavigation, TopNavigation } from 'src/components';

import useUserProfile from 'src/hooks/useUserProfile';

import { useStyles } from 'src/Layout/styled.layout';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  const { data, isSuccess } = useUserProfile();

  return (
    <Box className={classes.root}>
      <Box component="nav" className="sidenav-wrapper">
        <SideNavigation />
      </Box>
      <Box component="main" sx={{ width: '82%', marginLeft: '18%' }}>
        <TopNavigation isSuccess={isSuccess} data={data} />
        <Box sx={{ marginTop: '5em' }}>{children}</Box>
      </Box>
    </Box>
  );
};

export { Layout };
