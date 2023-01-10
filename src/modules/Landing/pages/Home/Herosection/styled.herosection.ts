import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    maxHeight: '650px',
    overflow: 'hidden',
    '& .MuiTypography-h1': {
      fontSize: '4em',
    },
    '& img': {
      width: '100%',
      objectFit: 'contain',
    },
  },
});
