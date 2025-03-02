import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import StudentList from 'src/modules/Teacher/pages/Students/List';

import TotalCount from 'src/modules/Teacher/pages/Students/Total';

const Student: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box component="section">
      <TotalCount />
      <Box style={{ marginTop: '1.5em' }}>
        <Grid container>
          <Grid item md={12}>
            <StudentList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Student;
