import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { Card, Input } from 'src/components';

const StudentsEnrolled: FunctionComponent<Record<string, never>> = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};
  return (
    <Card borderRadius="10px" width="100%" overflow="" height="350px">
      <Box style={{ padding: '20px' }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item md={8}>
            <Typography variant="subtitle1">
              Students Enrolled &amp; Left
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Input
              select
              label="Year"
              variant="outlined"
              color="primary"
              name="year"
              size="small"
              handleChange={handleChange}
              fullWidth
            >
              <MenuItem>2022</MenuItem>
            </Input>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export { StudentsEnrolled };
