import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .rc_root': {
      width: '100%',
      borderRadius: '0px !important',
      '& .rc': {
        width: '100% !important',
      },
    },
  },
  wrapper: {
    padding: '1em',
    marginBottom: '1em',
    textAlign: 'center',
    '& .MuiTypography-subtitle2': {
      fontSize: '14px',
    },
  },
  aside: {
    background: 'white',
    height: '100vh',
    borderLeft: '1px solid #e3e0e0',
    width: '20%',
    paddingTop: '0px !important',
    paddingLeft: '0px !important',
    position: 'fixed',
    right: 0,
    top: 64,
  },
  authorWrapper: {
    '& .MuiTypography-subtitle2': {
      lineHeight: '1.4em',
    },
    '& .MuiTypography-subtitle2:nth-child(2)': {
      fontSize: '.8rem',
    },
  },
});
