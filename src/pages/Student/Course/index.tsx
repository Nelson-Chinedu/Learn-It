import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useStyles } from 'src/pages/Student/Course/styled.course';

import { Layout } from 'src/Layout/student';

import { Card, ProgressBar } from 'src/components';

import { COURSE } from 'src/constant/course';

import AvatarUser from 'src/assets/images/Avatar.png';

const Course: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box component="section">
        <Grid container spacing={2}>
          {COURSE.map((course) => (
            <Grid item md={3} key={course.id} className={classes.cardWrapper}>
              <Link
                to={`/course/${course.title.split(' ').join('-')}/${course.id}`}
              >
                <Card width="280px" borderRadius="10px">
                  <Box style={{ padding: '1em' }}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Avatar src={AvatarUser} alt="course instructor" />
                      </Grid>
                      <Grid item>
                        <MoreHorizOutlinedIcon fontSize="small" />
                      </Grid>
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.courseTitle}
                    >
                      {course.title}
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
                        <Typography variant="subtitle2">
                          {course.author}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      spacing={1}
                      className={classes.timeline}
                    >
                      <Grid item>
                        <Typography variant="subtitle2">
                          {course.lesson}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          {' '}
                          {course.hour}
                        </Typography>
                      </Grid>
                    </Grid>
                    <ProgressBar />
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export { Course };
