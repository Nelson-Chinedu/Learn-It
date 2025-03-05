import { styled } from '@mui/material';
import Box from '@mui/material/Box'

export const Wrapper = styled(Box)<{isMobile: boolean}>(({isMobile}) => ({
  background: '#fafafa',
  padding: '2em',
  textAlign: 'center',
  color: '#000',
  '& .MuiTypography-subtitle2': {
    padding: '.4em 0px',
    lineHeight: '1.6em',
  },
  '& .footer': {
    textAlign: 'left',
    marginBottom: isMobile && '1em',
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit !important',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))