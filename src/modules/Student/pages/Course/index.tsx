import { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useStyles } from 'src/modules/Student/pages/Course/styled.course';

import { useGetEnrollCourseQuery } from 'src/modules/Student/services/studentSlice';

import { RootState } from 'src/store';

import { getEnrolledCourses } from 'src/features/courseSlice';

interface ICourses {
  courseId: string;
  course: {
    name: string;
    thumbnail: string;
    video: string[];
    profile: {
      firstname: string;
      lastname: string;
      picture: string;
    };
  };
}

const Course: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { data, isLoading } = useGetEnrollCourseQuery();
  const dispatch = useDispatch();
  const { enrolledCourses, isLoadingEnrolledCourses } = useSelector(
    (state: RootState) => state.course
  );

  useEffect(() => {
    dispatch(getEnrolledCourses({ data: data?.payload, loading: isLoading }));
  }, [data]);

  return (
    <Box component="section" className={classes.course_container}>
      <Grid container spacing={2}>
        {isLoadingEnrolledCourses && !enrolledCourses.length ? (
          <>
            <Typography>Please wait...</Typography>
          </>
        ) : !isLoadingEnrolledCourses &&
          enrolledCourses &&
          enrolledCourses?.length === 0 ? (
          <Typography>Enrolled courses will show up here</Typography>
        ) : (
          enrolledCourses.map(({ courseId, course }: ICourses) => (
            <Grid item md={3} key={courseId}>
              <Link
                to={`/s/courses/${course.name
                  .split(' ')
                  .join('-')
                  ?.toLowerCase()}/${courseId}`}
              >
                <Box className="course_content">
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Avatar src={course.thumbnail} alt="course instructor" />
                    <MoreHorizOutlinedIcon />
                  </Stack>
                  <Typography variant="subtitle2">{course?.name}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                      sx={{
                        width: 25,
                        height: 25,
                        textTransform: 'capitalize',
                        fontSize: '12px',
                        padding: '0px',
                      }}
                      src={course?.profile?.picture || ''}
                      alt="course instructor"
                    >
                      {course.profile.firstname.charAt(0)}
                    </Avatar>
                    <Typography
                      variant="subtitle2"
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {`${course.profile.firstname} ${course.profile.lastname}`}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="subtitle2">{`${course.video.length} ${
                      course?.video?.length > 1 ? 'lessons' : 'lesson'
                    }`}</Typography>
                    <Typography variant="subtitle2">40 hours</Typography>
                  </Stack>
                </Box>
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Course;
