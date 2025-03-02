import { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

import { RootState } from 'src/store';

import { Menu } from 'src/components';

import NewTaskModal from 'src/modules/Teacher/components/Modals/NewTaskModal';

import { useGetSubscriptionsQuery } from 'src/modules/Teacher/services/teacherSlice';

import useMenu from 'src/hooks/useMenu';
import useModal from 'src/hooks/useModal';

const StudentList: FunctionComponent<Record<string, never>> = () => {
  const { pathname } = useLocation();

  const { userId } = useSelector((state: RootState) => state.account);

  const { open, anchorEl, handleClick, handleClose } = useMenu();
  const [state, setState] = useModal();

  const { data, isFetching } = useGetSubscriptionsQuery({ id: userId });

  const [selected, setSelected] = useState('');

  const _handleAddNewTask = () => {
    setState({ ...state, modalName: 'NewTask', data: selected });
  };
  if (isFetching) {
    return <Typography>Please wait..</Typography>;
  }

  return (
    <>
      {!isFetching && data.payload.length === 0 ? (
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            margin: 'auto',
          }}
        >
          <Typography variant="h2">
            You don't have any Mentee subscribed Yet
          </Typography>
        </Box>
      ) : (
        <Box style={{ padding: '20px' }}>
          <Box style={{ margin: '2em 0px 0px' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.payload.map(
                    (student: {
                      id: string;
                      firstname: string;
                      lastname: string;
                      picture: string;
                      is_active: boolean;
                      phone: string;
                      email: string;
                    }) => (
                      <TableRow key={student.id} hover>
                        <TableCell
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            py: '10px',
                          }}
                        >
                          <Avatar
                            alt={'Student'}
                            src={student.picture}
                            sx={{ width: 40, height: 40 }}
                          >
                            {`${student.firstname.charAt(0)} `}
                          </Avatar>

                          {`${student.firstname} ${student.lastname}`}
                        </TableCell>
                        <TableCell
                          sx={{
                            py: '10px',
                          }}
                        >
                          {student.email || '-'}
                        </TableCell>
                        <TableCell
                          sx={{
                            py: '10px',
                          }}
                        >
                          {student.phone || '-'}
                        </TableCell>
                        <TableCell
                          sx={{
                            py: '10px',
                          }}
                        >
                          <Chip
                            label={student.is_active ? 'Active' : 'Inactive'}
                            color={student.is_active ? 'success' : 'warning'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            py: '10px',
                          }}
                        >
                          <IconButton
                            sx={{ cursor: 'pointer' }}
                            onClick={(e) => {
                              setSelected(student.id);
                              handleClick(e);
                            }}
                          >
                            <MoreVert fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Menu
            menus={[
              {
                name: 'View',
                path: `${pathname}/${selected}`,
                action: () => null,
              },
              {
                name: 'New Task',
                path: `${pathname}`,
                action: _handleAddNewTask,
              },
              {
                name: 'Chat',
                path: '',
                action: () => null,
              },
            ]}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
          />
        </Box>
      )}
      <NewTaskModal />
    </>
  );
};

export default StudentList;
