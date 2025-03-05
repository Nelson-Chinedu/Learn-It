import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid2';
// import { Calendar } from '@natscale/react-calendar';

import { UpcomingTask } from 'src/modules/Student/pages/Dashbaord/UpcomingTask';
import { PaymentHistory } from 'src/modules/Student/pages/Dashbaord/PaymentHistory';
import { SubscribedMentors } from 'src/modules/Student/pages/Dashbaord/SubscribedMentors';

import { RootState } from 'src/store';

import NewMentorDrawer from 'src/modules/Student/components/Drawer/NewMentorDrawer';
import ViewMentorDrawer from 'src/modules/Student/components/Drawer/ViewMentorDrawer';

import {
  useSubscribeMutation,
  useVerifyPaymentQuery,
} from 'src/modules/Student/services/studentSlice';

import {
  AsideWrapper,
  GridWrapper,
} from 'src/modules/Student/pages/Dashbaord/styled.dashboard';
import useDrawer from 'src/hooks/useDrawer';
import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const Dashboard: FunctionComponent<Record<string, never>> = () => {
  const { isCollapsedSidenav } = useSelector(
    (state: RootState) => state.sidenav,
  );

  // const [value, setValue] = useState(new Date());
  // const onChange = useCallback(
  //   (val: Date) => {
  //     setValue(val);
  //   },
  //   [setValue],
  // );
  const [state, setState] = useDrawer();

  const [subscribe] = useSubscribeMutation();
  const { userId } = useSelector((state: RootState) => state.account);

  const [referenceId, setReferenceId] = useState('');

  const { data } = useVerifyPaymentQuery(
    { reference: referenceId },
    {
      skip: !referenceId,
    },
  );

  useEffect(() => {
    const subscription = async () => {
      const payload = {
        card: JSON.stringify(data?.payload),
        mentorId: state?.data?.id,
      };

      try {
        const res =
          referenceId && (await subscribe({ userId, data: payload }).unwrap());

        if (res) {
          setReferenceId('');
          setState({ ...state, drawerName: '' });
          successNotification(res?.message);
        }
      } catch (error) {
        setState({ ...state, drawerName: '' });
        errorNotification('An error occurred, Please try again');
      }
    };
    subscription();
  }, [data, state?.drawerName]);

  const onSuccess = (res: any) => {
    if (res) {
      setReferenceId(res.reference);
    }
  };

  const onClose = () => {
    // eslint-disable-next-line no-console
    console.log('closed');
  };

  return (
    <>
      <GridWrapper
        container
        justifyContent="space-between"
        sx={{ width: '100%' }}
      >
        <Grid size={{ md: isCollapsedSidenav ? 9.3 : 8.8 }} component="section">
          <SubscribedMentors />
        </Grid>
        <AsideWrapper size={{ md: 2.5 }}>
          {/* <Calendar value={value} onChange={onChange} /> */}
          <UpcomingTask />
          <PaymentHistory />
        </AsideWrapper>
      </GridWrapper>
      <NewMentorDrawer />
      <ViewMentorDrawer onSuccess={onSuccess} onClose={onClose} />
    </>
  );
};

export default Dashboard;
