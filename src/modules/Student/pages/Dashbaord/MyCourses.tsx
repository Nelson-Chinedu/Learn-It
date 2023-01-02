import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';

import { Button } from 'src/components';

import { LineItem } from 'src/modules/Student/pages/Dashbaord/LineItem';
import { useStyles } from 'src/modules/Student/pages/Dashbaord/styled.dashboard';
import ViewCourseModal from 'src/modules/Student/components/Modals/ViewCourseModal';

import { useGetAllCoursesQuery } from 'src/services/userSlice';

import useModal from 'src/hooks/useModal';

const MyCourses: FunctionComponent<Record<string, never>> = () => {
  const { data, isLoading } = useGetAllCoursesQuery();
  const [state, setState] = useModal();
  const classes = useStyles();

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
      <Grid
        container
        justifyContent="space-between"
        style={{ padding: '20px 15px' }}
      >
        <Grid item>
          <Typography variant="subtitle1">All Courses</Typography>
        </Grid>
        <Grid item>
          <Typography>Add filter by free or paid here</Typography>
        </Grid>
      </Grid>
      <Box>
        {isLoading && !data ? (
          [0, 1, 2, 3, 4].map((placeholder) => (
            <Box
              key={placeholder}
              sx={{ width: '98%', margin: '10px auto 0px' }}
            >
              <Skeleton height={100} sx={{ mt: -4 }} />
            </Box>
          ))
        ) : !isLoading && data && data?.payload?.length === 0 ? (
          <Typography sx={{ textAlign: 'center' }}>
            No course added yet
          </Typography>
        ) : (
          data?.payload?.map((data: any) => (
            <LineItem key={data.id}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item md={5}>
                  <Grid container spacing={1} className={classes.authorWrapper}>
                    <Grid item>
                      <Avatar
                        src={data?.profile?.picture}
                        alt="course thumbnail"
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
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
                    color="primary"
                    disableElevation
                    fullWidth
                    size="medium"
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
