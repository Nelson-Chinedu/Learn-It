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

import { YOE } from 'src/constant/yearOfExperice';
import useFetchMentorProfile from 'src/hooks/useFetchMentorProfile';

const Experience: FunctionComponent<Record<string, never>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const [experience, setExperience] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, isSuccess } = useFetchMentorProfile();

  const [updateBio] = useUpdateBioMutation();

  const _handleEditExperience = () => setIsEditable(!isEditable);

  const _handleSelect = (e: any) => {
    setExperience(e.target.value);
  };

  const _handleSaveExperience = async () => {
    setIsSubmitting(true);
    const payload = {
      yearsOfExperience: experience,
    };
    try {
      await updateBio({ userId, payload }).unwrap();
      successNotification('Experience updated successfully');
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
            Years Of Experience
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="small" onClick={_handleEditExperience}>
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
          name="experience"
          disabled={!isEditable}
          value={isSuccess && (data?.payload?.bio?.yearsOfExperience as string)}
          sx={{
            '& > *': {
              height: 'unset !important',
            },
          }}
        >
          {YOE.map(({ label, value }) => (
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
                    handleClick={_handleEditExperience}
                    variant="outlined"
                    fullWidth={true}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item md={5}>
                  <Button
                    handleClick={_handleSaveExperience}
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

export default Experience;
