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
        paddingLeft: '1.5em',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  active: {
    color: '#00419e',
    borderRight: '3px solid #00419e !important',
  },
  inactive: { color: '#848487' },
  logo: {
    textAlign: 'left',
    fontWeight: 500,
    padding: '1em 1em 0px !important',
  },
});
