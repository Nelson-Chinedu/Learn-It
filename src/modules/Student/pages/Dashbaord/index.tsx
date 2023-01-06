import { FunctionComponent, useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Calendar } from '@natscale/react-calendar';

import { UpcomingTask } from 'src/modules/Student/pages/Dashbaord/UpcomingTask';
import { PaymentHistory } from 'src/modules/Student/pages/Dashbaord/PaymentHistory';
import { MyCourses } from 'src/modules/Student/pages/Dashbaord/Courses';

import { useStyles } from 'src/modules/Student/pages/Dashbaord/styled.dashboard';

const Dashboard: FunctionComponent<Record<string, never>> = () => {
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
      justifyContent="space-between"
      className={classes.root}
      sx={{ width: '100%' }}
    >
      <Grid item md={9} component="section">
        <MyCourses />
      </Grid>
      <Grid item md={3} className={classes.aside} component="aside">
        <Calendar value={value} onChange={onChange} />
        <UpcomingTask />
        <PaymentHistory />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
