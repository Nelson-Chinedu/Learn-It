import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    background: 'white',
    height: '100vh',
    '& .sidenav-wrapper': {
      width: '18%',
      position: 'fixed',
      height: '100vh',
    },
  },
});
