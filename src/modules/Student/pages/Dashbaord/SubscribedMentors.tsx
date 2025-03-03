import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import GridViewIcon from '@mui/icons-material/GridView';

import { RootState } from 'src/store';

import { Card, Button } from 'src/components';

import DefaultUser from 'src/assets/images/default_user.png';

import Collaboration from 'src/assets/images/collaboration.gif';

import ViewCourseModal from 'src/modules/Student/components/Modals/ViewCourseModal';
import useDrawer from 'src/hooks/useDrawer';

import { useGetMentorsQuery } from 'src/modules/Student/services/studentSlice';
import theme from 'src/Theme';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const SubscribedMentors: FunctionComponent<Record<string, never>> = () => {
  const [state, setState] = useDrawer();
  const navigate = useNavigate();
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isLoading } = useGetMentorsQuery({ id: userId });

  const [layout, setLayout] = useState('board');

  const _handleOpenDrawer = () => {
    setState({ ...state, drawerName: 'newMentor' });
  };

  const _handleMessage = () => {
    navigate('/s/chat');
  };

  const _handleLayout = (layout: string) => {
    setLayout(layout);
  };

  return (
    <>
      {data && data.payload.length > 0 && (
        <>
          <Grid
            container
            alignItems={'center'}
            justifyContent="space-between"
            style={{ padding: '20px 0px' }}
          >
            <Grid item>
              <Typography variant="h2">Mentors</Typography>
            </Grid>
            {!isLoading && data && data.payload.length > 0 && (
              <Grid item>
                <Button variant="outlined" onClick={_handleOpenDrawer}>
                  <AddIcon /> Subscribe
                </Button>
              </Grid>
            )}
          </Grid>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            gap={4}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              borderBottom={
                layout === 'board' && `1px solid ${theme.palette.primary.main}`
              }
              pb={1}
              sx={{ cursor: 'pointer' }}
              onClick={() => _handleLayout('board')}
              gap={1}
            >
              <GridViewIcon />
              <Typography>Board</Typography>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              borderBottom={
                layout === 'grid' && `1px solid ${theme.palette.primary.main}`
              }
              pb={1}
              sx={{ cursor: 'pointer' }}
              onClick={() => _handleLayout('grid')}
              gap={1}
            >
              <CalendarViewMonthIcon />
              <Typography>Grid</Typography>
            </Stack>
          </Stack>
        </>
      )}
      <Box>
        <Grid container spacing={5}>
          {isLoading ? (
            <p>loading....</p>
          ) : (
            data &&
            data?.payload?.map((user: any) =>
              layout === 'board' ? (
                <Grid item md={4} key={user.id} mt={10}>
                  <Card
                    borderRadius="10px"
                    width="250px"
                    height="300px"
                    background="#0050C8"
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        py: 5,
                        height: '250px',
                        color: 'white',
                      }}
                    >
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ height: '250px' }}
                      >
                        <Box>
                          <Avatar
                            src={user?.mentor?.picture || DefaultUser}
                            alt="profile picture"
                            sx={{
                              width: 90,
                              height: 90,
                              margin: '0px auto .8em',
                            }}
                          />
                          <Typography
                            variant="h5"
                            sx={{
                              letterSpacing: '.05em',
                              textTransform: 'capitalize',
                            }}
                          >
                            {`${user?.mentor?.firstname} ${user?.mentor?.lastname}`}
                          </Typography>
                          <Typography variant="subtitle1">
                            {user.mentor.bio.title}
                          </Typography>
                          <Typography variant="subtitle1">
                            {user.mentor.bio.company}
                          </Typography>
                        </Box>
                        <Button
                          fullWidth={false}
                          variant="outlined"
                          handleClick={_handleMessage}
                          sx={{
                            color: 'white',
                            border: '1px solid #B3CDFF',
                            '&:hover': {
                              border: '1px solid #fff',
                              background: '#fff',
                              color: '#0050C8',
                            },
                          }}
                        >
                          Message
                        </Button>
                      </Stack>
                    </Box>
                  </Card>
                </Grid>
              ) : (
                <TableContainer
                  sx={{
                    maxHeight: 440,
                    mt: 15,
                    marginLeft: '1em',
                  }}
                >
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.payload.map(
                        (user: {
                          id: string;
                          mentor: {
                            picture: string;
                            firstname: string;
                            lastname: string;
                            bio: {
                              company: string;
                              title: string;
                            };
                          };
                        }) => (
                          <TableRow hover key={user.id}>
                            <TableCell
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                py: '10px',
                              }}
                            >
                              <Avatar
                                alt={'Mentor'}
                                src={user.mentor.picture}
                                sx={{ width: 40, height: 40 }}
                              >
                                {`${user.mentor.firstname.charAt(0)} `}
                              </Avatar>
                              {`${user.mentor.firstname} ${user.mentor.lastname}`}
                            </TableCell>
                            <TableCell
                              sx={{
                                py: '10px',
                              }}
                            >
                              {user.mentor.bio.title}
                            </TableCell>
                            <TableCell
                              sx={{
                                py: '10px',
                              }}
                            >
                              {user.mentor.bio.company}
                            </TableCell>
                            <TableCell sx={{ py: '10px' }}>
                              <Button
                                fullWidth={false}
                                variant="outlined"
                                handleClick={_handleMessage}
                                sx={{
                                  border: '1px solid #B3CDFF',
                                  '&:hover': {
                                    border: '1px solid #fff',
                                    background: theme.palette.primary.main,
                                    color: '#fff',
                                  },
                                }}
                              >
                                Message
                              </Button>
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              )
            )
          )}
        </Grid>
        {data && data.payload.length === 0 && (
          <Box sx={{ width: '50%', margin: '3em auto', textAlign: 'center' }}>
            <img
              src={Collaboration}
              style={{ width: '350px', height: '350px' }}
            />
            <Typography
              variant="h4"
              sx={{ marginTop: '-1em', marginBottom: '.8em' }}
            >
              Stay on the move, subscribe to a mentor!
            </Typography>
            <Button fullWidth={false} handleClick={_handleOpenDrawer}>
              Subscribe
            </Button>
          </Box>
        )}
      </Box>
      <ViewCourseModal />
    </>
  );
};

export { SubscribedMentors };
