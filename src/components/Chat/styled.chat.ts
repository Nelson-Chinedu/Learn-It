import { styled } from '@mui/material';
import Box from '@mui/material/Box'

export const SenderWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row-reverse',
  marginBottom: '1em',
  '& .message': {
    // background: theme.palette.primary.light,
    background: '#e4edff',
    width: '300px',
    maxWidth: '400px',
    borderRadius: '20px',
    padding: '20px 10px',
    marginRight: '2px',
  },
})


export const ReceiverWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '1em',
  '& .message': {
    // background: '#ebebeb',
    background: '#f8f8f8',
    width: '300px',
    maxWidth: '400px',
    borderRadius: '20px',
    padding: '20px 10px',
    marginLeft: '2px',
  },
})