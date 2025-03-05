import { FunctionComponent, useState, useEffect, SetStateAction } from 'react';
import * as io from 'socket.io-client';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

import ChatConversation from 'src/assets/images/empty-chat-screen.gif';
import ChatNotFound from 'src/assets/images/chat-not-found.gif';

import { Card, Input, ChatReceiver, ChatSender } from 'src/components';

import { RootState } from 'src/store';

import { useGetMentorsQuery } from 'src/modules/Student/services/studentSlice';

import {
  Wrapper,
  SearchWrapper,
  ChatContainer,
  InputWrapper,
} from 'src/modules/Student/pages/Chat/styled.chat';

const socket = io.connect(process.env.REACT_APP_SERVER_URL);

interface IChat {
  id: string;
  mentor: {
    firstname: string;
    lastname: string;
    picture: string;
  };
}

const Chat: FunctionComponent<Record<string, never>> = () => {
  const [message, setMessage] = useState<string>('');
  const [chats, setChats] = useState<
    Array<{ userId: string; picture: string; message: string }>
  >([]);
  const [roomNumber, setRoomNumber] = useState<string | number>('');
  const [name, setName] = useState('');
  const { userId, picture } = useSelector((state: RootState) => state.account);
  const { isCollapsedSidenav } = useSelector(
    (state: RootState) => state.sidenav,
  );

  const { data, isFetching } = useGetMentorsQuery(
    { id: userId },
    { skip: !userId },
  );

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
    <Wrapper isCollapsedSidenav={isCollapsedSidenav}>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="space-between"
        spacing={2}
      >
        <Grid size={{ md: 4 }} style={{ position: 'relative' }}>
          <Card
            borderRadius="10px"
            width="100%"
            height="84vh"
            overflow="scroll"
          >
            <Box style={{ padding: '20px' }}>
              {data && data.payload.length !== 0 && (
                <>
                  <Typography variant="h5">Chat</Typography>
                  <SearchWrapper>
                    <Input
                      size="small"
                      type="search"
                      name="search"
                      placeholder="Search"
                      fullWidth
                      handleChange={handleChange}
                      onBlur={handleChange}
                    />
                  </SearchWrapper>
                </>
              )}

              <Box>
                {isFetching ? (
                  <Typography>Please wait...</Typography>
                ) : !data?.payload?.length ? (
                  <Box>
                    <img
                      src={ChatNotFound}
                      alt=""
                      style={{ width: '300px', height: '300px' }}
                    />
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                      Ooppss...Your chat list is empty at the moment.
                    </Typography>
                  </Box>
                ) : (
                  data &&
                  data?.payload?.map((user: IChat) => (
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="flex-start"
                      style={{ margin: '1em 0px 1.5em', cursor: 'pointer' }}
                      onClick={() =>
                        handleJoinRoom({
                          roomId: user.id,
                          name: `${user?.mentor?.firstname} ${user?.mentor?.lastname}`,
                        })
                      }
                      key={user.id}
                    >
                      <Grid>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid>
                            <Avatar
                              sx={{ width: 30, height: 30 }}
                              src={user?.mentor?.picture}
                            />
                          </Grid>
                          <Grid>
                            <Typography
                              variant="subtitle1"
                              className="username"
                              sx={{ textTransform: 'capitalize' }}
                            >
                              {`${user?.mentor?.firstname} ${user?.mentor?.lastname}`}
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
          <Grid size={{ md: 8 }}>
            <ChatContainer>
              {!roomNumber ? (
                <>
                  <Box className="containerHeader">
                    <Typography variant="body2">
                      Tap on a mentor to start conversation
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
            </ChatContainer>
            <InputWrapper container alignItems="center">
              <Grid
                size={{ md: 12 }}
                component="form"
                onSubmit={handleSendMessage}
              >
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
            </InputWrapper>
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
};

export default Chat;
