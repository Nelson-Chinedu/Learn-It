import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import { Layout } from 'src/Layout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Transaction } from 'src/modules/Teacher/pages/Dashboard/Transaction';
import { TopCourse } from 'src/modules/Teacher/pages/Dashboard/TopCourse';
import { TopEngagement } from 'src/modules/Teacher/pages/Dashboard/TopEngagement';

import { useStyles } from 'src/modules/Teacher/pages/Dashboard/styled.dashboard';

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
