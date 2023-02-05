import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ConfirmEmailImage from 'src/assets/images/confirm-email.gif';

const ConfirmEmail: FunctionComponent<Record<string, never>> = () => {
  const location: any = useLocation();

  if (!location.state?.data)
    return <Typography variant="subtitle2">Something went wrong</Typography>;

  return (
    <Box
      sx={{
        width: '60%',
        margin: '5em auto',
        textAlign: 'center',
      }}
    >
      <img
        src={ConfirmEmailImage}
        alt="Email animation"
        style={{ width: '150px', height: '150px', objectFit: 'contain' }}
      />
      <Typography
        variant="subtitle2"
        sx={{ mb: 4, fontSize: '1rem !important', lineHeight: '1.3em' }}
      >
        Thank you for signing up! A confirmation email has been sent to your
        registered email address. Please follow the instructions in the email to
        complete the sign-up process.
      </Typography>
    </Box>
  );
};

export default ConfirmEmail;
