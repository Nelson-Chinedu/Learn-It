import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Layout } from 'src/Layout/Teacher';

import { StudentsGeolocation } from 'src/modules/Teacher/pages/Students/Geolocation';
import { StudentsEnrolled } from 'src/modules/Teacher/pages/Students/Enrolled';
import { StudentList } from 'src/modules/Teacher/pages/Students/List';

const Student: FunctionComponent<Record<string, never>> = () => {
  return (
    <Layout>
      <Box component="section">
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item md={7}>
            <StudentsEnrolled />
          </Grid>
          <Grid item md={5}>
            <StudentsGeolocation />
          </Grid>
        </Grid>
        <Box style={{ marginTop: '1.5em' }}>
          <Grid container>
            <Grid item md={12}>
              <StudentList />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Student;
