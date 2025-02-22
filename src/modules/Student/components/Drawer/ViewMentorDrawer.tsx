import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { makeStyles } from '@mui/styles';
import { usePaystackPayment } from 'react-paystack';
import { PaystackProps } from 'react-paystack/dist/types';

import { Props } from 'src/types/paystack';

import { Button, Drawer } from 'src/components';

import { pxToRem } from 'src/helpers/formatFont';

import useDrawer from 'src/hooks/useDrawer';

import DefaultUser from 'src/assets/images/default__user.png';

const useStyles = makeStyles({
  root: {
    padding: '6em 2em 3em',
    '& .MuiTypography-subtitle2': {
      paddingBottom: '1em',
    },
    '& .MuiTypography-body2': {
      fontWeight: 600,
    },
    '& .MuiTypography-h3': {
      fontSize: pxToRem(20),
      fontWeight: 600,
      margin: '1em .6em',
    },
    '& .MuiButton-contained': {
      margin: '1em 0px',
    },
  },
  contentWrapper: {
    lineHeight: '1.8em',
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: 300,
    fontSize: '14px',
    marginLeft: '1em',
    '& h1, h2, h3, h4, h5, h6': {
      margin: '.8em 0px',
    },
  },
});

const ViewMentorDrawer: FunctionComponent<Props> = ({ onSuccess, onClose }) => {
  const classes = useStyles();

  const [state, setState] = useDrawer();

  const config: PaystackProps = {
    reference: new Date().getTime().toString(),
    email: 'LearnIT@email.com',
    // amount: Number(state?.data?.price) * 100,
    amount: Number(2000) * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_PUB_KEY as string,
    channels: ['card'],
  };

  const initializePayment = usePaystackPayment(config);

  const handleClose = () => {
    setState({ ...state, drawerName: '' });
  };

  return (
    <Drawer customWidth={'600px'} drawerName="viewMentor">
      <>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            margin: '0px 0px 5em',
            position: 'fixed',
            background: 'white',
            width: '100%',
            padding: '1em',
            zIndex: 4,
            borderBottom: '1px solid #e3e0e0',
          }}
        >
          <IconButton onClick={handleClose}>
            <KeyboardBackspaceIcon fontSize="medium" />
          </IconButton>
          <Typography variant="h5">Subscribe to a mentor</Typography>
        </Stack>
        <Box className={classes.root}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <img
              src={state.data?.picture || DefaultUser}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Fullname:</Typography>
            <Typography variant="subtitle2">
              {`${state?.data?.firstname} ${state?.data?.lastname}`}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">Position:</Typography>
            <Typography variant="subtitle2">
              {state?.data?.bio?.title}
            </Typography>
          </Box>
          {state?.data?.bio?.mentorBio && (
            <Box>
              <Typography variant="body2">Bio:</Typography>
              <Typography variant="subtitle2">
                {state?.data?.bio?.mentorBio}
              </Typography>
            </Box>
          )}
          {state?.data?.bio?.timezone && (
            <Box>
              <Typography variant="body2">Timezone:</Typography>
              <Typography variant="subtitle2">
                {state?.data?.bio?.timezone}
              </Typography>
            </Box>
          )}
          <Box>
            <Typography variant="body2">Availability:</Typography>
            <Typography variant="subtitle2">
              {state?.data?.bio?.availabilty
                ? 'Yes'
                : 'Currently not available'}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">Currently Accepting Mentee:</Typography>
            <Typography variant="subtitle2">
              {state?.data?.bio?.acceptingMentees
                ? 'Yes'
                : 'Currently not accepting mentees'}
            </Typography>
          </Box>
          {state?.data?.bio?.company && (
            <Box>
              <Typography variant="body2">Company:</Typography>
              <Typography variant="subtitle2">
                {state?.data?.bio?.company}
              </Typography>
            </Box>
          )}
          <Box>
            <Typography variant="body2">Years of Experience:</Typography>
            <Typography variant="subtitle2">
              {state?.data?.bio?.yearsOfExperience}
            </Typography>
          </Box>
          {state?.data?.bio?.price && (
            <Box>
              <Typography variant="body2">Fee:</Typography>
              <Typography variant="subtitle2">
                {`₦${state?.data?.bio?.price}`}
              </Typography>
            </Box>
          )}
          <Button
            size="large"
            handleClick={() => {
              initializePayment(onSuccess, onClose);
            }}
          >
            Continue
          </Button>
        </Box>
      </>
    </Drawer>
  );
};

export default ViewMentorDrawer;
