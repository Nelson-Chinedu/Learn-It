import { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import { Button } from 'src/components';

import { RootState } from 'src/store';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { useUpdateBioMutation } from 'src/modules/Teacher/services/teacherSlice';

import { Input } from 'src/components';
import useFetchMentorProfile from 'src/hooks/useFetchMentorProfile';

const TIMEZONES = [
  { label: 'GMT+1', value: 'GMT+1' },
  { label: 'GMT+2', value: 'GMT+2' },
  { label: 'GMT+3', value: 'GMT+3' },
];

const Timezone: FunctionComponent<Record<string, never>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const [timezone, setTimezone] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, isSuccess } = useFetchMentorProfile();

  const [updateBio] = useUpdateBioMutation();

  const _handleEditTimezone = () => setIsEditable(!isEditable);

  const _handleSelect = (e: any) => {
    setTimezone(e.target.value);
  };

  const _handleSaveTimezone = async () => {
    setIsSubmitting(true);
    const payload = {
      timezone,
    };
    try {
      await updateBio({ userId, payload }).unwrap();
      successNotification('Timezone updated successfully');
      setIsSubmitting(false);
      setIsEditable(!isEditable);
    } catch (error) {
      setIsSubmitting(false);
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Box mb={5}>
      <Grid container alignItems="baseline" justifyContent="space-between">
        <Grid item>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Timezone
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="small" onClick={_handleEditTimezone}>
            <EditIcon fontSize="small" sx={{ fontSize: '15px' }} />
          </IconButton>
        </Grid>
      </Grid>
      <>
        <Input
          select
          handleChange={_handleSelect}
          fullWidth
          size="small"
          name="timezone"
          disabled={!isEditable}
          value={isSuccess && (data?.payload?.bio?.timezone as string)}
          sx={{
            '& > *': {
              height: 'unset !important',
            },
          }}
        >
          {TIMEZONES.map(({ label, value }) => (
            <MenuItem value={value} key={label}>
              {label}
            </MenuItem>
          ))}
        </Input>
        {isEditable && (
          <Grid container sx={{ mt: 2 }}>
            <Grid item md={8}>
              <Grid container spacing={2}>
                <Grid item md={5}>
                  <Button
                    handleClick={_handleEditTimezone}
                    variant="outlined"
                    fullWidth={true}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item md={5}>
                  <Button
                    handleClick={_handleSaveTimezone}
                    fullWidth={true}
                    disabled={isSubmitting}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </>
    </Box>
  );
};

export default Timezone;
