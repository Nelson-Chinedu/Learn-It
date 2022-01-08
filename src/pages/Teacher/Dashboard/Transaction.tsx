import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Card } from 'src/components';

const Transaction: FunctionComponent<Record<string, never>> = () => {
  return (
    <Card width="" borderRadius="10px" height="700px" overflow="scroll">
      <Box style={{ padding: '20px' }}>
        <Grid container alignItems="flex-start" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2">Transactions</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">view all</Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export { Transaction };
