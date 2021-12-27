import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

import { Card, Button, ProgressBar } from 'src/components';

import { LineItem } from 'src/pages/Student/Dashbaord/LineItem';

import AvatarImg from 'src/assets/images/Avatar.png';

import { COURSE_MENU } from 'src/constant/courseMenu';

import { useStyles } from 'src/pages/Student/Dashbaord/styled.dashboard';

const MyCourses: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box style={{ width: '100%' }}>
      <Card borderRadius="10px" width="875px" height="700px" overflow="scroll">
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: '20px 15px' }}
        >
          <Grid item md={7}>
            <Typography variant="subtitle1">My Courses</Typography>
          </Grid>
          <Grid item md={5}>
            <Grid
              container
              justifyContent="space-evenly"
              alignItems="flex-end"
              style={{ textAlign: 'center' }}
            >
              {COURSE_MENU.map((menu: string) => (
                <Grid item key={menu} md={3}>
                  <Typography variant="subtitle2">{menu}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <LineItem key={number}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item md={5}>
                  <Grid container spacing={1} className={classes.authorWrapper}>
                    <Grid item>
                      <Avatar src={AvatarImg} alt="course thumbnail" />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        History of graphic design
                      </Typography>
                      <Typography variant="subtitle2">
                        By william Joe
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={2}>
                  <ProgressBar />
                </Grid>
                <Grid
                  md={3}
                  item
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Rating name="course-rating" size="small" value={1} max={1} />
                  4.3
                </Grid>
                <Grid item md={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    fullWidth
                    size="medium"
                  >
                    View Course
                  </Button>
                </Grid>
              </Grid>
            </LineItem>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export { MyCourses };
