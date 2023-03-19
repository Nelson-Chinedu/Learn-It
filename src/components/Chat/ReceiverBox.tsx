import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import DefaultUser from 'src/assets/images/default_user.png';

import { useStyles } from 'src/components/Chat/styled.chat';

type Props = {
  chat: {
    picture: string;
    message: string;
  };
  name?: string;
};

const ChatReceiver: FunctionComponent<Props> = ({ chat, name }) => {
  const classes = useStyles();

  return (
    <Box className={classes.receiver}>
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
        <Typography
          sx={{
            textAlign: 'left',
            marginLeft: '.6em',
            fontWeight: 600,
            textTransform: 'capitalize',
          }}
        >
          {name}
        </Typography>
        <Box className="message">
          <Typography>{chat.message}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { ChatReceiver };
