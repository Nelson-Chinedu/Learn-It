import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { makeStyles } from '@mui/styles';

import { Card, ProgressBar } from 'src/components';

import AvatarUser from 'src/assets/images/Avatar.png';

const useStyles = makeStyles({
  root: {},
  courseTitle: {
    margin: '.4em 0px !important',
  },
  author: {
    '& .MuiAvatar-circular': {
      width: '22px',
      height: '22px',
    },
    '& .MuiTypography-subtitle2': {
      fontSize: '12px',
    },
  },
  timeline: {
    '& .MuiTypography-subtitle2': {
      fontSize: '12px',
      color: '#5e5c5c',
    },
  },
});

const Course: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box component="section">
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number) => (
          <Grid item md={3} key={number} style={{ cursor: 'pointer' }}>
            <Card width="280px" borderRadius="10px">
              <Box style={{ padding: '1em' }}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Avatar src={AvatarUser} />
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon fontSize="small" />
                  </Grid>
                </Grid>
                <Typography variant="subtitle1" className={classes.courseTitle}>
                  History of Graphic design
                </Typography>
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                  className={classes.author}
                >
                  <Grid item>
                    <Avatar src={AvatarUser} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">William Joe</Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                  className={classes.timeline}
                >
                  <Grid item>
                    <Typography variant="subtitle2">15 Lesson</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2"> 40 Hours</Typography>
                  </Grid>
                </Grid>
                <ProgressBar />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Course };
