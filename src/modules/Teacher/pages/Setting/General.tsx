import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { RootState } from 'src/store';

import useFetchMentorProfile from 'src/hooks/useFetchMentorProfile';

import { useUpdateBioMutation } from 'src/modules/Teacher/services/teacherSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const General: FunctionComponent<Record<never, string>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isSuccess } = useFetchMentorProfile();
  const [updateBio] = useUpdateBioMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    availability: false,
    acceptingMentees: false,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setGeneralSettings({
        availability: data?.payload?.bio?.availability,
        acceptingMentees: data?.payload?.bio?.acceptingMentees,
      });
    }
  }, [data, isSuccess]);

  const _handleToggle = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const payload = {
      [name]: checked,
    };

    try {
      await updateBio({ userId, payload }).unwrap();
      setIsSubmitting(false);
      setGeneralSettings(
        (prev: { availability: boolean; acceptingMentees: boolean }) => ({
          ...prev,
          [name]: checked,
        })
      );
      successNotification('Settings updated successfully');
    } catch (error) {
      setIsSubmitting(false);
      errorNotification('An error occurred, Please try again');
    }
  };

  const GENERAL_NOTIFICATION = [
    {
      title: 'Currently accepting mentees',
      value: generalSettings.acceptingMentees,
      name: 'acceptingMentees',
    },
    {
      title: 'Availability',
      value: generalSettings.availability,
      name: 'availability',
    },
  ];

  return (
    <Box sx={{ width: '70%', margin: '2em 0px' }}>
      {GENERAL_NOTIFICATION.map(
        (notification: { title: string; value: boolean; name: string }) => (
          <Stack
            key={notification.title as string}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="subtitle2">{notification.title}</Typography>
            <AntSwitch
              checked={notification.value}
              disabled={isSubmitting}
              onChange={_handleToggle}
              inputProps={{ 'aria-label': 'Switch' }}
              name={notification.name}
            />
          </Stack>
        )
      )}
    </Box>
  );
};

export default General;
