import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
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
        top: '40px',
        left: '45px',
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
        top: 25,
        left: 30,
        '& .MuiCircularProgress-svg': {
          '& > *': {
            color: '#128c7e',
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
});
