import { FunctionComponent } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Details } from 'src/modules/Student/pages/Profile/Details';
import { useStyles } from 'src/modules/Student/pages/Profile/styled.profile';

const Profile: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item md={6.5}>
          <Box style={{ padding: '20px' }} className="containerRight">
            <Details />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
