import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      fontWeight: 100,
      fontStyle: 'normal',
      '& label': {
        fontSize: '15px',
      },
    },
    '& .MuiFormLabel-root': {
      fontWeight: 100,
      fontStyle: 'normal',
    },
    '& .MuiButton-contained': {
      textTransform: 'capitalize',
    },
  },
  imageWrapper: {
    '& img': {
      width: '100%',
      objectFit: 'cover',
      height: '100vh',
    },
  },
  formWrapper: {
    margin: 'auto !important',
    '& .MuiGrid-container': {
      margin: '1em 0px',
      width: '100%',
      '& .MuiGrid-item:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },
  signup: {
    textAlign: 'left',
    paddingLeft: '0px !important',
    width: '100%',
    '& a': {
      color: 'inherit',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
});
