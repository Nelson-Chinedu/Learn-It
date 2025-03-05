import { styled } from '@mui/material';
import Box from '@mui/material/Box'

import { pxToRem } from 'src/helpers/formatFont';


export const Wrapper = styled(Box)(({theme}) => ({
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
}))
