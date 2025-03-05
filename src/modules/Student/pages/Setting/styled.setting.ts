
import {styled} from '@mui/material'
import Box from '@mui/material/Box'

export const Wrapper = styled(Box)(({theme}) => ({
  root: {
    '& .MuiTypography-subtitle2': {
      fontSize: '.9rem',
    },
    '& .MuiTypography-subtitle1': {
      marginBottom: '2em',
    },
    '& .nav': {
      background: '#fff',
      margin: '1em 0px',
      padding: '2em 1em',
      textAlign: 'center',
      borderRadius: '5px',
      '&:hover': {
        background: theme.palette.primary.main,
        color: '#fff',
        cursor: 'pointer',
      },
    },
    '& .active': {
      background: theme.palette.primary.main,
      color: '#fff',
    },
    '& .rightWrapper': {
      marginBottom: '1em',
    },
  },
}));
