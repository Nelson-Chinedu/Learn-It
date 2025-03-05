import { styled } from '@mui/material';
import Box from '@mui/material/Box'

import { pxToRem } from 'src/helpers/formatFont';

export const Wrapper = styled(Box)(({theme}) => ({
  '& .MuiGrid2-container':{
    width: '100%',
  },
  overflow: 'hidden',
  '& .MuiTypography-h1': {
    fontSize: '4em',
  },
  '& .MuiTypography-subtitle1': {
    fontSize: pxToRem(14),
    color: '#5e709d',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  '& .MuiAvatarGroup-root': {
    justifyContent: 'flex-end',
    marginTop: '.8em',
    '& .MuiAvatarGroup-avatar': {
      width: 35,
      height: 35,
      background: theme.palette.primary.dark,
      fontSize: pxToRem(14),
    },
  },
  '& .herosection-text-background': {
    fontSize: pxToRem(70),
    marginLeft: '.2em',
    position: 'relative',
    backgroundImage: 'linear-gradient(#fed9a7 , #fed9a7)',
    backgroundPosition: '0px 72%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% .2em',
    padding: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: pxToRem(32),
    },
  },
  '& .container': {
    width: '90%',
    margin: '8em auto 0px',
    position: 'relative',
    height: '450px',
    [theme.breakpoints.down('sm')]: {
      margin: '5em auto 0px',
      height: '420px',
    },
  },
  '& .wrapper': {
    width: '60%',
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '& .MuiTypography-h1': {
      textTransform: 'capitalize',
      lineHeight: '1em',
      fontSize: '4.5rem !important',
      [theme.breakpoints.down('sm')]: {
        lineHeight: '1.3em',
        fontSize: '2rem !important',
      },
    },
    '& .subtitle': {
      fontSize: '1.1rem !important',
      lineHeight: '1.4em',
      letterSpacing: '.02em',
      width: '60%',
      margin: '1.8em auto',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem !important',
        width: '100%',
      },
    },
    '& .MuiTypography-body1': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },
  '& .maleMentor_wrapper': {
    position: 'absolute',
    top: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '& .mentor_preview': {
    width: '20%',
    position: 'absolute',
    bottom: 0,
    marginLeft: '15px',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      marginLeft: '0px',
    },
  },
  '& .femaleMentor_wrapper': {
    position: 'absolute',
    bottom: 0,
    right: 0,
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))
