import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .rc_root': {
      width: '100%',
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
  topWrapper: {
    background: '#4EC491',
    borderRadius: '15px',
    padding: '2em 1em',
    color: 'white',
    marginBottom: '1em',
  },
  aside: {
    background: 'white',
    height: '100vh',
    boxShadow:
      '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 5%)',
    borderRadius: '25px',
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
