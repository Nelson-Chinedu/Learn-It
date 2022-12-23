import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useStyles } from 'src/modules/Home/PopularCourse/styled.popularcourse';

import Course from 'src/modules/Home/PopularCourse/Course';

const PopularCourse: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Container maxWidth="lg" className={classes.root}>
        <Box className={classes.title}>
          <Typography variant="h2">Our popular courses</Typography>
        </Box>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          spacing={2}
          className={classes.cardContainer}
        >
          <Course />
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularCourse;
