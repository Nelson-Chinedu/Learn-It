import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Card } from 'src/components';

const TopEngagement: FunctionComponent<Record<string, never>> = () => {
  return (
    <Card width="" height="335px" borderRadius="10px">
      <Box style={{ padding: '20px' }}>
        <Typography variant="subtitle2">Top Engagement</Typography>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export { TopEngagement };
