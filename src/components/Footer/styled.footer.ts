import { Theme } from '@mui/system';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.main,
    padding: '2em',
    textAlign: 'center',
    color: '#fff',
  },
}));
