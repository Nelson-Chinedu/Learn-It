import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: 'white',
    height: '100vh',
    borderRight: '1px solid #e3e0e0',
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
  active: {
    color: '#4EC491',
    '& .MuiTypography-subtitle2': {
      backgroundColor: '#EBF9F2',
      borderLeft: '4px solid #4EC491 !important',
    },
  },
  inactive: { color: '#848487' },
  logo: {
    textAlign: 'center',
    fontWeight: 500,
  },
});
