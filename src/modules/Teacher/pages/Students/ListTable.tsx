import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import { STUDENT_LIST } from 'src/constant/student';

const ListTable: FunctionComponent<Record<string, never>> = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1">Student</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">Student ID</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">Course Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">Enrolled Date</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">Status</Typography>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        {STUDENT_LIST.map(
          (
            student: {
              sn: number;
              id: string;
              name: string;
              course: string;
              date: string;
              status: string;
            },
            index: number
          ) => (
            <TableBody key={index}>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2">{student.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{student.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{student.course}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{student.date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{student.status}</Typography>
                </TableCell>
                <TableCell>
                  <MoreHoriz />
                </TableCell>
              </TableRow>
            </TableBody>
          )
        )}
      </Table>
    </TableContainer>
  );
};

export { ListTable };
