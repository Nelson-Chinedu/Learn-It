import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    margin: '4em 0px 5em',
    '& .MuiTypography-h3': {
      marginBottom: '.8em',
    },
    '& .MuiTypography-subtitle2': {
      lineHeight: '1.6em',
      marginBottom: '1em',
    },
  },
});
