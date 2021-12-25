import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import Card from 'src/components/Card';
import Button from 'src/components/Button';

import AvatarImg from 'src/assets/images/Avatar.png';

import { POPULAR_COURSE } from 'src/constant/popularCourse';

import { useStyles } from 'src/pages/Home/PopularCourse/styled.popularcourse';

const Course: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <>
      {POPULAR_COURSE.map((course) => (
        <Grid item sm={3} className={classes.container}>
          <Card width="250px" borderRadius="10px">
            <CardMedia
              component="img"
              height="160"
              image={course.img}
              alt="Course thumbnail"
            />
            <Box className={classes.avatar}>
              <Avatar src={AvatarImg} alt="Course author" />
            </Box>
            <CardContent>
              <Box style={{ marginTop: '1em' }}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="subtitle2" className={classes.price}>
                      {course.price}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      className={classes.lessonNumber}
                    >
                      <MenuBookIcon fontSize="small" /> &nbsp;
                      {course.lessonNumber}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className={classes.courseInfo}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle1">{course.title}</Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Typography
                      variant="subtitle2"
                      className={classes.category}
                    >
                      {course.category}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="flex-end"
                  justifyContent="center"
                  className={classes.enrollButton}
                >
                  <Grid item sm={6}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      disableElevation
                      size="small"
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
