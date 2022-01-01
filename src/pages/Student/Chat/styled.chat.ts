import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
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
  fabStyle: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    textAlign: 'right',
    zIndex: 9999999,
  },
});
