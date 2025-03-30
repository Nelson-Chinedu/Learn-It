import { FC } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';

import { RootState } from 'src/store';

import { useGetMenteeSubmissionQuery } from 'src/modules/Teacher/services/teacherSlice';
import { useParams } from 'react-router-dom';

const Submission: FC = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { taskId } = useParams();

  const { data, isFetching } = useGetMenteeSubmissionQuery(
    {
      mentorId: userId,
      taskId,
    },
    { skip: !userId },
  );

  if (isFetching) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress size={20} />
      </Box>
    );
  }
  return (
    <Box>
      <Box>
        <Typography variant="subtitle2" pb={2}>
          URL
        </Typography>
        <Typography
          variant="h5"
          component={'a'}
          href={data.payload.submissionUrl}
          target="_blank"
        >
          {data.payload.submissionUrl || 'N/A'}
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box>
        <Typography variant="subtitle2" pb={2}>
          Supporting Note
        </Typography>
        <Typography variant="h5">
          {data.payload.supportingNote || 'N/A'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Submission;
