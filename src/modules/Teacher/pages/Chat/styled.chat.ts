import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '78%',
    height: '85vh',
    overflow: 'hidden',
    '& .message': {
      fontSize: '10px',
    },
    '& .username': {
      fontSize: '14px',
    },
    '& .time': {
      fontSize: '10px',
    },
  },
  search: {
    margin: '1em 0px',
  },
});
