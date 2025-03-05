import {  styled } from '@mui/material';
import Box from '@mui/material/Box'


export const Wrapper = styled(Box)({
    '& .userContainer': {
      padding: '2em',
      '& .MuiAvatar-root': {
        margin: 'auto',
      },
      '& .user': {
        textAlign: 'center',
        '& .username': {
          margin: '1em 0px',
        },
      },
      '& .bio': {
        margin: '4em 0px 0px',
        '& .MuiTypography-h6': {
          marginBottom: '.6em',
        },
        '& .MuiTypography-subtitle2': {
          lineHeight: '1.5em',
          fontSize: '.9rem',
          fontWeight: 300,
        },
      },
    },
    '& .formContainer': {
      padding: '2em',
      '& .MuiGrid2-container': {
        margin: '1em 0px',
        width: '100%',
        '& .MuiGrid-item:nth-child(1)': {
          paddingLeft: '0px',
        },
      },
    },
});
