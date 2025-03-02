import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      fontWeight: 400,
      fontStyle: 'normal',
      '& label': {
        fontSize: '15px',
      },
    },
    '& .MuiFormLabel-root': {
      fontWeight: 400,
      fontStyle: 'normal',
    },
    '& .MuiButton-contained': {
      textTransform: 'capitalize',
    },
    '& .MuiCircularProgress-svg': {
      '& > *': {
        color: 'white',
      },
    },
  },
  imageWrapper: {
    '& img': {
      width: '50%',
      objectFit: 'cover',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0
    },
  },
  formWrapper: {
    marginTop: '15em',
    '& .MuiGrid-container': {
      margin: '1em 0px',
      width: '100%',
      '& .MuiGrid-item': {
        paddingTop: '0px !important',
      },
      '& .MuiGrid-item:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },
  signup: {
    textAlign: 'left',
    paddingLeft: '0px !important',
    width: '100%',
    marginTop: '.5em !important',
    '& a': {
      color: 'inherit',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
});
