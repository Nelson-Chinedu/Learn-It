import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';

import { Button } from 'src/components/Button';

import { NAVBAR } from 'src/constant/navbar';
import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

const Wrapper = styled(Box)<{ isVisible: boolean }>(({ isVisible }) => ({
  position: 'fixed',
  borderBottom: !isVisible && '1px solid rgba(0,0,0,.12)',
  background: '#f8f9fc',
  zIndex: 4,
  width: '100%',
  height: '65px',
}));

type Props = {
  isVisible: boolean;
};

const TopnavDesktop: FunctionComponent<Props> = ({ isVisible }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <Toolbar disableGutters sx={{ width: '95%', margin: 'auto' }}>
        <Grid
          size={{ xs: 12 }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid size={{ md: 4 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              LearnIT
            </Typography>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Box component="nav">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={6}
              >
                {NAVBAR.map((menu: { name: string; path: string }) => (
                  <Typography variant="body2" key={menu.name}>
                    {menu.name}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={4}
            >
              <Button
                href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
                variant="outlined"
                fullWidth={false}
              >
                Sign in
              </Button>
              <Button
                href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNUP}`}
                fullWidth={false}
              >
                Sign up
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </Wrapper>
  );
};
export default TopnavDesktop;
