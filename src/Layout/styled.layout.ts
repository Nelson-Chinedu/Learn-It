import { styled } from '@mui/material';
import Box from '@mui/material/Box'

export const Wrapper = styled(Box)<{isCollapsedSidenav: boolean}>(({isCollapsedSidenav}) => ({
    display: 'flex',
    background: 'white',
    height: '100vh',
    '& .sidenav-wrapper': {
      width: isCollapsedSidenav ? '5%' : '18%',
      position: 'fixed',
      height: '100vh',
      transition: 'width .2s',
      transitionTimingFunction: 'ease-in-out',
    },
  }))
