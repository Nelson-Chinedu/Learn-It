import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';

import { Card } from 'src/components';

import Bio from 'src/modules/Teacher/pages/Profile/Bio';
import User from 'src/modules/Teacher/pages/Profile/User';

const Info: FunctionComponent<Record<string, never>> = () => {
  return (
    <Card borderRadius="10px" width="100%" height="100vh">
      <Box className="userContainer">
        <Box className="user">
          <User />
        </Box>
        <Box className="bio">
          <Bio />
        </Box>
      </Box>
    </Card>
  );
};

export default Info;
