import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Button } from 'src/components';

import Instructor from 'src/assets/images/instructor.gif';

import { useStyles } from 'src/pages/Home/BecomeInstructor/styled.becomeInstructor';

const BecomeInstructor: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
      >
        <Grid item sm={5}>
          <img
            src={Instructor}
            style={{
              width: '120%',
              height: '400px',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h3">Do you want to be an instructor?</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            error explicabo quasi exercitationem mollitia vero saepe distinctio,
            quod eaque doloremque placeat necessitatibus voluptatibus hic
            voluptatum incidunt corporis ut, expedita asperiores.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            size="large"
            fullWidth={false}
          >
            Join now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BecomeInstructor;
