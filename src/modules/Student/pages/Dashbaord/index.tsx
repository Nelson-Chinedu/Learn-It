import { FunctionComponent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { Calendar } from '@natscale/react-calendar';

import { UpcomingTask } from 'src/modules/Student/pages/Dashbaord/UpcomingTask';
import { PaymentHistory } from 'src/modules/Student/pages/Dashbaord/PaymentHistory';
import { SubscribedMentors } from 'src/modules/Student/pages/Dashbaord/SubscribedMentors';

import { RootState } from 'src/store';

import NewMentorDrawer from 'src/modules/Student/components/Drawer/NewMentorDrawer';

import { useStyles } from 'src/modules/Student/pages/Dashbaord/styled.dashboard';

const Dashboard: FunctionComponent<Record<string, never>> = () => {
  const { isCollapsedSidenav } = useSelector(
    (state: RootState) => state.sidenav
  );
  const classes = useStyles();
  const [value, setValue] = useState(new Date());
  const onChange = useCallback(
    (val) => {
      setValue(val);
    },
    [setValue]
  );

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        className={classes.root}
        sx={{ width: '100%' }}
      >
        <Grid item md={isCollapsedSidenav ? 9.4 : 9} component="section">
          <SubscribedMentors />
        </Grid>
        <Grid item md={3} className={classes.aside} component="aside">
          <Calendar value={value} onChange={onChange} />
          <UpcomingTask />
          <PaymentHistory />
        </Grid>
      </Grid>
      <NewMentorDrawer />
    </>
  );
};

export default Dashboard;
