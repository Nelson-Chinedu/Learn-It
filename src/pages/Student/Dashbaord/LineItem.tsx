import { FunctionComponent, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles({
  root: {
    border: '1px solid #e3e0e0',
    padding: '10px',
    margin: '10px',
  },
});

const LineItem: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};

export { LineItem };
