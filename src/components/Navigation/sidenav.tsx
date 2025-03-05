import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';

import {
  Wrapper,
  LogoWrapper,
} from 'src/components/Navigation/styled.navigation';

import { ISidenav, IRoute } from 'src/interface/sidenav';

import { RootState } from 'src/store';

const SideNavigation: FunctionComponent<ISidenav> = ({
  SIDE_MENUS,
  sidenav,
}) => {
  const { pathname } = useLocation();
  const { isCollapsedSidenav } = useSelector(
    (state: RootState) => state.sidenav,
  );

  return (
    <Wrapper>
      <LogoWrapper
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          variant="h6"
          sx={{ display: isCollapsedSidenav ? 'none' : 'block' }}
        >
          LearnIT
        </Typography>
        <IconButton onClick={sidenav}>
          <MenuIcon />
        </IconButton>
      </LogoWrapper>
      <Box style={{ margin: '3em 0px 3em' }}>
        {SIDE_MENUS.map(({ menu, path, Icon, isComingSoon }: IRoute) => (
          <Link
            to={!isComingSoon && path}
            key={menu}
            className={pathname.includes(path) ? 'active' : 'inactive'}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: isCollapsedSidenav ? '1em 0px 1em .6em' : '1em 0px',
              padding: '1em 0px 1em 1em',
            }}
          >
            <Icon />
            {!isCollapsedSidenav && (
              <Typography
                variant="subtitle2"
                className="menu"
                sx={{ marginRight: '1em' }}
              >
                {menu}
                {isComingSoon && (
                  <Chip
                    label="Coming Soon"
                    size="small"
                    sx={{
                      height: '16px',
                      fontSize: '9px',
                      marginLeft: '1em',
                    }}
                  />
                )}
              </Typography>
            )}
          </Link>
        ))}
      </Box>
    </Wrapper>
  );
};

export { SideNavigation };
