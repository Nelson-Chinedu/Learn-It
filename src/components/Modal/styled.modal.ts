import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    position: 'absolute',
    background: 'white',
    color: 'black',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    borderRadius: '10px',
    width: '50%',
    maxHeight: '650px',
    overflowY: 'scroll',
    '& .MuiBox-root': {
      outline: 'none',
      border: 'none',
    },
  },
});
