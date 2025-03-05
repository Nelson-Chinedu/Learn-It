import Grid from '@mui/material/Grid2'
import {styled} from '@mui/material'

export const GridWrapper = styled(Grid)({
  '& .rc_root': {
    width: '100%',
    borderRadius: '0px !important',
    '& .rc': {
      width: '100% !important',
    },
  },
  '& .MuiTableContainer-root':{
    marginLeft: '0em !important'
  }
})

export const AsideWrapper = styled(Grid)({
  background: 'white',
  height: '100vh',
  borderLeft: '1px solid #e3e0e0',
  width: '20%',
  paddingTop: '0px !important',
  paddingLeft: '0px !important',
  position: 'fixed',
  right: 0,
  top: 64,
})

export const AuthorWrapper = styled(Grid)({
  '& .MuiTypography-subtitle2': {
    lineHeight: '1.4em',
  },
  '& .MuiTypography-subtitle2:nth-child(2)': {
    fontSize: '.8rem',
  },
})