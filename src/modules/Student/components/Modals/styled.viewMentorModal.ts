import { styled } from '@mui/material';
import Box from '@mui/material/Box'

import { pxToRem } from 'src/helpers/formatFont';


export const Wrapper = styled(Box)({
  '& .MuiTypography-subtitle2': {
    paddingBottom: '1em',
  },
  '& .MuiTypography-body2': {
    fontWeight: 600,
  },
  '& .MuiTypography-h3': {
    fontSize: pxToRem(20),
    fontWeight: 600,
    margin: '1em .6em',
  },
  '& .MuiButton-contained': {
    margin: '1em 0px',
  },
})

export const ContentWrapper = styled(Box)({
  lineHeight: '1.8em',
  fontFamily: '\'Work Sans\', sans-serif',
  fontWeight: 300,
  fontSize: '14px',
  marginLeft: '1em',
  '& h1, h2, h3, h4, h5, h6': {
    margin: '.8em 0px',
  },
})