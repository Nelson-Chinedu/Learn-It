import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import DefaultUser from 'src/assets/images/default_user.png';

import { SenderWrapper } from 'src/components/Chat/styled.chat';

type Props = {
  chat: {
    picture: string;
    message: string;
  };
};

const ChatSender: FunctionComponent<Props> = ({ chat }) => {
  return (
    <SenderWrapper>
      <Avatar
        alt="Profile picture"
        src={chat?.picture || DefaultUser}
        sx={{
          width: 30,
          height: 30,
          textTransform: 'capitalize',
          fontSize: '12px',
        }}
      />
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          sx={{ width: '95%', margin: '0px auto .2em' }}
        >
          <Typography
            sx={{ textAlign: 'right', marginRight: '.6em', fontWeight: 600 }}
          >
            You
          </Typography>
        </Stack>
        <Box className="message">
          <Typography>{chat.message}</Typography>
        </Box>
      </Box>
    </SenderWrapper>
  );
};

export { ChatSender };
