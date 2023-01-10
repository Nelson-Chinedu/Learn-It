import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Button } from 'src/components';

import TopNavigation from 'src/modules/Landing/pages/Home/Herosection/TopNav';

import HerosectionImage from 'src/assets/images/student.gif';

import { useStyles } from 'src/modules/Landing/pages/Home/Herosection/styled.herosection';

const Home: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TopNavigation />
      <Box sx={{ width: '95%', margin: 'auto' }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={5}>
            <Typography
              variant="h1"
              sx={{ fontSize: '5.25rem !important', lineHeight: '5.75rem' }}
            >
              Get Ready for Take-Off
            </Typography>
            <Typography variant="h3" sx={{ margin: '.5em 0px 1em' }}>
              Get the skills of tomorrow by learning from the best curated
              courses.
            </Typography>
            <Box>
              <Button
                size="large"
                fullWidth={false}
                sx={{ padding: '1.5em 3em' }}
              >
                Join for Free
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src={HerosectionImage}
              alt="An illustration of man typing on a laptop"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
