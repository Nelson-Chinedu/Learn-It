import { FunctionComponent, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';

import { Button } from 'src/components';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import {
  useGetUserBioQuery,
  useUpdateBioMutation,
} from 'src/modules/Teacher/services/teacherSlice';

const Bio: FunctionComponent<Record<string, never>> = () => {
  const { data, isSuccess } = useGetUserBioQuery();
  const [isEditable, setIsEditable] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const editEl = useRef(null);
  const [updateBio] = useUpdateBioMutation();

  const _handleEditBio = () => setIsEditable(!isEditable);

  const _handleSaveBio = async () => {
    setIsSubmitting(true);
    const payload = {
      mentorBio: editEl.current.textContent,
    };
    try {
      await updateBio(payload).unwrap();
      successNotification('Bio updated successfully');
      setIsSubmitting(false);
      setIsEditable(!isEditable);
    } catch (error) {
      setIsSubmitting(false);
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <>
      <Grid container alignItems="baseline" justifyContent="space-between">
        <Grid item>
          <Typography variant="h6">Bio</Typography>
        </Grid>
        <Grid item>
          <IconButton size="small" onClick={_handleEditBio}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <div
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        ref={editEl}
        style={{
          border: isEditable && '1px solid green',
          padding: isEditable && '10px',
        }}
      >
        {isSuccess && data && data?.payload?.bio?.mentorBio}
      </div>

      {isEditable && (
        <Grid container sx={{ mt: 2 }}>
          <Grid item md={8}>
            <Grid container spacing={1}>
              <Grid item md={5}>
                <Button
                  handleClick={_handleEditBio}
                  color="primary"
                  variant="outlined"
                  disableElevation={true}
                  size="small"
                  fullWidth={true}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item md={5}>
                <Button
                  handleClick={_handleSaveBio}
                  color="primary"
                  variant="contained"
                  disableElevation={true}
                  size="small"
                  fullWidth={true}
                >
                  {isSubmitting ? <CircularProgress size={28} /> : 'Save'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Bio;
