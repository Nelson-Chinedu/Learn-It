import { FunctionComponent, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import { Button } from 'src/components';

import { RootState } from 'src/store';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { useUpdateBioMutation } from 'src/modules/Teacher/services/teacherSlice';

import { pxToRem } from 'src/helpers/formatFont';
import useFetchMentorProfile from 'src/hooks/useFetchMentorProfile';

const Company: FunctionComponent<Record<string, never>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const [isEditable, setIsEditable] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, isSuccess } = useFetchMentorProfile();

  const editEl = useRef(null);
  const [updateBio] = useUpdateBioMutation();

  const _handleEditCompany = () => setIsEditable(!isEditable);

  const _handleSaveCompany = async () => {
    setIsSubmitting(true);
    const payload = {
      company: editEl.current.textContent,
    };
    try {
      await updateBio({ userId, payload }).unwrap();
      successNotification('Company updated successfully');
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
            Company
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="small" onClick={_handleEditCompany}>
            <EditIcon fontSize="small" sx={{ fontSize: '15px' }} />
          </IconButton>
        </Grid>
      </Grid>
      <Box
        component="div"
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        ref={editEl}
        style={{
          border: isEditable && '1px solid green',
          padding: isEditable && '10px',
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: pxToRem(14),
          textTransform: 'capitalize',
        }}
      >
        {isSuccess && data && data?.payload?.bio?.company}
      </Box>

      {isEditable && (
        <Grid container sx={{ mt: 2 }}>
          <Grid item md={8}>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <Button
                  handleClick={_handleEditCompany}
                  variant="outlined"
                  fullWidth={true}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item md={5}>
                <Button
                  handleClick={_handleSaveCompany}
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
    </Box>
  );
};

export default Company;
