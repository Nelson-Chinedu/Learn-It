import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    maxHeight: '650px',
    overflow: 'hidden',
    '& input': {
      fontSize: '1em',
      fontWeight: 100,
      fontStyle: 'normal',
    },
    '& input::placeholder': {
      fontSize: '15px',
    },
    '& .MuiTypography-h1': {
      fontSize: '4em',
    },
    '& .MuiSelect-select': {
      background: '#ECFAF3',
      fontSize: '1rem',
      fontWeight: 100,
      fontStyle: 'normal',
      padding: '10px 10px',
      borderRadius: '10px',
    },
    '& img': {
      width: '100%',
      objectFit: 'contain',
    },
  },
  searchWrapper: {
    marginTop: '4em',
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,.2)',
    borderRadius: '10px',
  },
});
