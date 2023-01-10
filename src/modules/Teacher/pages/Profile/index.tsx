import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Info from 'src/modules/Teacher/pages/Profile/Info';
import Form from 'src/modules/Teacher/pages/Profile/Form';
import { useStyles } from 'src/modules/Teacher/pages/Profile/styled.profile';

const Profile: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item md={4}>
          <Info />
        </Grid>
        <Grid item md={7.9}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
