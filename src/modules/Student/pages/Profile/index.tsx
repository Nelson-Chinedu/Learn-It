import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import { Details } from 'src/modules/Student/pages/Profile/Details';

import { Wrapper } from 'src/modules/Student/pages/Profile/styled.profile';

const Profile: FunctionComponent<Record<string, never>> = () => {
  return (
    <Wrapper>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid size={{ md: 6.5 }}>
          <Box style={{ padding: '20px' }} className="containerRight">
            <Details />
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Profile;
