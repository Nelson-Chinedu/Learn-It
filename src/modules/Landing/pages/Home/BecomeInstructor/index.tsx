import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import { Button } from 'src/components';

import Instructor from 'src/assets/images/instructor.gif';

import { Wrapper } from 'src/modules/Landing/pages/Home/BecomeInstructor/styled.becomeInstructor';

const BecomeInstructor: FunctionComponent<Record<string, never>> = () => {
  return (
    <Wrapper maxWidth="lg">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
      >
        <Grid size={{ sm: 5 }}>
          <img
            src={Instructor}
            style={{
              width: '120%',
              height: '400px',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid size={{ sm: 6 }}>
          <Typography variant="h4">Do you want to be a MENTOR?</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            error explicabo quasi exercitationem mollitia vero saepe distinctio,
            quod eaque doloremque placeat necessitatibus voluptatibus hic
            voluptatum incidunt corporis ut, expedita asperiores.
          </Typography>
          <Button size="large" fullWidth={false}>
            Join now
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default BecomeInstructor;
