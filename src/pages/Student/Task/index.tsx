import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Layout } from 'src/Layout/student';

const Task: FunctionComponent<Record<string, never>> = () => {
  return (
    <Layout>
      <Box>
        <Typography>Task here</Typography>
      </Box>
    </Layout>
  );
};

export { Task };
