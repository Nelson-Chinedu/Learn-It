import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';
import { NAVBAR } from 'src/constant/navbar';

const Wrapper = styled(Box)({
  position: 'fixed',
  borderBottom: '1px solid rgba(0,0,0,.12)',
  background: '#f8f9fc',
  zIndex: 4,
  width: '100%',
  '& .MuiToolbar-root': {
    width: '95%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const SidenavWrapper = styled(Box)({
  background: '#fff',
  height: '100vh',
  zIndex: 9,
  position: 'fixed',
  top: 0,
  width: '100%',
  '& a': {
    textDecoration: 'none',
    color: '#000',
  },
});

type Props = {
  handleToggleMenu: () => void;
  isToggle: boolean;
};

const TopnavMobile: FunctionComponent<Props> = ({
  handleToggleMenu,
  isToggle,
}) => {
  return (
    <>
      <Wrapper>
        <Toolbar disableGutters>
          <Typography variant="h6">LearnIT</Typography>
          <IconButton onClick={handleToggleMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Wrapper>
      {isToggle && (
        <SidenavWrapper>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '95%', margin: '.5em auto' }}
          >
            <Typography variant="h6">LearnIT</Typography>
            <IconButton onClick={handleToggleMenu}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Box component="nav" mt={4}>
            {NAVBAR.map((menu: { name: string; path: string }) => (
              <Link to={menu.path} onClick={handleToggleMenu} key={menu.name}>
                <Typography variant="body2" px={3} py={3}>
                  {menu.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </SidenavWrapper>
      )}
    </>
  );
};
export default TopnavMobile;
