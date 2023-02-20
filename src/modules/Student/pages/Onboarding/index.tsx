import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Loader from 'src/assets/images/shape-loader.gif';

import MentorList from 'src/modules/Student/pages/Onboarding/MentorList';

import { useVerifyPaymentQuery } from 'src/modules/Student/services/studentSlice';

import useLocalStorage from 'src/hooks/useLocalStorage';

const Onboarding: FunctionComponent<Record<never, string>> = () => {
  const navigate = useNavigate();
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [, setStoredIsSubscribed] = useLocalStorage('csu', false);
  const { data, isSuccess } = useVerifyPaymentQuery(
    { reference: referenceId },
    {
      skip: !referenceId,
    }
  );

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

  if (data && isSuccess) {
    setTimeout(() => {
      setStoredIsSubscribed(true);
      setIsSettingUp(false);
      navigate('/s/dashboard');
    }, 10000);
  }

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
          Please wait while we setup your dashboard
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
          Select a Mentor to guide your journey to success
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
        <Box sx={{ margin: '2em 1em' }}>
          <MentorList onSuccess={onSuccess} onClose={onClose} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Onboarding;
