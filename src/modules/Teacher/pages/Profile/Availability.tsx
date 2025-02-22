import { ChangeEvent, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { RootState } from 'src/store';
import useFetchMentorProfile from 'src/hooks/useFetchMentorProfile';
import { useUpdateBioMutation } from 'src/modules/Teacher/services/teacherSlice';
import { useSelector } from 'react-redux';
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
const Availability = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isSuccess } = useFetchMentorProfile();
  const [updateBio] = useUpdateBioMutation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    availability: false,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setGeneralSettings({
        availability: data?.payload?.bio?.availability,
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
      setGeneralSettings((prev: { availability: boolean }) => ({
        ...prev,
        [name]: checked,
      }));
      successNotification('Profile updated successfully');
    } catch (error) {
      setIsSubmitting(false);
      errorNotification('An error occurred, Please try again');
    }
  };
  return (
    <Grid container alignItems="baseline" justifyContent="space-between" mb={5}>
      <Grid item>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Availability
        </Typography>
      </Grid>
      <Grid item>
        <AntSwitch
          checked={generalSettings.availability}
          disabled={isSubmitting}
          onChange={_handleToggle}
          inputProps={{ 'aria-label': 'Switch' }}
          name={'availability'}
        />
      </Grid>
    </Grid>
  );
};

export default Availability;
