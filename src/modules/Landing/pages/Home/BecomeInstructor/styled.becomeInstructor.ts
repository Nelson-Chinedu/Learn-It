import { makeStyles } from '@mui/styles';
import { pxToRem } from 'src/helpers/formatFont';

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
    '& .MuiTypography-h4': {
      fontSize: pxToRem(20),
      fontWeight: 600,
      marginBottom: '.4em',
    },
  },
});
