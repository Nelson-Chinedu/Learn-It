import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid2';

import Info from 'src/modules/Teacher/pages/Profile/Info';
import Form from 'src/modules/Teacher/pages/Profile/Form';
import { Wrapper } from 'src/modules/Teacher/pages/Profile/styled.profile';

const Profile: FunctionComponent = () => {
  return (
    <Wrapper>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid size={{ md: 4 }}>
          <Info />
        </Grid>
        <Grid size={{ md: 7.9 }}>
          <Form />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Profile;
