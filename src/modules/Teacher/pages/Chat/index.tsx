import { FunctionComponent, useState, useEffect, SetStateAction } from 'react';
import * as io from 'socket.io-client';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

import ChatConversation from 'src/assets/images/empty-chat-screen.gif';
import ChatNotFound from 'src/assets/images/chat-not-found.gif';

import { Card, Input, ChatReceiver, ChatSender } from 'src/components';

import { RootState } from 'src/store';

import { useGetMenteesQuery } from 'src/modules/Teacher/services/teacherSlice';

import { useStyles } from 'src/modules/Student/pages/Chat/styled.chat';

const socket = io.connect(process.env.REACT_APP_SERVER_URL);

const Chat: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');
  const [chats, setChats] = useState<
    Array<{ userId: string; picture: string; message: string }>
  >([]);
  const [roomNumber, setRoomNumber] = useState<string | number>('');
  const { userId, picture } = useSelector((state: RootState) => state.account);
  const [name, setName] = useState('');
  const { data, isLoading } = useGetMenteesQuery({ id: userId });

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

  const handleJoinRoom = ({
    roomId,
    name,
  }: {
    roomId: string | number;
    name: string;
  }) => {
    setRoomNumber(roomId);
    setName(name);
    if (roomNumber !== roomId) {
      socket.emit('join_room', roomId);
    }
  };

  const handleMessage = (e: { target: { value: SetStateAction<string> } }) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage('');
    socket.emit('chat', { roomNumber, message, userId, picture });
  };

  const ChatList = () => {
    if (chats.length === 0)
      return (
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          No chat history available
        </Typography>
      );

    return chats.map((chat) => {
      if (chat.userId === userId.toString()) return <ChatSender chat={chat} />;
      return <ChatReceiver chat={chat} name={name} />;
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
                      Ooppss...Chat list is empty at the moment.
                    </Typography>
                  </Box>
                ) : (
                  data?.payload?.map((user: any) => (
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="flex-start"
                      style={{ margin: '1em 0px 1.5em', cursor: 'pointer' }}
                      onClick={() =>
                        handleJoinRoom({
                          roomId: user.id,
                          name: `${user.mentee.firstname} ${user.mentee.lastname}`,
                        })
                      }
                      key={user.id}
                    >
                      <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item>
                            <Avatar
                              sx={{ width: 30, height: 30 }}
                              src={user.mentee.picture}
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle1"
                              className="username"
                              sx={{ textTransform: 'capitalize' }}
                            >
                              {`${user.mentee.firstname} ${user.mentee.lastname}`}
                            </Typography>
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
                      Tap on a mentee to start conversation
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
            <Grid container alignItems="center" className={classes.input}>
              <Grid item md={12} component="form" onSubmit={handleSendMessage}>
                <Input
                  size="small"
                  type="text"
                  name="search"
                  placeholder="Type message..."
                  fullWidth={true}
                  handleChange={handleMessage}
                  value={message}
                />
                <IconButton onClick={handleSendMessage} className="btnSend">
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Chat;
