import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '78%',
    height: '85vh',
    overflow: 'hidden',
    '& .message': {
      fontSize: '10px',
    },
    '& .username': {
      fontSize: '14px',
    },
    '& .time': {
      fontSize: '10px',
    },
  },
  search: {
    margin: '1em 0px',
  },
  chatContainer: {
    border: '1px solid #ebebeb',
    overflow: 'scroll',
    height: '73vh',
    padding: '1em .8em',
    marginBottom: '.3em',
    '& .containerHeader': {
      background: '#0050C8',
      color: '#fff',
      textAlign: 'center',
      padding: '1em',
      width: '80%',
      margin: '.4em auto',
      borderRadius: '5px',
    },
  },
  input: {
    position: 'relative',
    '& .btnSend': {
      position: 'absolute',
      right: '3px',
      bottom: '3px',
      background: '#0050C8',
      '&:hover': {
        background: '#0050C8',
      },
      '& .MuiSvgIcon-root': {
        color: 'white',
      },
    },
  },
});
