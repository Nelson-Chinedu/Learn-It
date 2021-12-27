import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: 'white',
    height: '100vh',
    borderRadius: '25px',
    padding: '2em 0px',
    boxShadow:
      '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 5%)',
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
