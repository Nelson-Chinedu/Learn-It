import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';

import { useStyles } from 'src/pages/Signup/styled.signup';

import GetStarted from 'src/assets/images/getStartedImage.webp';

const Signup: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};
  return (
    <Box className={classes.root}>
      <Grid container alignItems="center">
        <Grid item md={6} className={classes.imageWrapper}>
          <img src={GetStarted} />
        </Grid>
        <Grid item md={4} className={classes.formWrapper}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h2">Sign up</Typography>
            </Grid>
          </Grid>
          <form>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Input
                  label="Firstname*"
                  type="text"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="firstname"
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item sm={6}>
                <Input
                  label="Lastname*"
                  type="text"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="firstname"
                  handleChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Input
                  label="Email address*"
                  type="email"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="firstname"
                  handleChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Input
                  label="Password*"
                  type="password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="firstname"
                  handleChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                  size="large"
                >
                  Sign up
                </Button>
              </Grid>
              <Grid item className={classes.signin}>
                <Typography variant="subtitle2">
                  Already a member? <Link to="/signin">Sign in</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
