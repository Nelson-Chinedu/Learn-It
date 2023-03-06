import { FunctionComponent, useState, useEffect, SetStateAction } from 'react';
import * as io from 'socket.io-client';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import ChatConversation from 'src/assets/images/empty-chat-screen.gif';
import ChatNotFound from 'src/assets/images/chat-not-found.gif';

import { Card, Input, Button, ChatReceiver, ChatSender } from 'src/components';

import { RootState } from 'src/store';

import { useGetCoursesQuery } from 'src/modules/Teacher/services/teacherSlice';

import { ICourseData } from 'src/interface/course';

import { useStyles } from 'src/modules/Student/pages/Chat/styled.chat';

const socket = io.connect(process.env.REACT_APP_SERVER_URL);

const Chat: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');
  const [chats, setChats] = useState<
    Array<{ userId: string; picture: string; message: string }>
  >([]);
  const [roomNumber, setRoomNumber] = useState<string>('');
  const { userId, picture } = useSelector((state: RootState) => state.account);

  const { data, isLoading } = useGetCoursesQuery(userId);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChats((prev) => [...prev, data]);
    });
  }, [socket]);

  useEffect(() => {
    // Reset chat to an empty array when room number changes
    setChats([]);
  }, [roomNumber]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};

  const handleJoinRoom = (room: string) => {
    setRoomNumber(room);
    socket.emit('join_room', room);
  };

  const handleMessage = (e: { target: { value: SetStateAction<string> } }) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    setMessage('');
    socket.emit('chat', { roomNumber, message, userId, picture });
  };

  const ChatList = () => {
    return chats.map((chat) => {
      if (chat.userId === userId.toString()) return <ChatSender chat={chat} />;
      return <ChatReceiver chat={chat} />;
    });
  };

  return (
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
            height="84vh"
            overflow="scroll"
          >
            <Box style={{ padding: '20px' }}>
              {data && data.payload.length !== 0 && (
                <>
                  <Typography variant="h5">Your Channel</Typography>
                  <Box className={classes.search}>
                    <Input
                      size="small"
                      type="search"
                      name="search"
                      placeholder="Search"
                      fullWidth
                      handleChange={handleChange}
                      onBlur={handleChange}
                    />
                  </Box>
                </>
              )}

              <Box>
                {isLoading ? (
                  <Typography>Please wait...</Typography>
                ) : !data.payload.length ? (
                  <Box>
                    <img
                      src={ChatNotFound}
                      alt="Empty chat"
                      style={{ width: '300px', height: '300px' }}
                    />
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                      Ooppss...Channel list is empty at the moment.
                    </Typography>
                  </Box>
                ) : (
                  data?.payload?.map((user: ICourseData) => (
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="flex-start"
                      style={{ margin: '1em 0px 1.5em', cursor: 'pointer' }}
                      onClick={() => handleJoinRoom(user.id)}
                      key={user.id}
                    >
                      <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item>
                            <Avatar
                              sx={{ width: 40, height: 40 }}
                              src={user.thumbnail}
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              className="username"
                            >
                              {`${user.name} Channel`}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <Typography variant="subtitle2" className="time">
                              10:00
                            </Typography>
                            <Badge badgeContent={3} color="secondary" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                )}
              </Box>
            </Box>
          </Card>
        </Grid>
        {data && data.payload.length !== 0 && (
          <Grid item md={8}>
            <Box
              sx={{
                border: '1px solid #ebebeb',
                overflow: 'scroll',
                height: '73vh',
                padding: '1em .8em',
                marginBottom: '.3em',
              }}
            >
              {!roomNumber ? (
                <>
                  <Box
                    sx={{
                      background: '#0050C8',
                      color: '#fff',
                      textAlign: 'center',
                      padding: '1em',
                      width: '80%',
                      margin: '.4em auto',
                      borderRadius: '5px',
                    }}
                  >
                    <Typography variant="body2">
                      Tap a channel to join conversation
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <img
                      src={ChatConversation}
                      alt=""
                      style={{ width: '400px', height: '400px' }}
                    />
                  </Box>
                </>
              ) : (
                ChatList()
              )}
            </Box>
            <Grid container alignItems="center">
              <Grid item md={11}>
                <Input
                  size="small"
                  type="text"
                  name="search"
                  placeholder="Type message..."
                  fullWidth={true}
                  handleChange={handleMessage}
                  value={message}
                />
              </Grid>
              <Grid item md={1}>
                <Button
                  fullWidth={true}
                  onClick={handleSendMessage}
                  size="large"
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Chat;
