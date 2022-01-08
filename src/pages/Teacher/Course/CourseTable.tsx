import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { Card } from 'src/components';

import { TEACHER_COURSES } from 'src/constant/course';

const CourseTable: FunctionComponent<Record<string, never>> = () => {
  return (
    <Card borderRadius="10px" width="100%" height="92vh" overflow="scroll">
      <Box style={{ padding: '2em' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1">Course Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Video</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Sales</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Earning</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {TEACHER_COURSES.map(
              (
                course: {
                  video: number;
                  price: number;
                  sales: number;
                  courseName: string;
                  earning: number;
                },
                index: number
              ) => (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">
                        {course.courseName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        {course.video}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        {course.price}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        {course.sales}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        {course.earning}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )
            )}
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export { CourseTable };
