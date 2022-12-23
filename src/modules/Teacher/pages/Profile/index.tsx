import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Info from 'src/modules/Teacher/pages/Profile/Info';
import Form from 'src/modules/Teacher/pages/Profile/Form';
import { useStyles } from 'src/modules/Teacher/pages/Profile/styled.profile';

import { Layout } from 'src/Layout/Teacher';

const Profile: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Info />
          </Grid>
          <Grid item md={8}>
            <Form />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Profile;
