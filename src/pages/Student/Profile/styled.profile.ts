import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiBox-root': {
      boxShadow: 'none',
    },
    '& .MuiAvatar-root': {
      margin: 'auto',
    },
    '& .topLeft': {
      textAlign: 'center',
      width: '90%',
      margin: 'auto',
      padding: '20px',
    },
    '& .status': {
      width: '100%',
      margin: 'auto',
      '& .MuiGrid-item': {
        paddingLeft: '0px',
      },
      '& .MuiTypography-subtitle2': {
        fontSize: '.8rem',
      },
    },
    '& .support': {
      padding: '20px',
      '& .MuiTypography-subtitle1': {
        margin: '1em 0px .6em',
      },
      '& a': {
        color: '#9A9A9B',
        marginBottom: '2em',
        '&:hover': {
          color: '#212121 !important',
        },
      },
    },
    '& .containerRight': {
      '& .MuiTypography-body1': {
        marginBottom: '1em',
      },
    },
  },
  detail: {
    margin: '2em 0px',
    '& .MuiGrid-container': {
      margin: '.4em 0px',
      width: '100%',
      '& .MuiGrid-item:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },
});
