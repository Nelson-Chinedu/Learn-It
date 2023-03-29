import { FunctionComponent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const FallbackLoader: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box
      sx={{
        width: '50%',
        margin: '10em auto',
        textAlign: 'center',
      }}
    >
      <CircularProgress size={30} />
    </Box>
  );
};

export { FallbackLoader };
