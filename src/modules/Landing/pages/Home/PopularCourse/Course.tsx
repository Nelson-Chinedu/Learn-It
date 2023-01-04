import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Skeleton from '@mui/material/Skeleton';

import { Card, Button } from 'src/components';

import { useStyles } from 'src/modules/Landing/pages/Home/PopularCourse/styled.popularcourse';
import { useGetAllCoursesQuery } from 'src/services/userSlice';

const Course: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { data, isLoading } = useGetAllCoursesQuery();

  return (
    <>
      {isLoading
        ? [0, 1, 2, 3].map((loader) => (
            <Grid
              item
              md={3}
              key={loader}
              className={classes.container}
              sx={{ marginTop: '-8em' }}
            >
              <Skeleton height={500} width={250} />
            </Grid>
          ))
        : data &&
          data?.payload.map((course, index: number) => (
            <Grid item sm={3} className={classes.container} key={index}>
              <Card width="250px" borderRadius="10px">
                <CardMedia
                  component="img"
                  height="160"
                  image={course.thumbnail}
                  alt="Course thumbnail"
                />
                <Box className={classes.avatar}>
                  <Avatar
                    src={course?.profile?.picture}
                    alt="Course author"
                    sx={{ width: 90, height: 90 }}
                  />
                </Box>
                <CardContent>
                  <Box style={{ marginTop: '1em' }}>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography
                          variant="subtitle2"
                          className={classes.price}
                        >
                          {course.price}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle2"
                          className={classes.lessonNumber}
                        >
                          <MenuBookIcon fontSize="small" /> &nbsp;
                          {course.video.length}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.courseInfo}>
                      <Grid item sm={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textTransform: 'capitalize' }}
                        >
                          {course.name}
                        </Typography>
                      </Grid>
                      <Grid item sm={12}>
                        <Typography
                          variant="subtitle2"
                          className={classes.category}
                        >
                          {`By ${course.profile.firstname} ${course.profile.lastname}`}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      alignItems="flex-end"
                      justifyContent="center"
                      className={classes.enrollButton}
                    >
                      <Grid item sm={8}>
                        <Button
                          variant="outlined"
                          color="primary"
                          fullWidth
                          disableElevation
                          size="medium"
                        >
                          Enroll Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
    </>
  );
};

export default Course;
