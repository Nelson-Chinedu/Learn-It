import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import sanitizeHtml from 'sanitize-html';
import { FunctionComponent } from 'react';

const Note: FunctionComponent<{ note: string }> = ({ note }) => {
  return (
    <Box>
      <Typography
        style={{
          fontSize: '14px',
          fontWeight: 400,
          fontFamily: '"Source Sans Pro", sans-serif',
        }}
        component="div"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(JSON.parse(note ?? null))?.replace(/["]+/g, ''),
        }}
      />
    </Box>
  );
};

export default Note;
