import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Info from 'src/pages/Teacher/Profile/Info';
import Form from 'src/pages/Teacher/Profile/Form';

import { Layout } from 'src/Layout/Teacher';
import { useStyles } from 'src/pages/Teacher/Profile/styled.profile';

const Profile: FunctionComponent<Record<string, never>> = () => {
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
