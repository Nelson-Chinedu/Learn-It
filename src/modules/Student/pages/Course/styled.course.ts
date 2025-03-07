import { styled } from '@mui/material';
import Grid from '@mui/material/Grid2'

export const Course_container = styled('section')({
  padding: '20px',
  '& a': {
    textDecoration: 'none',
    color: 'inherit !important',
  },
  '& .course_content': {
    border: '1px solid rgb(229, 229, 234)',
    padding: '.8em',
    background: 'rgb(255, 255, 255)',
    borderRadius: '4px',
    '& .MuiTypography-subtitle2': {
      fontSize: '12px',
    },
    '&:hover': {
      boxShadow: '6px 6px 5px 0px rgba(237,237,237,0.75)',
      '-webkit-box-shadow': '6px 6px 5px 0px rgba(237,237,237,0.75)',
      '-moz-box-shadow': '6px 6px 5px 0px rgba(237,237,237,0.75)',
    },
  },
})

export const StepperWrapper = styled(Grid)({
  '& .MuiTypography-subtitle2': {
    color: '#848487',
    fontSize: '12px',
  },
  '& .MuiTypography-subtitle1': {
    fontSize: '13px',
  },
})

export const ContentWrapper = styled('div')({
  lineHeight: '1.8em',
  fontFamily: '"Work Sans", sans-serif',
  fontWeight: 300,
  fontSize: '14px',
  '& h1, h2, h3, h4, h5, h6': {
    margin: '.8em 0px',
  },
})