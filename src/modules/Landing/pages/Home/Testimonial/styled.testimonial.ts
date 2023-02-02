import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { pxToRem } from 'src/helpers/formatFont';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#eef3fc',
    padding: '2em',
    '& .MuiTypography-h3': {
      fontSize: pxToRem(40),
      fontWeight: 600,
      textAlign: 'center',
      marginBottom: '1em',
      textTransform: 'capitalize',
      lineHeight: '1em',
      [theme.breakpoints.down('sm')]: {
        fontSize: pxToRem(30),
        lineHeight: '1.3em',
      },
    },
  },
}));
