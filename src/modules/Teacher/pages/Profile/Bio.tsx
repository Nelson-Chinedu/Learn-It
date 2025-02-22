import { FunctionComponent, useState, useRef, useEffect } from 'react';
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

const Bio: FunctionComponent<Record<string, never>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const [isEditable, setIsEditable] = useState(false);
  const [form, setForm] = useState({
    message: '',
    content: '',
    isError: false,
  });
  const { data, isSuccess } = useFetchMentorProfile();

  useEffect(() => {
    setForm({ ...form, content: data?.payload?.bio?.mentorBio });
  }, [isSuccess]);

  const editEl = useRef(null);
  const [updateBio, { isLoading }] = useUpdateBioMutation();

  const _handleToggleBio = () => {
    setIsEditable(!isEditable);
    setForm({
      isError: false,
      message: '',
      content: data?.payload?.bio?.mentorBio,
    });
    editEl.current.textContent = data?.payload?.bio?.mentorBio;
  };

  const _handleSaveBio = async () => {
    const payload = {
      mentorBio: editEl.current.textContent,
    };
    try {
      if (!editEl.current.textContent) {
        setForm({ ...form, message: 'Bio is required', isError: true });
      } else {
        await updateBio({ userId, payload }).unwrap();
        successNotification('Bio updated successfully');
        setForm({ ...form, message: '', isError: false });
        setIsEditable(!isEditable);
      }
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <>
      <Grid container alignItems="baseline" justifyContent="space-between">
        <Grid item>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Bio
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="small" onClick={_handleToggleBio}>
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
          border:
            isEditable && !form.isError
              ? '1px solid green'
              : isEditable && form.isError
              ? '1px solid red'
              : '',
          padding: isEditable && '10px',
          fontFamily: '"Source Sans Pro", sans-serif',
          fontSize: pxToRem(14),
        }}
      >
        {form.content}
      </Box>
      {form.isError && (
        <Typography variant="subtitle1" color={'red'}>
          {form.message}
        </Typography>
      )}

      {isEditable && (
        <Grid container sx={{ mt: 2 }}>
          <Grid item md={8}>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <Button
                  handleClick={_handleToggleBio}
                  variant="outlined"
                  fullWidth={true}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item md={5}>
                <Button
                  handleClick={_handleSaveBio}
                  fullWidth={true}
                  disabled={isLoading}
                >
                  Save
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
