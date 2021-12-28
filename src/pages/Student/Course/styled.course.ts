import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {},
  cardWrapper: {
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
    },
  },
  courseTitle: {
    margin: '.4em 0px !important',
  },
  author: {
    '& .MuiAvatar-circular': {
      width: '22px',
      height: '22px',
    },
    '& .MuiTypography-subtitle2': {
      fontSize: '12px',
    },
  },
  timeline: {
    '& .MuiTypography-subtitle2': {
      fontSize: '12px',
      color: '#5e5c5c',
    },
  },
  btnMentor: {
    '& .MuiButton-outlined': {
      textTransform: 'inherit',
    },
  },
  stepper: {
    '& .MuiTypography-subtitle2': {
      color: '#848487',
      fontSize: '12px',
    },
    '& .MuiTypography-subtitle1': {
      fontSize: '13px',
    },
  },
});

