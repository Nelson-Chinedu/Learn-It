import {styled} from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'

export const Wrapper = styled(Box)({
  '& .MuiOutlinedInput-input': {
    fontWeight: 400,
    fontStyle: 'normal',
    '& label': {
      fontSize: '15px',
    },
  },
  '& .MuiFormLabel-root': {
    fontWeight: 400,
    fontStyle: 'normal',
  },
  '& .MuiButton-contained': {
    textTransform: 'capitalize',
  },
  '& .MuiCircularProgress-svg': {
    '& > *': {
      color: 'white',
    },
  },
})

export const ImageWrapper = styled(Grid)({
  '& img': {
    width: '50%',
    objectFit: 'cover',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0
  },
})


export const FormWrapper = styled(Grid)({
  marginTop: '15em',
  '& .MuiGrid2-container': {
    margin: '1em 0px',
    width: '100%',
    '& .MuiGrid-item': {
      paddingTop: '0px !important',
    },
    '& .MuiGrid-item:nth-child(1)': {
      paddingLeft: '0px',
    },
  },
})

export const FooterWrapper = styled(Grid)({
  textAlign: 'left',
  paddingLeft: '0px !important',
  width: '100%',
  marginTop: '.5em !important',
  '& a': {
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
})