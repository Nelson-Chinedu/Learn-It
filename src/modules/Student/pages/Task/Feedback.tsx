import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import sanitizeHtml from 'sanitize-html';
import { format } from 'date-fns';
import { FunctionComponent } from 'react';

const Feedback: FunctionComponent<{
  feedback: { createdAt: string; feedback: string }[];
}> = ({ feedback }) => {
  return (
    <Box height={'200px'} overflow={'scroll'}>
      {feedback.length === 0 ? (
        <Typography variant="h5" pt={4} textAlign={'center'}>
          No feedback provided yet, Please check back later!
        </Typography>
      ) : (
        feedback
          .filter(({ feedback }) => feedback)
          .map((res) => (
            <Box
              sx={{
                background: '#a19c9c29',
                marginBottom: '20px',
                padding: '20px 14px',
                borderRadius: '8px',
              }}
            >
              <Typography variant="subtitle2" pb={2}>
                {format(new Date(res.createdAt), 'dd/MM/yyyy')}
              </Typography>
              <Typography
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  fontFamily: '"Source Sans Pro", sans-serif',
                }}
                component="div"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(
                    JSON.parse(res.feedback ?? null),
                  )?.replace(/["]+/g, ''),
                }}
              />
            </Box>
          ))
      )}
    </Box>
  );
};

export default Feedback;
