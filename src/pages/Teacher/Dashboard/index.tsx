import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import { Layout } from 'src/Layout/Teacher';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Transaction } from 'src/pages/Teacher/Dashboard/Transaction';
import { TopCourse } from 'src/pages/Teacher/Dashboard/TopCourse';
import { TopEngagement } from 'src/pages/Teacher/Dashboard/TopEngagement';

import { useStyles } from 'src/pages/Teacher/Dashboard/styled.dashboard';

import { TOTAL_FIGURES } from 'src/constant/figureCount';

const TeacherDashboard: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <Grid container spacing={2} className="top">
          {TOTAL_FIGURES.map((figure: { value: string; title: string }) => (
            <Grid item md={3} key={figure.title}>
              <Box className="topWrapper">
                <Typography variant="subtitle1">{figure.value}</Typography>
                <Typography variant="subtitle2">{figure.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          style={{
            height: '690px',
            marginTop: '1em',
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={8}>
              <Transaction />
            </Grid>
            <Grid item md={4}>
              <Grid
                container
                direction="column"
                spacing={3}
                justifyContent="space-between"
              >
                <Grid item md={6}>
                  <TopCourse />
                </Grid>
                <Grid item md={6}>
                  <TopEngagement />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default TeacherDashboard;
