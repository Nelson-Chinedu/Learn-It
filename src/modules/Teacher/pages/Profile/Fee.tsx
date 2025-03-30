import { FunctionComponent, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
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

const Fee: FunctionComponent<Record<string, never>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isSuccess } = useFetchMentorProfile();
  const [isEditable, setIsEditable] = useState(false);
  const [form, setForm] = useState({
    message: '',
    isError: false,
    content: '',
  });

  const editEl = useRef(null);
  const [updateBio, { isLoading }] = useUpdateBioMutation();

  useEffect(() => {
    setForm({ ...form, content: data?.payload?.bio?.fee });
  }, [isSuccess]);

  const _handleToggleFee = () => {
    setIsEditable(!isEditable);
    setForm({
      isError: false,
      message: '',
      content: data?.payload?.bio?.fee,
    });
    editEl.current.textContent = data?.payload?.bio?.fee;
  };

  const handleInput = (e: { target: { textContent: string } }) => {
    const inputValue = e.target.textContent;

    const numbersOnly = inputValue.replace(/[^0-9]/g, '');
    const sanitizedValue = numbersOnly.replace(/^(\d*\.)(?!.*\.)/g, '$1');

    if (editEl.current) {
      const el = editEl.current;
      const range = document.createRange();
      const sel = window.getSelection();

      el.textContent = sanitizedValue;

      range.setStart(el.firstChild || el, sanitizedValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);

      setForm({ ...form, content: sanitizedValue });
    }
  };

  const _handleSaveFee = async () => {
    const payload = {
      fee: editEl.current.textContent,
    };
    try {
      if (!editEl.current.textContent) {
        setForm({ ...form, message: 'Fee is required', isError: true });
      } else {
        await updateBio({ userId, payload }).unwrap();
        successNotification('Profile updated successfully');
        setForm({ ...form, message: '', isError: false });
        setIsEditable(!isEditable);
      }
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Box mb={5}>
      <Grid container alignItems="baseline" justifyContent="space-between">
        <Grid>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Fee
          </Typography>
        </Grid>
        <Grid>
          <IconButton size="small" onClick={_handleToggleFee}>
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
        onInput={(e: any) => handleInput(e)}
      >
        {!isEditable && form.content !== 'Not set' && '₦'} {form.content}
      </Box>
      {form.isError && (
        <Typography variant="subtitle1" color={'red'}>
          {form.message}
        </Typography>
      )}

      {isEditable && (
        <Grid container sx={{ mt: 2 }}>
          <Grid size={{ md: 8 }}>
            <Grid container spacing={2}>
              <Grid size={{ md: 5 }}>
                <Button
                  handleClick={_handleToggleFee}
                  variant="outlined"
                  fullWidth={true}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid size={{ md: 5 }}>
                <Button
                  handleClick={_handleSaveFee}
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
    </Box>
  );
};

export default Fee;
