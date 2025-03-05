import { styled } from '@mui/material';
import Box from '@mui/material/Box'

import { pxToRem } from 'src/helpers/formatFont';


export const Wrapper = styled(Box)(({theme}) => ({
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
}))