import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';

import { Button } from 'src/components';

import EmptyState from 'src/assets/images/empty-cart-search.gif';

import { LineItem } from 'src/modules/Student/pages/Dashbaord/LineItem';
import { useStyles } from 'src/modules/Student/pages/Dashbaord/styled.dashboard';

import ViewCourseModal from 'src/modules/Student/components/Modals/ViewCourseModal';

import { useGetAllCoursesQuery } from 'src/services/userSlice';

import { getUnEnrolledCourses } from 'src/features/courseSlice';

import useModal from 'src/hooks/useModal';

import { RootState } from 'src/store';

import { useGetEnrollCourseQuery } from 'src/modules/Student/services/studentSlice';

interface ICourseData {
  id: string;
  name: string;
  price: string | number;
  video: string[];
  objectives: string;
  profile: {
    firstname: string;
    lastname: string;
    picture: string;
  };
}

const MyCourses: FunctionComponent<Record<string, never>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const [state, setState] = useModal();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data: unerolledCourses } = useGetAllCoursesQuery();
  const { data: enrolledCourses } = useGetEnrollCourseQuery(userId);
  const {
    unEnrolledCourses: coursesData,
    isLoadingUnEnrolledCourses: isLoadingCourses,
  } = useSelector((state: RootState) => state.course);

  useEffect(() => {
    const getCourses = () => {
      if (unerolledCourses && enrolledCourses) {
        const courses = unerolledCourses?.payload.filter((el: any) => {
          return !enrolledCourses?.payload.some((element: any) => {
            return el.id === element?.course?.id;
          });
        });
        dispatch(getUnEnrolledCourses({ data: courses, isLoading: false }));
      }
    };
    getCourses();
  }, [unerolledCourses, enrolledCourses]);

  const handleViewCourse = (data: {
    id: string;
    name: string;
    video: string[];
    objectives: string;
  }) => {
    setState({ ...state, modalName: 'ViewCourse', data });
  };

  return (
    <>
      {!isLoadingCourses && coursesData && coursesData?.length !== 0 && (
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: '20px 15px' }}
        >
          <Grid item>
            <Typography variant="h2">All Courses</Typography>
          </Grid>
          <Grid item>
            <Typography>Add filter by free or paid here</Typography>
          </Grid>
        </Grid>
      )}
      <Box>
        {isLoadingCourses && !coursesData?.length ? (
          [0, 1, 2, 3, 4].map((placeholder) => (
            <Box
              key={placeholder}
              sx={{ width: '98%', margin: '10px auto 0px' }}
            >
              <Skeleton height={100} sx={{ mt: -4 }} />
            </Box>
          ))
        ) : !isLoadingCourses && coursesData && coursesData?.length === 0 ? (
          <Box sx={{ width: '50%', margin: '5em auto', textAlign: 'center' }}>
            <img
              src={EmptyState}
              alt=""
              style={{ width: '300px', height: '300px' }}
            />
            <Typography variant="h2">
              Courses un-enrolled will show up here
            </Typography>
          </Box>
        ) : (
          coursesData?.map((data: ICourseData) => (
            <LineItem key={data.id}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item md={5}>
                  <Grid
                    container
                    spacing={1.5}
                    className={classes.authorWrapper}
                  >
                    <Grid item>
                      <Avatar
                        src={data?.profile?.picture}
                        alt="course thumbnail"
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        By{' '}
                        {`${data?.profile?.firstname ?? 'Anonymous'} ${
                          data?.profile?.lastname ?? ''
                        }`}
                      </Typography>
                    </Grid>
                  </Grid>
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
                  <Rating
                    name="course-rating"
                    size="small"
                    value={1}
                    max={5}
                    readOnly
                  />
                </Grid>
                <Grid item md={2}>
                  <Typography>{data.price}</Typography>
                </Grid>
                <Grid item md={2}>
                  <Button
                    variant="outlined"
                    handleClick={() => handleViewCourse(data)}
                  >
                    View Course
                  </Button>
                </Grid>
              </Grid>
            </LineItem>
          ))
        )}
      </Box>
      <ViewCourseModal />
    </>
  );
};

export { MyCourses };
