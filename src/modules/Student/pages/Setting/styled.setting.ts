import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiTypography-subtitle2': {
      fontSize: '.9rem',
    },
    '& .MuiTypography-subtitle1': {
      marginBottom: '2em',
    },
    '& .nav': {
      background: '#fff',
      margin: '1em 0px',
      padding: '2em 1em',
      textAlign: 'center',
      borderRadius: '5px',
      '&:hover': {
        background: theme.palette.primary.main,
        color: '#fff',
        cursor: 'pointer',
      },
    },
    '& .active': {
      background: theme.palette.primary.main,
      color: '#fff',
    },
    '& .rightWrapper': {
      marginBottom: '1em',
    },
  },
}));
