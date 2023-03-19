import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { RootState } from 'src/store';

import { Card, Button } from 'src/components';

import DefaultUser from 'src/assets/images/default_user.png';
import PlusIcon from 'src/assets/images/plus.png';
import Collaboration from 'src/assets/images/collaboration.gif';

import ViewCourseModal from 'src/modules/Student/components/Modals/ViewCourseModal';
import useDrawer from 'src/hooks/useDrawer';

import { useGetMentorsQuery } from 'src/modules/Student/services/studentSlice';

const SubscribedMentors: FunctionComponent<Record<string, never>> = () => {
  const [state, setState] = useDrawer();
  const navigate = useNavigate();
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isLoading } = useGetMentorsQuery({ id: userId });

  const _handleOpenDrawer = () => {
    setState({ ...state, drawerName: 'newMentor' });
  };

  const _handleMessage = () => {
    navigate('/s/chat');
  };

  return (
    <>
      {data && data.payload.length > 0 && (
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: '20px 0px' }}
        >
          <Grid item>
            <Typography variant="h2">Mentors</Typography>
          </Grid>
        </Grid>
      )}
      <Box>
        <Grid container spacing={5}>
          {isLoading ? (
            <p>loading....</p>
          ) : (
            data &&
            data?.payload?.map((user: any) => (
              <Grid item md={4} key={user.id}>
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
                          src={user.mentor.picture || DefaultUser}
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
                          {`${user.mentor.firstname} ${user.mentor.lastname}`}
                        </Typography>
                        <Typography variant="subtitle1">
                          Senior Software Engineer
                        </Typography>
                        <Typography variant="subtitle1">Meta</Typography>
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
            ))
          )}
          {!isLoading && data && data.payload.length > 0 && (
            <Grid item md={4}>
              <Card
                borderRadius="10px"
                width="250px"
                height="300px"
                border="1px solid rgb(0, 80, 200)"
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: '5em 0px',
                    cursor: 'pointer',
                  }}
                  onClick={_handleOpenDrawer}
                >
                  <img
                    src={PlusIcon}
                    alt=""
                    style={{ width: '80px', height: '80px' }}
                  />
                  <Typography variant="subtitle2" mt={3}>
                    Subscribe to another mentor
                  </Typography>
                </Box>
              </Card>
            </Grid>
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
