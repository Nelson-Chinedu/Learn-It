import { styled } from '@mui/material';
import Container from '@mui/material/Container'

import { pxToRem } from 'src/helpers/formatFont';

export const Wrapper = styled(Container)({
  margin: '4em 0px 5em',
  '& .MuiTypography-h3': {
    marginBottom: '.8em',
  },
  '& .MuiTypography-subtitle2': {
    lineHeight: '1.6em',
    marginBottom: '1em',
  },
  '& .MuiTypography-h4': {
    fontSize: pxToRem(20),
    fontWeight: 600,
    marginBottom: '.4em',
  },
})
