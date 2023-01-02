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
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        color: '#4EC491',
        '& .MuiTypography-subtitle2': {
          backgroundColor: '#EBF9F2',
          borderLeft: '4px solid #4EC491',
        },
      },
      '& .MuiTypography-subtitle2': {
        margin: '1em 0px',
        padding: '.5em 1em',
        borderLeft: '4px solid white',
      },
    },
  },
});
