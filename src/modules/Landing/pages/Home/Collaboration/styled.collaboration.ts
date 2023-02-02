import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { pxToRem } from 'src/helpers/formatFont';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2em 0px 0px',
    marginTop: '6em',
    textAlign: 'center',
    color: 'white',
    '& .MuiTypography-body2': {
      fontSize: pxToRem(17),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3em',
    },
  },
}));
