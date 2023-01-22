import { FunctionComponent, useState } from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

import { truncate } from 'src/helpers/truncate';

const HEAD = ['Course Name', 'Videos', 'Price', 'Sales'];

interface IData {
  name: string;
  video: string[];
  count: string;
  price: string;
  sales?: string;
  earning?: string;
}

interface IPayload {
  payload: IData[];
}
interface IProps {
  isLoading: boolean;
  isSuccess: boolean;
  data: IPayload;
}

const CourseTable: FunctionComponent<IProps> = ({
  isLoading,
  data,
  isSuccess,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  if (isLoading) {
    return <Skeleton variant="rectangular" style={{ height: '92vh' }} />;
  }

  const _handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const _handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box style={{ padding: '2em' }}>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#f6f6f6' }}>
            <TableRow>
              {HEAD.map((title: string) => (
                <TableCell key={title}>
                  <Typography variant="h5">{title}</Typography>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data && data.payload.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={_handleChangePage}
        onRowsPerPageChange={_handleChangeRowsPerPage}
      />
    </Box>
  );
};

export { CourseTable };
