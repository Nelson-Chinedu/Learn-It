import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import DefaultUser from 'src/assets/images/default_user.png';
import { useGetUserProfileQuery } from 'src/services/userSlice';
import useFetchMentorProfile from 'src/hooks/useFetchMentorProfile';

const User: FunctionComponent<Record<string, never>> = () => {
  const { data, isSuccess } = useGetUserProfileQuery();
  const { data: mentorData } = useFetchMentorProfile();

  return (
    <>
      <Avatar
        src={data?.payload?.picture || DefaultUser}
        alt="profile picture"
        sx={{ width: 90, height: 90 }}
      />
      <Box className="username">
        <Typography sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
          {isSuccess &&
            data &&
            `${data.payload.firstname} ${data.payload.lastname}`}
        </Typography>
        <Typography>
          {(mentorData && mentorData?.payload?.bio?.title) || 'N/A'}
        </Typography>
      </Box>
    </>
  );
};

export default User;
