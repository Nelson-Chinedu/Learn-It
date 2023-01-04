import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Task: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box>
      <Typography>Task here</Typography>
    </Box>
  );
};

export default Task;
