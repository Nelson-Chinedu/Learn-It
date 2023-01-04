import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { Button } from 'src/components';

import { useGetCoursesQuery } from 'src/modules/Teacher/services/teacherSlice';

import { truncate } from 'src/helpers/truncate';

import { useStyles } from 'src/modules/Teacher/pages/Course/styled.course';
import useModal from 'src/hooks/useModal';

const HEAD = ['Course Name', 'Videos', 'Price', 'Sales'];

const CourseTable: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [state, setState] = useModal();
  const { data, isSuccess, isLoading } = useGetCoursesQuery();

  if (isLoading) {
    return <Skeleton variant="rectangular" style={{ height: '92vh' }} />;
  }

  const handleAddNewCourse = () => {
    setState({ ...state, modalName: 'AddCourse' });
  };

  return (
    <>
      <Box style={{ padding: '2em' }}>
        {data && data.payload.length === 0 ? (
          <Box className={classes.emptyState}>
            <Typography variant="body1">No Course Added Yet</Typography>
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
          </Box>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {HEAD.map((title: string) => (
                    <TableCell key={title}>
                      <Typography variant="subtitle1">{title}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {data &&
                isSuccess &&
                data?.payload.map(
                  (
                    course: {
                      name: string;
                      video: string[];
                      count: string;
                      price: string;
                      sales?: string;
                      earning?: string;
                    },
                    index: number
                  ) => (
                    <TableBody key={index}>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {truncate(course?.name)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {course?.video?.length || 'Nil'}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {course?.price}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {course?.sales ?? '---'}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )
                )}
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
};

export { CourseTable };
