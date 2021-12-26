import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex !important',
    justifyContent: 'space-between',
    textAlign: 'center',
    '& img': {
      width: '120px',
    },
    '& .MuiTypography-subtitle1': {
      fontSize: '3rem',
    },
  },
});
