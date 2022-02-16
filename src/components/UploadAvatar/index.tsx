import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';

import AvatarUser from 'src/assets/images/Avatar.png';

import { useStyles } from 'src/components/UploadAvatar/styled.uploadAvatar';

const UploadAvatar: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar
        src={AvatarUser}
        alt="profile picture"
        sx={{ width: 70, height: 70 }}
      />
      <Box className={classes.upload}>
        <input
          accept="image/*"
          className={classes.input}
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
    </Box>
  );
};

export { UploadAvatar };
