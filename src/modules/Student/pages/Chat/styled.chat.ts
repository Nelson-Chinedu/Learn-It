import { styled } from '@mui/material';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'

export const Wrapper = styled('section')<{isCollapsedSidenav:boolean}>(({isCollapsedSidenav}) => ({
  position: 'fixed',
  width: isCollapsedSidenav ? '92%' : '78%',
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
}))

export const SearchWrapper = styled(Box)({
  margin: '1em 0px',
})

export const ChatContainer = styled(Box)({
  border: '1px solid #ebebeb',
  overflow: 'scroll',
  height: '73vh',
  padding: '1em .8em',
  marginBottom: '.3em',
  '& .containerHeader': {
    background: '#0050C8',
    color: '#fff',
    textAlign: 'center',
    padding: '1em',
    width: '80%',
    margin: '.4em auto',
    borderRadius: '5px',
  },
})


export const InputWrapper = styled(Grid)({
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