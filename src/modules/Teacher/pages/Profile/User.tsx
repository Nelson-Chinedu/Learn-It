import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import DefaultUser from 'src/assets/images/default_user.png';
import { useGetUserProfileQuery } from 'src/services/userSlice';

const User: FunctionComponent<Record<string, never>> = () => {
  const { data, isSuccess } = useGetUserProfileQuery();

  return (
    <>
      <Avatar
        src={data?.payload?.picture || DefaultUser}
        alt="profile picture"
        sx={{ width: 90, height: 90 }}
      />
      <Box className="username">
        <Typography sx={{ textTransform: 'capitalize' }}>
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
