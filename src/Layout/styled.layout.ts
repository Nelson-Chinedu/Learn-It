import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    background: 'white',
    height: '100vh',
    '& .sidenav-wrapper': {
      width: (isCollapsedSidenav) => (isCollapsedSidenav ? '5%' : '18%'),
      position: 'fixed',
      height: '100vh',
      transition: 'width .2s',
      transitionTimingFunction: 'ease-in-out',
    },
  },
});
