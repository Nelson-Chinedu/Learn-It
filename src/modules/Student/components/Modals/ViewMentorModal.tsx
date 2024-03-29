import { FunctionComponent } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { PaystackProps } from 'react-paystack/dist/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import { Modal, Button } from 'src/components';

import { pxToRem } from 'src/helpers/formatFont';

import useModal from 'src/hooks/useModal';

import { Props } from 'src/types/paystack';

const useStyles = makeStyles({
  root: {
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
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: 300,
    fontSize: '14px',
    marginLeft: '1em',
    '& h1, h2, h3, h4, h5, h6': {
      margin: '.8em 0px',
    },
  },
});

const ViewMentorModal: FunctionComponent<Props> = ({ onSuccess, onClose }) => {
  const classes = useStyles();
  const [state, setState] = useModal();

  const config: PaystackProps = {
    reference: new Date().getTime().toString(),
    email: 'LearnIT@email.com',
    // amount: Number(state?.data?.price) * 100,
    amount: Number(2000) * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_PUB_KEY as string,
    channels: ['card'],
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <Modal
      modalName="ViewMentors"
      title={`${state?.data?.firstname} ${state?.data?.lastname}`}
    >
      <Box className={classes.root}>
        <Box>
          <Typography variant="body2">Title:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.title || 'Software Engineer'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Bio:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.bio?.mentorBio}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Timezone:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.timezone || 'GMT+1'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Time:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.time || '2:00pm - 4:00pm'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Availability:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.availabilty || 'Yes'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Currently Accepting Mentee:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.accepting || 'Yes'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Company:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.company || 'State of mind'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Years:</Typography>
          <Typography variant="subtitle2">
            {state?.data?.experience || '4+'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Fee:</Typography>
          <Typography variant="subtitle2">
            {`₦${state?.data?.price || '3000'}`}
          </Typography>
        </Box>
        <Button
          size="large"
          handleClick={() => {
            setState({ ...state, modalName: '', data: null });
            initializePayment(onSuccess, onClose);
          }}
        >
          Continue
        </Button>
      </Box>
    </Modal>
  );
};

export default ViewMentorModal;
