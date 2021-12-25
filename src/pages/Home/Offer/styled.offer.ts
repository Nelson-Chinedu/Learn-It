import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiTypography-subtitle1': {
      margin: '.3em 0px',
    },
    '& .MuiTypography-subtitle2': {
      fontSize: '.9rem',
      lineHeight: '1.3em',
    },
  },
  title: {
    textAlign: 'center',
    width: '30%',
    margin: '6em auto 7em',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
    margin: 'auto',
  },
  expertWrapper: {
    position: 'relative',
    '& img': {
      '&:nth-child(1)': {
        position: 'absolute',
        top: -150,
        left: -35,
        zIndex: -4,
      },
    },
  },
  cardContent: {
    textAlign: 'center',
    '& img': {
      width: '200px',
      margin: '1em 0px',
    },
  },
  cardContentMid: {
    textAlign: 'center',
    '& img': {
      width: '120px',
      margin: '1em 0px',
    },
  },
  certificationWrapper: {
    position: 'relative',
    bottom: -130,
    '& img': {
      '&:nth-child(1)': {
        position: 'absolute',
        top: -180,
        right: -50,
        zIndex: -4,
      },
    },
  },
  supportWrapper: {
    position: 'relative',
    '& img': {
      '&:nth-child(1)': {
        position: 'absolute',
        top: -120,
        right: -5,
        zIndex: -4,
      },
    },
  },
});
