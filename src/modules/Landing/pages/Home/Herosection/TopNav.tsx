import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Button } from 'src/components/Button';

import { NAVBAR } from 'src/constant/navbar';
import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

const Topnav: FunctionComponent<Record<string, never>> = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        >
          LearnIT
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Grid container spacing={3}>
            {NAVBAR.map((menu: string) => (
              <Grid item key={menu}>
                <Typography variant="subtitle2">{menu}</Typography>
              </Grid>
            ))}
            <Grid item>
              <Button
                href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
                color="primary"
                disableElevation={true}
                fullWidth={true}
                size="small"
              >
                Sign in
              </Button>
            </Grid>
            <Grid item>
              <Button
                href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNUP}`}
                variant="contained"
                color="primary"
                size="small"
                fullWidth={true}
                disableElevation={true}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default Topnav;
