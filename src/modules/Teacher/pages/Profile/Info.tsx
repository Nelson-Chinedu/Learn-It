import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';

import { Card } from 'src/components';

import Bio from 'src/modules/Teacher/pages/Profile/Bio';
import User from 'src/modules/Teacher/pages/Profile/User';
import Company from 'src/modules/Teacher/pages/Profile/Company';
import Experience from 'src/modules/Teacher/pages/Profile/Experience';
import Timezone from 'src/modules/Teacher/pages/Profile/Timezone';
import Fee from 'src/modules/Teacher/pages/Profile/Fee';
import AcceptingMentee from 'src/modules/Teacher/pages/Profile/AcceptingMentee';
import Availability from 'src/modules/Teacher/pages/Profile/Availability';

const Info: FunctionComponent<Record<string, never>> = () => {
  return (
    <Card borderRadius="10px" width="100%" height="100vh">
      <Box className="userContainer">
        <Box className="user">
          <User />
        </Box>
        <Box className="bio">
          <AcceptingMentee />
          <Availability />
          <Company />
          <Experience />
          <Timezone />
          <Fee />
          <Bio />
        </Box>
      </Box>
    </Card>
  );
};

export default Info;
