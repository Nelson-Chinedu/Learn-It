import { styled } from '@mui/material';
import Box from '@mui/material/Box'

export const Wrapper = styled(Box)<{isLoading: boolean}>(({isLoading, theme}) => ({
  position: 'relative',
  width: '50%',
  margin: '0px auto 2em',
  textAlign: 'center',
  '& .container': {
    position: 'relative',
    width: '20%',
    margin: 'auto',
    '& .MuiAvatar-root': {
      margin: 'auto',
      '& img': {
        width: '100%',
        objectFit: 'cover',
        opacity: isLoading && 0.4,
      },
    },
    '& .upload': {
      position: 'absolute',
      top: '60px',
      left: '55px',
      '& .MuiSvgIcon-root': {
        background: '#128c7e',
        borderRadius: '50px',
        width: '10px !important',
        height: '10px !important',
        padding: '6px',
        '& > *': {
          color: 'white',
        },
      },
    },
    '& .loader': {
      position: 'absolute',
      top: 30,
      left: 35,
      '& .MuiCircularProgress-svg': {
        '& > *': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  '& .MuiTypography-subtitle2': {
    fontSize: '12px',
  },
}))


export const StyledInput = styled('input')({
  display: 'none',
})