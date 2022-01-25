import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { useStyles } from 'src/pages/Student/Chat/styled.chat';

import { USER } from 'src/constant/chat';

import { Card, Input, Button } from 'src/components';

import { Layout } from 'src/Layout/student';

import AvatarUser from 'src/assets/images/Avatar.png';

const Chat: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};
  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item md={4} style={{ position: 'relative' }}>
            <Card
              borderRadius="10px"
              width="100%"
              height="100vh"
              overflow="scroll"
            >
              <Box style={{ padding: '20px' }}>
                <Typography variant="subtitle2">Chat</Typography>
                <Box className={classes.search}>
                  <Input
                    variant="outlined"
                    color="primary"
                    size="small"
                    type="search"
                    name="search"
                    placeholder="Search"
                    fullWidth
                    handleChange={handleChange}
                  />
                </Box>
                <Box style={{ margin: '1em 0px 2em' }}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Grid item md={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        fullWidth
                        disableElevation
                      >
                        Instructors
                      </Button>
                    </Grid>
                    <Grid item md={6}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        fullWidth
                        disableElevation
                      >
                        Peers
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  {USER.map((user) => (
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="flex-start"
                      style={{ margin: '1em 0px 1.5em' }}
                    >
                      <Grid item>
                        <Grid container alignItems="flex-start" spacing={1}>
                          <Grid item>
                            <Avatar
                              sx={{ width: 40, height: 40 }}
                              src={AvatarUser}
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              className="username"
                            >
                              {user.name}
                            </Typography>
                            <Typography variant="subtitle2" className="message">
                              {user.message}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems="center"
                          style={{ textAlign: 'center' }}
                        >
                          <Grid item>
                            <Typography variant="subtitle2" className="time">
                              10:00
                            </Typography>
                            {user.newMessage && (
                              <Badge badgeContent={3} color="secondary" />
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              </Box>
              <Box className={classes.fabStyle}>
                <Fab color="primary" size="small" disableRipple={false}>
                  <AddIcon />
                </Fab>
              </Box>
            </Card>
          </Grid>
          <Grid item md={8}>
            <Typography>Chat pane here</Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Chat;
