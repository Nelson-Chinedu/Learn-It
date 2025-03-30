import { SyntheticEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CircularProgress from '@mui/material/CircularProgress';

import { BASE_PATHS, MENTOR_PATHS } from 'src/constant/path';

import { Button, TabNav } from 'src/components';

import {
  useGetMenteeDetailQuery,
  useGetMenteeSubmissionQuery,
} from 'src/modules/Teacher/services/teacherSlice';

import { RootState } from 'src/store';

import useModal from 'src/hooks/useModal';

import FeedbackModal from 'src/modules/Teacher/components/Modals/FeedbackModal';

import Submission from 'src/modules/Teacher/pages/Students/Submission';
import Feedback from 'src/modules/Teacher/pages/Students/Feedback';
import { truncate } from 'src/helpers/truncate';
import { styled } from '@mui/material';

const LINKS = ['Submission', 'Feedback'];

const Wrapper = styled(Box)(({ theme }) => ({
  '& .MuiBreadcrumbs-li': {
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));

const Task = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { id, taskId } = useParams();

  const { data, isFetching } = useGetMenteeDetailQuery({
    mentorId: userId,
    menteeId: id,
  });
  const { data: submissionData, isFetching: isFetchingSubmission } =
    useGetMenteeSubmissionQuery(
      {
        mentorId: userId,
        taskId,
      },
      { skip: !userId },
    );

  const [value, setValue] = useState(0);
  const [state, setState] = useModal();

  const handleAddFeedback = () => {
    setState({ ...state, modalName: 'Feedback' });
  };

  return (
    <Wrapper>
      {isFetching || isFetchingSubmission ? (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={20} />
        </Box>
      ) : (
        <>
          <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={8}
          >
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link to={`/${BASE_PATHS.MENTOR}/${MENTOR_PATHS.MENTEES}`}>
                Mentees
              </Link>
              <Link to={`/${BASE_PATHS.MENTOR}/${MENTOR_PATHS.MENTEES}/${id}`}>
                {`${data.payload.firstname} ${data.payload.lastname}`}
              </Link>
              <Typography>
                {truncate(submissionData.payload.title, 30)}
              </Typography>
            </Breadcrumbs>
            <Button fullWidth={false} handleClick={handleAddFeedback}>
              Provide Feedback
            </Button>
          </Stack>
          <Grid container alignItems="baseline" justifyContent="flex-start">
            <Grid size={{ md: 12 }}>
              <TabNav
                nav={LINKS}
                value={value}
                handleChange={(_e: SyntheticEvent, newValue: number) =>
                  setValue(newValue)
                }
              >
                <Box sx={{ margin: '2em 0px' }}>
                  {value === 0 && <Submission />}
                  {value === 1 && <Feedback />}
                </Box>
              </TabNav>
            </Grid>
          </Grid>
        </>
      )}
      <FeedbackModal />
    </Wrapper>
  );
};

export default Task;
