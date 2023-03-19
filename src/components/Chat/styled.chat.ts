// import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  sender: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row-reverse',
    marginBottom: '1em',
    '& .message': {
      // background: theme.palette.primary.light,
      background: '#e4edff',
      width: '300px',
      maxWidth: '400px',
      borderRadius: '20px',
      padding: '20px 10px',
      marginRight: '2px',
    },
  },
  receiver: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1em',
    '& .message': {
      // background: '#ebebeb',
      background: '#f8f8f8',
      width: '300px',
      maxWidth: '400px',
      borderRadius: '20px',
      padding: '20px 10px',
      marginLeft: '2px',
    },
  },
}));
