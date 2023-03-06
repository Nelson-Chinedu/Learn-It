import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from '@mui/material/IconButton';

import { Drawer } from 'src/components';

import MentorList from 'src/modules/Student/pages/Onboarding/MentorList';
import useDrawer from 'src/hooks/useDrawer';

import {
  useSubscribeMutation,
  useVerifyPaymentQuery,
} from 'src/modules/Student/services/studentSlice';

import useModal from 'src/hooks/useModal';
import useLocalStorage from 'src/hooks/useLocalStorage';
import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const NewMentorDrawer: FunctionComponent<Record<never, string>> = () => {
  const [state, setState] = useDrawer();
  const [modal, _] = useModal();
  const [, setMentor] = useLocalStorage('cmid', '');
  const [referenceId, setReferenceId] = useState('');
  const { userId } = useSelector((state: RootState) => state.account);
  const [subscribe] = useSubscribeMutation();

  useEffect(() => {
    if (modal.modalName) {
      setMentor(modal?.data?.id);
    }
  }, [modal]);

  const { data } = useVerifyPaymentQuery(
    { reference: referenceId },
    {
      skip: !referenceId,
    }
  );

  useEffect(() => {
    const subscription = async () => {
      const payload = {
        card: JSON.stringify(data?.payload),
        mentorId: JSON.parse(localStorage.getItem('cmid') as string),
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
  }, [data, modal?.modalName]);

  const handleClose = () => {
    setState({ ...state, drawerName: '' });
  };

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
    <Drawer customWidth={'1000px'} drawerName="newMentor">
      <Box sx={{ padding: '' }}>
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
        <Box sx={{ padding: '7em 1.5em ' }}>
          <MentorList onSuccess={onSuccess} onClose={onClose} />
        </Box>
      </Box>
    </Drawer>
  );
};

export default NewMentorDrawer;
