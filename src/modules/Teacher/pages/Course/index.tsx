import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from 'src/components';

import EmptyState from 'src/assets/images/write-empty-state.gif';

import { CourseTable } from 'src/modules/Teacher/pages/Course/CourseTable';
import { useGetCoursesQuery } from 'src/modules/Teacher/services/teacherSlice';

import { RootState } from 'src/store';

import { EmptyStateWrapper } from 'src/modules/Teacher/pages/Course/styled.course';

const TeacherCourse: FunctionComponent<Record<string, never>> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isSuccess, isLoading } = useGetCoursesQuery(userId);

  const _handleAddNewCourse = () => {
    navigate(`${pathname}/add`);
  };

  return (
    <Box component="section">
      {!isLoading && data && data?.payload?.length !== 0 && (
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-end"
          spacing={1}
        >
          <Grid item>
            <Button fullWidth size="medium" handleClick={_handleAddNewCourse}>
              Add New Course
            </Button>
          </Grid>
        </Grid>
      )}
      {data && data.payload.length === 0 ? (
        <EmptyStateWrapper>
          <img
            src={EmptyState}
            alt="Add new course"
            style={{ width: '300px', height: '300px' }}
          />
          <Typography variant="h2" sx={{ mt: -5, mb: 5 }}>
            No Course Added Yet
          </Typography>
          <Button
            fullWidth={false}
            size="medium"
            handleClick={_handleAddNewCourse}
          >
            Add New Course
          </Button>
        </EmptyStateWrapper>
      ) : (
        <Box style={{ margin: '2em 0px 0px' }}>
          <CourseTable
            isLoading={isLoading}
            data={data}
            isSuccess={isSuccess}
          />
        </Box>
      )}
    </Box>
  );
};

export default TeacherCourse;
