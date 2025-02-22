import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: (props?: any) => ({
    position: 'absolute',
    background: 'white',
    color: 'black',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    borderRadius: '10px',
    width: props.width,
    maxHeight: '650px',
    overflowY: 'scroll',
    '& .MuiBox-root': {
      outline: 'none',
      border: 'none',
    },
  }),
});
