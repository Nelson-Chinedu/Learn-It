import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid2';

import NewTaskModal from 'src/modules/Teacher/components/Modals/NewTaskModal';

import { Button } from 'src/components';

import { BASE_PATHS, MENTOR_PATHS } from 'src/constant/path';

import { truncate } from 'src/helpers/truncate';

import { RootState } from 'src/store';

import {
  useGetAssignedTasksQuery,
  useGetMenteeDetailQuery,
} from 'src/modules/Teacher/services/teacherSlice';

import useModal from 'src/hooks/useModal';
import { styled } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  root: {
    '& .MuiBreadcrumbs-ol': {
      '& .MuiBreadcrumbs-li': {
        '& a': {
          color: theme.palette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
}));

const STATUS_COLOR: Record<string, any> = {
  todo: 'default',
  pending: 'info',
  in_review: 'warning',
  completed: 'primary',
  submitted: 'success',
  in_progress: 'info',
  done: 'success',
};

const ViewPage: FC = () => {
  const [state, setState] = useModal();

  const { userId } = useSelector((state: RootState) => state.account);
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data, isFetching, error, isError } = useGetAssignedTasksQuery<
    Record<string, any>
  >(
    {
      mentorId: userId,
      menteeId: id,
    },
    { skip: !userId },
  );
  const { data: menteeData, isFetching: isFetchingMentee } =
    useGetMenteeDetailQuery(
      {
        mentorId: userId,
        menteeId: id,
      },
      { skip: !userId },
    );

  const handleViewTask = (id: string) => {
    navigate(`${pathname}/task/${id}`);
  };

  const _handleAddNewTask = () => {
    setState({ ...state, modalName: 'NewTask' });
  };

  if (!userId)
    return (
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress size={20} />
      </Box>
    );

  return (
    <Wrapper>
      {isFetchingMentee || isFetching ? (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={20} />
        </Box>
      ) : (
        <Box>
          <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link to={`/${BASE_PATHS.MENTOR}/${MENTOR_PATHS.MENTEES}`}>
                Student
              </Link>
              <Typography>{`${menteeData.payload.firstname} ${menteeData.payload.lastname}`}</Typography>
            </Breadcrumbs>
            <Button fullWidth={false} onClick={_handleAddNewTask}>
              New Task
            </Button>
          </Stack>
          <Box
            sx={{
              border: '1px solid #b2b2b254',
              my: 8,
              borderRadius: '8px',
              py: 4,
              px: 4,
            }}
          >
            <Grid container gap={2} alignItems={'center'}>
              <Grid>
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src={menteeData.payload.picture}
                />
              </Grid>
              <Grid>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                  <Typography variant="h5">
                    {menteeData.payload.firstname}
                  </Typography>
                  <Typography variant="h5">
                    {menteeData.payload.lastname}
                  </Typography>
                </Stack>
                <Typography variant="subtitle2">
                  {menteeData.payload.email}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box style={{ margin: '2em 0px 0px' }}>
            {isError && error.status === 404 ? (
              <Typography>{error.data.message}</Typography>
            ) : data.payload.length === 0 ? (
              <Typography>No Task Assigned Yet!</Typography>
            ) : (
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Task</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Date Created</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.payload.map(
                      (task: {
                        id: string;
                        title: string;
                        dueDate: string;
                        createdAt: string;
                        status: string;
                      }) => (
                        <TableRow hover key={task.id}>
                          <TableCell
                            sx={{
                              py: '10px',
                            }}
                          >
                            {`${truncate(task.title, 30)}`}
                          </TableCell>
                          <TableCell
                            sx={{
                              py: '10px',
                            }}
                          >
                            {format(new Date(task.dueDate), 'dd/MM/yyyy')}
                          </TableCell>
                          <TableCell
                            sx={{
                              py: '10px',
                            }}
                          >
                            {format(new Date(task.createdAt), 'dd/MM/yyyy')}
                          </TableCell>
                          <TableCell
                            sx={{
                              py: '10px',
                              textTransform: 'capitalize',
                            }}
                          >
                            <Chip
                              label={task.status?.replace(/_/gi, ' ')}
                              color={STATUS_COLOR[task.status]}
                              size="small"
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              py: '10px',
                            }}
                          >
                            <IconButton
                              onClick={() => {
                                handleViewTask(task.id);
                              }}
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ),
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Box>
      )}
      <NewTaskModal />
    </Wrapper>
  );
};

export default ViewPage;
