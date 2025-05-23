import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Happy from 'src/assets/images/happy.svg';
import Completed from 'src/assets/images/completed.svg';
import Certificate from 'src/assets/images/cert.svg';

import { Wrapper } from 'src/modules/Landing/pages/Home/Alumni/styled.alumni';

const Alumni: FunctionComponent<Record<string, never>> = () => {
  return (
    <Wrapper maxWidth="md">
      <Box>
        <img src={Happy} alt="smiley" />
        <Typography variant="subtitle1">12,000+</Typography>
        <Typography variant="subtitle2">Our Happy Student</Typography>
      </Box>
      <Box style={{ position: 'relative', bottom: -150 }}>
        <img src={Completed} alt="course completed" />
        <Typography variant="subtitle1">130+</Typography>
        <Typography variant="subtitle2">Course completed</Typography>
      </Box>
      <Box>
        <img src={Certificate} alt="certificate" />
        <Typography variant="subtitle1">11392+</Typography>
        <Typography variant="subtitle2">Certificate collected</Typography>
      </Box>
    </Wrapper>
  );
};

export default Alumni;
