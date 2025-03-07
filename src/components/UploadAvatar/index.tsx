import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import DefaultUser from 'src/assets/images/default_user.png';

import {
  useGetUserProfileQuery,
  useUpdateProfilePictureMutation,
} from 'src/services/userSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import {
  Wrapper,
  StyledInput,
} from 'src/components/UploadAvatar/styled.uploadAvatar';
import { RootState } from 'src/store';
import { useSelector } from 'react-redux';

const UploadAvatar: FunctionComponent<Record<string, never>> = () => {
  const { data, isSuccess } = useGetUserProfileQuery();
  const { userId } = useSelector((state: RootState) => state.account);

  const [updateProfilePicture, { isLoading }] =
    useUpdateProfilePictureMutation();

  const handleUpdatePicture = async (e: { target: HTMLInputElement }) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await updateProfilePicture({
        userId,
        data: formData,
      }).unwrap();

      if (res) {
        return successNotification(res.message as string);
      }
    } catch (error: any) {
      if (error.status === 400) {
        return errorNotification(error.data.message as string);
      }
      return errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Wrapper isLoading={isLoading}>
      <Box className="container">
        <Avatar
          src={(isSuccess && data && data?.payload?.picture) || DefaultUser}
          alt="profile picture"
          sx={{ width: 90, height: 90 }}
        />
        <Box className="upload">
          <StyledInput
            accept="image/png, image/jpg, image/jpeg"
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
      <Typography
        variant="subtitle2"
        sx={{ paddingTop: '.4em', paddingLeft: '4em' }}
      >
        Maximum size of 1MB. JPG, or PNG.
      </Typography>
    </Wrapper>
  );
};

export { UploadAvatar };
