import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { pxToRem } from 'src/helpers/formatFont';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '5em auto',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      margin: '3em auto',
    },
    '& .MuiTypography-body2': {
      fontWeight: 300,
      fontStyle: 'normal',
    },
    '& .MuiTypography-subtitle1': {
      margin: '.3em 0px',
    },
    '& .MuiTypography-subtitle2': {
      fontSize: '.9rem',
      lineHeight: '1.3em',
    },
    '& .why-we-different-text': {
      '& .MuiTypography-h2': {
        fontSize: pxToRem(50),
        textTransform: 'capitalize',
        lineHeight: '1em',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
          fontSize: pxToRem(30),
          lineHeight: '1.3em',
          textAlign: 'center',
        },
      },
      '& .MuiTypography-body2': {
        margin: '1.5em 0px 3em',
        fontWeight: 300,
        fontSize: pxToRem(16),
        fontStyle: 'normal',
        lineHeight: '1.6em',
      },
    },
    '& .MuiTypography-h3': {
      fontWeight: 'bold',
      fontSize: `${pxToRem(18)} !important`,
    },
    '& img': {
      width: '100%',
    },
  },
}));
