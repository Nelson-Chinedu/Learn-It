import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useStyles } from 'src/components/Footer/styled.footer';

const Footer: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>&copy; copyright</Typography>
    </Box>
  );
};

export { Footer };
