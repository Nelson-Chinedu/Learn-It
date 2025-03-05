import { styled } from '@mui/material';
import Box from '@mui/material/Box'

export const Wrapper = styled(Box)<{width?: string|number}>(({width}) => ({
  position: 'absolute',
  background: 'white',
  color: 'black',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
  borderRadius: '10px',
  width: width,
  maxHeight: '650px',
  overflowY: 'scroll',
  '& .MuiBox-root': {
    outline: 'none',
    border: 'none',
  },
}))