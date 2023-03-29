import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: '#fafafa',
    padding: '2em',
    textAlign: 'center',
    color: '#000',
    '& .MuiTypography-subtitle2': {
      padding: '.4em 0px',
      lineHeight: '1.6em',
    },
    '& .footer': {
      textAlign: 'left',
      marginBottom: (props: { isMobile: boolean }) => props.isMobile && '1em',
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit !important',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});
