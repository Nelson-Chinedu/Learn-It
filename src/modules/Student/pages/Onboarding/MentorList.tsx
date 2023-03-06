import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { Card, Button } from 'src/components';

import DefaultUser from 'src/assets/images/default__user.png';

import useModal from 'src/hooks/useModal';

import ViewMentorModal from 'src/modules/Student/components/Modals/ViewMentorModal';

import { useGetAllMentorsQuery } from 'src/modules/Student/services/studentSlice';

import { Props } from 'src/types/paystack';

const MentorsList: FunctionComponent<Props> = ({ onSuccess, onClose }) => {
  const [state, setState] = useModal();
  const { data, isLoading } = useGetAllMentorsQuery();

  const handleView = (data: {
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
    setState({ ...state, modalName: 'ViewMentors', data });
  };

  return (
    <>
      <Grid container direction="row" alignItems="center" spacing={5}>
        {isLoading ? (
          <Box sx={{ width: '40%', margin: '2em auto', textAlign: 'center' }}>
            <CircularProgress size={20} />
            <Typography>Fetching mentors...</Typography>
          </Box>
        ) : (
          data &&
          data?.payload?.map((mentor: any) => (
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
                  <Typography>
                    Currently accepting mentee:
                    {/* {mentor.accepting} */}
                  </Typography>
                  <Typography>Fee: {`₦${mentor.price}`}</Typography>
                </Box>
                <Button
                  handleClick={() => handleView(mentor.profile)}
                  variant="outlined"
                  sx={{ borderRadius: '0px !important' }}
                >
                  View
                </Button>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      <ViewMentorModal onSuccess={onSuccess} onClose={onClose} />
    </>
  );
};

export default MentorsList;
