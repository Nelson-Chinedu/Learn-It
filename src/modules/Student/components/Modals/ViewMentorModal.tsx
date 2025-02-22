import { FunctionComponent } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { PaystackProps } from 'react-paystack/dist/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Modal, Button } from 'src/components';

import { useStyles } from 'src/modules/Student/components/Modals/styled.viewMentorModal';

import useModal from 'src/hooks/useModal';

import { Props } from 'src/types/paystack';

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
          <Typography variant="body2">Position:</Typography>
          <Typography variant="subtitle2">{state?.data?.bio?.title}</Typography>
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
            {state?.data?.bio?.availabilty ? 'Yes' : 'Currently not available'}
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
