import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import sanitizeHtml from 'sanitize-html';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { RootState } from 'src/store';

import { useGetFeedbackQuery } from 'src/modules/Teacher/services/teacherSlice';

const Feedback: FC = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { taskId } = useParams();

  const { data, isFetching } = useGetFeedbackQuery({
    mentorId: userId,
    taskId,
  });

  if (isFetching) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress size={20} />
      </Box>
    );
  }

  return (
    <Box>
      {data.payload.length === 0 ? (
        <Typography>No feedback given yet</Typography>
      ) : (
        data.payload.map(
          ({
            feedback,
            createdat,
          }: {
            feedback: string;
            createdat: string;
          }) => (
            <Box
              sx={{
                background: '#a19c9c29',
                marginBottom: '20px',
                padding: '20px 14px',
                borderRadius: '8px',
              }}
            >
              <Typography variant="subtitle2" pb={3}>
                {format(new Date(createdat), 'dd/MM/yyyy')}
              </Typography>
              <Box
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  fontFamily: '"Source Sans Pro", sans-serif',
                }}
                component="div"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(JSON.parse(feedback ?? null))?.replace(
                    /["]+/g,
                    ''
                  ),
                }}
              />
            </Box>
          )
        )
      )}
    </Box>
  );
};

export default Feedback;
