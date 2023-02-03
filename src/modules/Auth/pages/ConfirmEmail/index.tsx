import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ConfirmEmail: FunctionComponent<Record<string, never>> = () => {
  const location: any = useLocation();

  if (!location.state?.data)
    return <Typography variant="subtitle2">Something went wrong</Typography>;

  return (
    <Box sx={{ width: '80%', margin: '5em auto', textAlign: 'center' }}>
      <Typography
        variant="subtitle2"
        sx={{ mb: 4, fontSize: '1rem !important' }}
      >
        {location.state.data}
      </Typography>
      <Typography variant="subtitle2">
        Kindly check your mail for next step
      </Typography>
    </Box>
  );
};

export default ConfirmEmail;
