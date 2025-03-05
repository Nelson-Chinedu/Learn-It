import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material';

import AvatarImg from 'src/assets/images/Avatar.png';

import { LineItem } from 'src/modules/Student/pages/Dashbaord/LineItem';

const HeaderWrapper = styled(Grid)({
  padding: '1em .8em 0px',
});

const TaskWrapper = styled(Grid)({
  '& .MuiTypography-subtitle2:nth-child(1)': {
    fontSize: '13px',
    lineHeight: '10px',
  },
  '& .MuiTypography-subtitle2:nth-child(2)': {
    fontSize: '12px',
    color: '#5e5c5c',
  },
});

const UpcomingTask: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box>
      <HeaderWrapper
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <Typography variant="subtitle2">Upcoming Task</Typography>
        </Grid>
        <Grid>
          <Typography variant="subtitle2">See all</Typography>
        </Grid>
      </HeaderWrapper>
      <Box>
        {[0, 1].map((number) => (
          <LineItem key={number}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid>
                <TaskWrapper container alignItems="center" spacing={1}>
                  <Grid>
                    <Avatar src={AvatarImg} />
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2">
                      Discussion Algorithm
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ marginTop: '.6em !important' }}
                    >
                      08:00 AM - 10:00 AM
                    </Typography>
                  </Grid>
                </TaskWrapper>
              </Grid>
              <Grid>
                <MoreHorizOutlinedIcon fontSize="small" />
              </Grid>
            </Grid>
          </LineItem>
        ))}
      </Box>
    </Box>
  );
};

export { UpcomingTask };
