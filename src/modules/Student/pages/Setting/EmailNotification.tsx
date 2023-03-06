import { ChangeEvent, FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';

import { EMAIL_NOTIFICATION } from 'src/constant/setting';

const EmailNotification: FunctionComponent<Record<never, string>> = () => {
  const _handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    //  eslint-disable-next-line no-console
    console.log(event.target.name, event.target.checked);
  };

  return (
    <Box sx={{ width: '70%', margin: '2em 0px' }}>
      {EMAIL_NOTIFICATION.map(
        (notification: { title: string; value: string }) => (
          <Stack
            key={notification.title as string}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2">{notification.title}</Typography>
            <Switch
              onChange={_handleToggle}
              inputProps={{ 'aria-label': 'controlled' }}
              name={notification.value}
            />
          </Stack>
        )
      )}
    </Box>
  );
};

export default EmailNotification;
