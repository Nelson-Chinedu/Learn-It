import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { COLLABORATION } from 'src/constant/collaboration';

import { Wrapper } from 'src/modules/Landing/pages/Home/Collaboration/styled.collaboration';

const Collaboration = () => {
  return (
    <Wrapper>
      <Box sx={{ width: '90%', margin: 'auto' }}>
        <Typography variant="body2">
          Collaborated With 50+ Leading Boards And Companies
        </Typography>
        {COLLABORATION.map(
          (
            collaborator: {
              width: string;
              height: string;
              logo: string;
              alt: string;
            },
            index,
          ) => (
            <img
              key={index}
              src={collaborator.logo}
              alt={collaborator.alt}
              style={{
                width: collaborator.width,
                height: collaborator.height,
                objectFit: 'contain',
              }}
            />
          ),
        )}
      </Box>
    </Wrapper>
  );
};

export default Collaboration;
