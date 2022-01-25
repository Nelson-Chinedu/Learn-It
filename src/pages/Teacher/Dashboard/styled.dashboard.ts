import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    '& .top': {
      textAlign: 'center',
    },
    '& .topWrapper': {
      background: 'white',
      padding: '2em',
      borderRadius: '10px',
      boxShadow:
        '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 12%), 0px 1px 4px 0px rgb(0 0 0 / 5%) !important',
    },
  },
});
