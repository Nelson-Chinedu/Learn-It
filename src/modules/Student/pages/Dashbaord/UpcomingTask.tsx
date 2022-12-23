import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

import AvatarImg from 'src/assets/images/Avatar.png';

import { LineItem } from 'src/modules/Student/pages/Dashbaord/LineItem';

const useStyles = makeStyles({
  root: {},
  header: {
    padding: '1em .8em 0px',
  },
  wrapper: {
    '& .MuiTypography-subtitle2:nth-child(1)': {
      fontSize: '13px',
      lineHeight: '10px',
    },
    '& .MuiTypography-subtitle2:nth-child(2)': {
      fontSize: '12px',
      color: '#5e5c5c',
    },
  },
});

const UpcomingTask: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Grid item>
          <Typography variant="subtitle2">Upcoming Task</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">See all</Typography>
        </Grid>
      </Grid>
      <Box>
        {[0, 1].map((number) => (
          <LineItem key={number}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <Grid
                  container
                  alignItems="flex-start"
                  spacing={1}
                  className={classes.wrapper}
                >
                  <Grid item>
                    <Avatar src={AvatarImg} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">
                      Discussion Algorithm
                    </Typography>
                    <Typography variant="subtitle2">
                      08:00 AM - 10:00 AM
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
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
