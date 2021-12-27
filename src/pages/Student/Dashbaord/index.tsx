import { FunctionComponent, useCallback, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Calendar } from '@natscale/react-calendar';

import { UpcomingTask } from 'src/pages/Student/Dashbaord/UpcomingTask';
import { PaymentHistory } from 'src/pages/Student/Dashbaord/PaymentHistory';
import { MyCourses } from 'src/pages/Student/Dashbaord/MyCourses';

import { useStyles } from 'src/pages/Student/Dashbaord/styled.dashboard';

const Dashbaord: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [value, setValue] = useState(new Date());
  const onChange = useCallback(
    (val) => {
      setValue(val);
    },
    [setValue]
  );
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid item md={9} component="section">
        <Box className={classes.topWrapper}>
          <Typography variant="subtitle1">Hi John Doe</Typography>
          <Typography variant="subtitle2">
            You have completed 0 courses{' '}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item>
            <MyCourses />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3}>
        <Box component="aside" className={classes.aside}>
          <Calendar value={value} onChange={onChange} />
          <UpcomingTask />
          <PaymentHistory />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashbaord;
