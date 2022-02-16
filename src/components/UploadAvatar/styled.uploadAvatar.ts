import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '20%',
    margin: 'auto',
    '& .MuiAvatar-root': {
      margin: 'auto',
    },
  },
  upload: {
    position: 'absolute',
    top: '30px',
    left: '75px',
    '& .MuiSvgIcon-root': {
      background: '#128c7e',
      borderRadius: '50px',
      width: '13px !important',
      height: '13px !important',
      padding: '10px',
      '& > *': {
        padding: '1em',
        color: 'white',
      },
    },
  },
  input: {
    display: 'none',
  },
});
