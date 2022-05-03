import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {},
  emptyState: {
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-10%, 50%)',
    '& .MuiTypography-body1': {
      marginBottom: '.4em',
    },
  },
});
