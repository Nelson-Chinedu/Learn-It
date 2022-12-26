import { FunctionComponent } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import DefaultUser from 'src/assets/images/default_user.png';

import useTeacherProfile from 'src/hooks/useTeacherProfile';

import { useStyles } from 'src/components/UploadAvatar/styled.uploadAvatar';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const UploadAvatar: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { data } = useTeacherProfile();
  const isLoading = false;

  const handleUpdatePicture = async (e: { target: HTMLInputElement }) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/user/profile`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (res) {
        return successNotification(res.data.message as string);
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        return errorNotification(error.response.data.message as string);
      }
      return errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Box className={classes.root}>
      <Box className="container">
        <Avatar
          src={data?.payload?.picture || DefaultUser}
          alt="profile picture"
          sx={{ width: 70, height: 70 }}
        />
        <Box className="upload">
          <input
            accept="image/*"
            className={classes.input}
            onChange={handleUpdatePicture}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              disableRipple={true}
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraIcon fontSize="small" />
            </IconButton>
          </label>
        </Box>
        {isLoading && (
          <Box className="loader">
            <CircularProgress size={15} />
          </Box>
        )}
      </Box>
      <Typography variant="subtitle2">
        Maximum size of 1MB. JPG, or PNG.
      </Typography>
    </Box>
  );
};

export { UploadAvatar };
