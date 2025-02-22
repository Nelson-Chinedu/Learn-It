import { FunctionComponent, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { RootState } from 'src/store';

import Loader from 'src/assets/images/shape-loader.gif';

import MentorList from 'src/modules/Student/pages/Onboarding/MentorList';

import {
  useSubscribeMutation,
  useVerifyPaymentQuery,
} from 'src/modules/Student/services/studentSlice';

import useLocalStorage from 'src/hooks/useLocalStorage';
import useMenu from 'src/hooks/useMenu';
import useDrawer from 'src/hooks/useDrawer';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { TopNavigation } from 'src/components';

import { useGetUserProfileQuery } from 'src/services/userSlice';

const Onboarding: FunctionComponent<Record<never, string>> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { open, anchorEl, handleClick, handleClose } = useMenu();
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const { userId } = useSelector((state: RootState) => state.account);
  const [, setStoredIsSubscribed] = useLocalStorage('csu', false);
  const [state, setState] = useDrawer();
  const { data } = useVerifyPaymentQuery(
    { reference: referenceId, userId },
    {
      skip: !referenceId,
    }
  );
  const [subscribe] = useSubscribeMutation();
  const { data: userData, isSuccess } = useGetUserProfileQuery();

  const path = pathname.includes('m') ? '/m' : '/s';

  useEffect(() => {
    const subscription = async () => {
      const payload = {
        card: JSON.stringify(data?.payload),
        mentorId: state.data.id,
      };

      try {
        const res =
          referenceId && (await subscribe({ userId, data: payload }).unwrap());

        if (res) {
          setReferenceId('');
          setTimeout(() => {
            setStoredIsSubscribed(true);
            setIsSettingUp(false);
            setState({ ...state, drawerName: '', data: null });
            navigate('/s/dashboard');
            successNotification(res?.message);
          }, 10000);
        }
      } catch (error) {
        errorNotification('An error occurred, Please try again');
      }
    };
    subscription();
  }, [data]);

  const onSuccess = (res: any) => {
    if (res) {
      setIsSettingUp(true);
      setReferenceId(res.reference);
    }
  };

  const onClose = () => {
    // eslint-disable-next-line no-console
    console.log('closed');
  };

  if (isSettingUp) {
    return (
      <Box
        sx={{
          width: '50%',
          margin: '10em auto',
          textAlign: 'center',
        }}
      >
        <img src={Loader} style={{ width: '300px', height: '300px' }} />;
        <Typography variant="h3" sx={{ marginTop: '-3em' }}>
          Hang on tight while we setup your dashboard!
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid
        item
        md={4}
        sx={{
          background: '#0050C8',
          height: '100vh',
          position: 'fixed',
          top: 0,
          bottom: 0,
          width: '100%',
          color: 'white',
          padding: '3em !important',
        }}
      >
        <Typography
          variant="h1"
          sx={{ mt: '8em', lineHeight: '1.3em', fontSize: '1.8rem' }}
        >
          Achieve Your Goals, Find The Perfect Mentor.
        </Typography>
      </Grid>
      <Grid
        item
        md={8}
        sx={{
          marginLeft: '33.333333%',
          height: 'auto',
          paddingLeft: '0px !important',
        }}
      >
        <TopNavigation
          isSuccess={isSuccess}
          data={userData}
          path={path}
          open={open}
          anchorEl={anchorEl}
          handleClick={handleClick}
          handleClose={handleClose}
        />
        <Box sx={{ margin: '6em 1em 2em' }}>
          <MentorList onSuccess={onSuccess} onClose={onClose} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Onboarding;
