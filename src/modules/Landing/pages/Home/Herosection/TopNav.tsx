import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Button } from 'src/components/Button';

import { NAVBAR } from 'src/constant/navbar';
import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

const Topnav: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        borderBottom: '1px solid rgba(0,0,0,.12)',
        background: '#fff',
        zIndex: 4,
        width: '100%',
        height: '65px',
      }}
    >
      <Toolbar disableGutters sx={{ width: '95%', margin: 'auto' }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        >
          LearnIT
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Grid container spacing={3} alignItems="center">
            {NAVBAR.map((menu: string) => (
              <Grid item key={menu}>
                <Typography variant="body2">{menu}</Typography>
              </Grid>
            ))}
            <Grid item>
              <Button
                href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
                variant="outlined"
              >
                Sign in
              </Button>
            </Grid>
            <Grid item>
              <Button href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNUP}`}>
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </Box>
  );
};
export default Topnav;
