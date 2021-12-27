import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    height: '100%',
    padding: '1em',
    backgroundImage:
      'linear-gradient(to right, #E9FCFC, #EEFEEA, #F8E5E3, #E6E9FF, #F1FFED)',
    '& .MuiTypography-h4': {
      fontSize: '1em',
      fontWeight: 500,
    },
  },
  avatar: {
    width: '40px !important',
    height: '40px !important',
  },
});
