import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { Layout } from 'src/Layout/Teacher';

import { Button, Input } from 'src/components';

import { CourseTable } from 'src/pages/Teacher/Course/CourseTable';
import CourseModal from 'src/pages/Teacher/Modals/CourseModal';

import useModal from 'src/hooks/useModal';

const TeacherCourse: FunctionComponent<Record<string, never>> = () => {
  const [state, setState] = useModal();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChangeCategory = () => {};

  const handleAddNewCourse = () => {
    setState({ ...state, modalName: 'AddCourse' });
  };

  return (
    <Layout>
      <Box component="section">
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-end"
          spacing={1}
        >
          <Grid item md={2}>
            <Input
              select
              label="Sort By"
              variant="outlined"
              name="category"
              fullWidth
              handleChange={handleChangeCategory}
              onBlur={handleChangeCategory}
              size="small"
              color="primary"
            >
              <MenuItem>All categories</MenuItem>
            </Input>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
              size="medium"
              handleClick={handleAddNewCourse}
            >
              Add New Course
            </Button>
          </Grid>
        </Grid>
        <Box style={{ margin: '2em 0px 0px' }}>
          <CourseTable />
        </Box>
      </Box>
      <CourseModal />
    </Layout>
  );
};

export default TeacherCourse;
