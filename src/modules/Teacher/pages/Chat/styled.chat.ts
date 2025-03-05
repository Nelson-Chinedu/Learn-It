import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import {styled} from '@mui/material'


export const Wrapper = styled(Box)({
  position: 'fixed',
  width: '78%',
  height: '85vh',
  overflow: 'hidden',
  '& .message': {
    fontSize: '10px',
  },
  '& .username': {
    fontSize: '14px',
  },
  '& .time': {
    fontSize: '10px',
  },
})

export const SearchWrapper = styled(Box)({
  margin: '1em 0px',
})

export const InputWrapper =styled(Grid)({
  position: 'relative',
  '& .btnSend': {
    position: 'absolute',
    right: '3px',
    bottom: '3px',
    background: '#0050C8',
    '&:hover': {
      background: '#0050C8',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  },
})