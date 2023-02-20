import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { Card, Button } from 'src/components';

import Mentor11 from 'src/assets/images/mentor11.png';
import DefaultUser from 'src/assets/images/default_user.png';
import PlusIcon from 'src/assets/images/plus.png';

import ViewCourseModal from 'src/modules/Student/components/Modals/ViewCourseModal';

const SubscribedMentors: FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        style={{ padding: '20px 0px' }}
      >
        <Grid item>
          <Typography variant="h2">Mentors</Typography>
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={5}>
          {[0].map((mentor) => (
            <Grid item md={4} key={mentor}>
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
                        src={Mentor11 || DefaultUser}
                        alt="profile picture"
                        sx={{ width: 90, height: 90, margin: '0px auto .8em' }}
                      />
                      <Typography variant="h5" sx={{ letterSpacing: '.05em' }}>
                        Jane Matilda
                      </Typography>
                      <Typography variant="subtitle1">
                        Senior Software Engineer
                      </Typography>
                      <Typography variant="subtitle1">Meta</Typography>
                    </Box>
                    <Button
                      fullWidth={false}
                      variant="outlined"
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
          ))}
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
        </Grid>
      </Box>
      <ViewCourseModal />
    </>
  );
};

export { SubscribedMentors };
