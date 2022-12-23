import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { Card, Input } from 'src/components';

import { ListTable } from 'src/modules/Teacher/pages/Students/ListTable';

const StudentList: FunctionComponent<Record<string, never>> = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};
  return (
    <Card borderRadius="10px" width="100%" overflow="" height="450px">
      <Box style={{ padding: '20px' }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item md={3}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item md={5}>
                <Typography variant="subtitle1">Student List</Typography>
              </Grid>
              <Grid item md={6}>
                <Input
                  select
                  label="Sort By"
                  variant="outlined"
                  color="primary"
                  name="sort"
                  size="small"
                  handleChange={handleChange}
                  onBlur={handleChange}
                  fullWidth
                >
                  <MenuItem>All Student</MenuItem>
                </Input>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <Input
              variant="outlined"
              color="primary"
              name="search"
              size="small"
              label="Search"
              fullWidth
              handleChange={handleChange}
              onBlur={handleChange}
            />
          </Grid>
        </Grid>
        <Box style={{ margin: '2em 0px 0px' }}>
          <ListTable />
        </Box>
      </Box>
    </Card>
  );
};

export { StudentList };
