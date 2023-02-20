import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Card, Button } from 'src/components';

import { MENTORS_LIST } from 'src/constant/mentorList';

import useModal from 'src/hooks/useModal';

import ViewMentorModal from 'src/modules/Student/components/Modals/ViewMentorModal';

import { Props } from 'src/types/paystack';

const MentorsList: FunctionComponent<Props> = ({ onSuccess, onClose }) => {
  const [state, setState] = useModal();

  const handleView = (data: {
    title: string;
    bio: string;
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
        {MENTORS_LIST.map((mentor: any) => (
          <Grid item md={3} sx={{ mb: 1 }} key={mentor.id}>
            <Card borderRadius="0px" width="220px">
              <Box sx={{ textAlign: 'center', padding: '1em' }}>
                <img
                  src={mentor.image}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'contain',
                  }}
                />
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                  {mentor.name}
                </Typography>
                <Typography>{mentor.title}</Typography>
                <Typography>
                  Currently accepting mentee: {mentor.accepting}
                </Typography>
                <Typography>Fee: {`₦${mentor.price}`}</Typography>
              </Box>
              <Button
                handleClick={() => handleView(mentor)}
                variant="outlined"
                sx={{ borderRadius: '0px !important' }}
              >
                View
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ViewMentorModal onSuccess={onSuccess} onClose={onClose} />
    </>
  );
};

export default MentorsList;
