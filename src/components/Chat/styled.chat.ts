import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  sender: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    marginBottom: '1em',
    '& .message': {
      background: theme.palette.primary.light,
      width: '300px',
      maxWidth: '400px',
      borderRadius: '4px',
      padding: '20px 10px',
      marginRight: '2px',
    },
  },
  receiver: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '1em',
    '& .message': {
      background: '#ebebeb',
      width: '300px',
      maxWidth: '400px',
      borderRadius: '4px',
      padding: '20px 10px',
      marginLeft: '2px',
    },
  },
}));
