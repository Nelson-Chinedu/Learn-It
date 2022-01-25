import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Card } from 'src/components';

const StudentsGeolocation: FunctionComponent<Record<string, never>> = () => {
  return (
    <Card borderRadius="10px" width="100%" overflow="" height="350px">
      <Box style={{ padding: '20px' }}>
        <Typography variant="subtitle1">Students Geolocation Rate</Typography>
      </Box>
    </Card>
  );
};

export { StudentsGeolocation };
