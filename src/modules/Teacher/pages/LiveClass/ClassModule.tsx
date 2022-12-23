import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ModuleList from 'src/modules/Teacher/pages/LiveClass/ModuleList';
import CreateModule from 'src/modules/Teacher/pages/LiveClass/CreateModule';

const ClassModule: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box>
      <Grid container justifyContent="space-between" alignItems="baseline">
        <Grid item md={5}>
          <CreateModule />
        </Grid>
        <Grid item md={6}>
          <ModuleList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClassModule;
