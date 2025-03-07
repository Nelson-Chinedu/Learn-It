import { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import IconButton from '@mui/material/IconButton';

import EmptyState from 'src/assets/images/empty-state.gif';

import { Menu } from 'src/components';

import UnenrollDialog from 'src/modules/Student/components/Dialog/UnenrollDialog';

import { Course_container } from 'src/modules/Student/pages/Course/styled.course';

import { useGetEnrollCourseQuery } from 'src/modules/Student/services/studentSlice';

import { RootState } from 'src/store';

import { getEnrolledCourses } from 'src/features/courseSlice';

import useMenu from 'src/hooks/useMenu';
import useDialog from 'src/hooks/useDialog';

interface ICourses {
  course: {
    id: string;
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
  const { userId } = useSelector((state: RootState) => state.account);
  const [selected, setSelected] = useState<string | number>('');
  const { open, anchorEl, handleClick, handleClose } = useMenu();
  const [dialog, setDialog] = useDialog();

  const { data, isLoading } = useGetEnrollCourseQuery(userId);

  const dispatch = useDispatch();
  const { enrolledCourses, isLoadingEnrolledCourses } = useSelector(
    (state: RootState) => state.course,
  );

  useEffect(() => {
    dispatch(getEnrolledCourses({ data: data?.payload, loading: isLoading }));
  }, [data]);

  const _handleUnenrollModal = () => {
    setDialog({ ...dialog, dialogName: 'Unenroll', id: selected });
  };

  return (
    <Course_container>
      <Grid container spacing={4}>
        {isLoadingEnrolledCourses && !enrolledCourses.length ? (
          <>
            <Typography>Please wait...</Typography>
          </>
        ) : !isLoadingEnrolledCourses &&
          enrolledCourses &&
          enrolledCourses?.length === 0 ? (
          <Box sx={{ width: '50%', margin: '5em auto', textAlign: 'center' }}>
            <img
              src={EmptyState}
              alt=""
              style={{ width: '300px', height: '300px' }}
            />
            <Typography variant="h2">
              Enrolled courses will show up here
            </Typography>
          </Box>
        ) : (
          enrolledCourses.map(({ course }: ICourses) => (
            <Grid size={{ md: 3 }} key={course.id}>
              <Link
                to={`/s/courses/${course.name
                  .split(' ')
                  .join('-')
                  ?.toLowerCase()}/${course.id}`}
              >
                <Box className="course_content">
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Avatar src={course?.thumbnail} alt="course instructor" />
                    <IconButton
                      onClick={(e) => {
                        setSelected(course.id);
                        handleClick(e);
                      }}
                    >
                      <MoreHorizOutlinedIcon />
                    </IconButton>
                  </Stack>
                  <Typography variant="h3" sx={{ margin: '.4em 0px' }}>
                    {course.name}
                  </Typography>
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
                      {course?.profile?.firstname?.charAt(0)}
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
      <Menu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        menus={[
          {
            name: 'Unenroll course',
            path: '',
            action: _handleUnenrollModal,
          },
        ]}
      />
      <UnenrollDialog />
    </Course_container>
  );
};

export default Course;
