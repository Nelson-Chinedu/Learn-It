import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

import { Card, Button } from 'src/components';

import DefaultUser from 'src/assets/images/default__user.png';

import useDrawer from 'src/hooks/useDrawer';

import {
  useGetAllMentorsQuery,
  useGetMentorsQuery,
} from 'src/modules/Student/services/studentSlice';

import { Props } from 'src/types/paystack';

import { RootState } from 'src/store';

import { getUnSubscribedMentors } from 'src/features/mentorSlice';

import ViewMentorDrawer from 'src/modules/Student/components/Drawer/ViewMentorDrawer';

const MentorsList: FunctionComponent<Props> = ({ onSuccess, onClose }) => {
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useDrawer();
  const { userId } = useSelector((state: RootState) => state.account);
  const { data: unSubscribedMentors } = useGetAllMentorsQuery();
  const { data: subscribedMentors } = useGetMentorsQuery({ id: userId });

  useEffect(() => {
    const getMentors = () => {
      if (unSubscribedMentors && subscribedMentors) {
        const mentors = unSubscribedMentors?.payload.filter((el: any) => {
          return !subscribedMentors?.payload.some((element: any) => {
            return el?.profile?.id === element?.mentor?.id;
          });
        });
        dispatch(getUnSubscribedMentors({ data: mentors, isLoading: false }));
      }
    };
    getMentors();
  }, [unSubscribedMentors, subscribedMentors]);

  const {
    unSubscribedMentors: mentorsData,
    isLoadingUnSubscribedMentors: isLoadingMentors,
  } = useSelector((state: RootState) => state.mentor);

  const handleViewDrawer = (data: {
    title: string;
    firstname: string;
    lastname: string;
    bio: {
      mentorBio: string;
    };
    timezone: string;
    availability: string;
    time: string;
    accepting: string;
    company: string;
    years: string;
    fee: string;
  }) => {
    setDrawer({ ...drawer, drawerName: 'viewMentor', data });
  };

  return (
    <>
      <Grid container direction="row" alignItems="center" spacing={5}>
        {isLoadingMentors ? (
          <Box sx={{ width: '40%', margin: '2em auto', textAlign: 'center' }}>
            <CircularProgress size={20} />
            <Typography>Fetching mentors...</Typography>
          </Box>
        ) : mentorsData && mentorsData.length === 0 ? (
          <Box sx={{ textAlign: 'center', width: '50%', margin: '1em auto' }}>
            <Typography variant="subtitle2">No mentors available</Typography>
          </Box>
        ) : (
          mentorsData &&
          mentorsData?.map((mentor: any) => (
            <Grid item md={3} sx={{ mb: 1 }} key={mentor.id}>
              <Card borderRadius="0px" width="220px" border="1px solid #e3e0e0">
                <Box sx={{ textAlign: 'center', padding: '1em' }}>
                  <img
                    src={mentor.profile.picture || DefaultUser}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'contain',
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {`${mentor.profile.firstname} ${mentor.profile.lastname}`}
                  </Typography>
                  <Typography>{mentor.title}</Typography>
                  <Typography>{mentor.profile.bio.title}</Typography>
                  <Typography>Fee: {`₦${mentor.price || 2000}`}</Typography>
                </Box>
                <Button
                  handleClick={() => handleViewDrawer(mentor.profile)}
                  variant="contained"
                  size="large"
                  sx={{
                    width: '80%',
                    mx: 'auto',
                    mb: 4,
                    display: 'block',
                  }}
                >
                  View
                </Button>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      <ViewMentorDrawer onSuccess={onSuccess} onClose={onClose} />
    </>
  );
};

export default MentorsList;
