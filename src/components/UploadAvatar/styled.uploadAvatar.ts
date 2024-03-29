import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '50%',
    margin: 'auto',
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
          opacity: (props: { isLoading: boolean }) => props.isLoading && 0.4,
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
  },
  input: {
    display: 'none',
  },
}));
