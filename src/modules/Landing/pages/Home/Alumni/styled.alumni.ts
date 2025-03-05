import { styled } from '@mui/material';
import Container from '@mui/material/Container'

export const Wrapper = styled(Container)({
  marginBottom: '15em',
  display: 'flex !important',
  justifyContent: 'space-between',
  textAlign: 'center',
  '& img': {
    width: '120px',
  },
  '& .MuiTypography-subtitle1': {
    fontSize: '3rem',
    margin: '.2em 0px .4em',
  },
})
