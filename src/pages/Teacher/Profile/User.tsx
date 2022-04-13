import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AvatarUser from 'src/assets/images/Avatar.png';

import useTeacherProfile from 'src/hooks/useTeacherProfile';

const User: FunctionComponent<Record<string, never>> = () => {
  const { data, isSuccess } = useTeacherProfile();
  return (
    <>
      <Avatar
        src={AvatarUser}
        alt="profile picture"
        sx={{ width: 60, height: 60 }}
      />
      <Box className="username">
        <Typography>
          {isSuccess &&
            data &&
            `${data.payload.firstname} ${data.payload.lastname}`}
        </Typography>
        <Typography>vip</Typography>
      </Box>
      <Box>
        <Grid container alignItems="flex-start" justifyContent="space-around">
          <Grid item>
            <Typography>72k</Typography>
            <Typography>Student</Typography>
          </Grid>
          <Grid item>
            <Typography>320</Typography>
            <Typography>Course</Typography>
          </Grid>
          <Grid item>
            <Typography>4.8</Typography>
            <Typography>Rating</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default User;
