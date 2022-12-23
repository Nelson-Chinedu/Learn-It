import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiGrid-container': {
      margin: '0px 0px .8em',
      '& .MuiGrid-item:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
    '& img': {
      width: '60%',
      objectFit: 'cover',
    },
    '& .formContainer': {
      margin: '1em 0px',
    },
    '& .listWrapper': {
      marginTop: '1em',
      '& .listContainer': {
        border: '1px solid #a29999',
        borderRadius: '5px',
        padding: '5px 10px',
        marginBottom: '.8em',
        '& .MuiGrid-container': {
          margin: '0px',
          '& .MuiTypography-subtitle2': {
            color: '#a29999',
            fontSize: '12px',
            lineHeight: '1.6em',
            fontWeight: 'normal',
            '&:nth-child(2)': {
              color: '#000',
              fontSize: '14px',
              fontWeight: 400,
            },
          },
        },
      },
    },
    '& .classListWrapper': {
      padding: '2em',
      '& .classListContainer': {
        margin: '1em 0px',
        padding: '.5em 1em',
        background: '#f6f6f7',
        borderRadius: '5px',
        cursor: 'pointer',
        '& .MuiTypography-subtitle2': {
          fontSize: '14px',
          fontWeight: 100,
          fontStyle: 'normal',
        },
        '& .MuiGrid-container': {
          margin: '0px',
        },
      },
      '& .active': {
        color: theme.palette.primary.main,
        border: `.1em solid ${theme.palette.primary.main}`,
        background: '#FFF',
      },
    },
    '& .container': {
      marginTop: '2em',
      '&:nth-child(2)': {
        marginTop: '4em',
      },
    },
  },
}));
