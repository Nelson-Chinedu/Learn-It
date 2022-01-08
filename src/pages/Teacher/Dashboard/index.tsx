import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import { Layout } from 'src/Layout/Teacher';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import { Transaction } from 'src/pages/Teacher/Dashboard/Transaction';
import { TopCourse } from 'src/pages/Teacher/Dashboard/TopCourse';
import { TopEngagement } from 'src/pages/Teacher/Dashboard/TopEngagement';

// import { Card } from 'src/components';

const TOTAL_FIGURES = [
  { value: '72K', title: 'Total Students' },
  { value: '360', title: 'Live Courses' },
  { value: '260', title: 'Total Videos' },
  { value: '$45000', title: 'Total Earnings' },
];

const useStyles = makeStyles({
  root: {
    '& .top': {
      textAlign: 'center',
    },
    '& .topWrapper': {
      background: 'white',
      padding: '2em',
      borderRadius: '10px',
      boxShadow:
        '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 5%) !important',
    },
  },
});

const TeacherDashboard: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <Grid container spacing={2} className="top">
          {TOTAL_FIGURES.map((figure: { value: string; title: string }) => (
            <Grid item md={3}>
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

export { TeacherDashboard };
