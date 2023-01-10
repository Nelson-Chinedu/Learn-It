import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: 'white',
    height: '100vh',
    borderRight: '1px solid #e3e0e0',
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        color: '#0056d2',
        '& .MuiTypography-subtitle2': {},
      },
      '& .MuiTypography-subtitle2': {
        margin: '1em 0px',
        padding: '1em 1em',
        borderLeft: '4px solid white',
      },
    },
  },
  active: {
    color: '#00419e',
    '& .MuiTypography-subtitle2': {
      borderRight: '3px solid #00419e !important',
    },
  },
  inactive: { color: '#848487' },
  logo: {
    textAlign: 'left',
    fontWeight: 500,
    padding: '1em 1em 0px !important',
  },
});
