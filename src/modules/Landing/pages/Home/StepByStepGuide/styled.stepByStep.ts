import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { pxToRem } from 'src/helpers/formatFont';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '5em auto',
    position: 'relative',
    height: 'auto',
    '& img': {
      width: '100%',
    },
    '& .MuiTypography-subtitle2': {
      fontSize: pxToRem(20),
      margin: '1em 0px',
      fontWeight: 600,
    },
    '& .MuiTypography-h3': {
      fontSize: pxToRem(40),
      fontWeight: 600,
    },
    '& .MuiTypography-body2': {
      fontWeight: 300,
      fontSize: pxToRem(16),
      fontStyle: 'normal',
      lineHeight: '1.6em',
    },
    '& .wrapper': {
      '& .MuiTypography-subtitle2': {
        fontSize: pxToRem(20),
        margin: '1em 0px',
        fontWeight: 600,
        '&:nth-child(1)': {
          color: '#fed9a7',
        },
      },
    },
    '& .MuiContainer-root': {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '95%',
      },
    },
    '& .container': {
      marginBottom: '2em',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '3em',
      },
    },
    '& .column_reverse': {
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
      },
    },
    '& .direction': {
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    '& .join_wrapper': {
      background: '#eef3fc',
      padding: '4em 2em',
      textAlign: 'center',
      marginTop: '2em',
      '& .MuiTypography-h4': {
        fontSize: pxToRem(25),
        fontWeight: 600,
        lineHeight: '1em',
        [theme.breakpoints.down('sm')]: {
          fontSize: pxToRem(22),
          lineHeight: '1.4em',
        },
      },
      '& .MuiButton-contained': {
        borderRadius: '50px',
        padding: '10px 30px',
        fontSize: '1.2rem',
        marginTop: '2em',
        [theme.breakpoints.down('sm')]: {
          marginTop: '1em',
        },
      },
    },
    '& .step_by_step_wrapper': {
      textAlign: 'center',
      margin: '2em 0px',
      '& .MuiTypography-subtitle2': {
        textTransform: 'uppercase',
      },
    },
  },
}));
