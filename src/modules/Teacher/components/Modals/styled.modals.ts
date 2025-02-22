import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  fileUpload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed grey !important',
    borderRadius: '5px',
    padding: '2em',
    textAlign: 'center',
    height: '150px',
    cursor: 'pointer',
    marginBottom: '2em',
    '& input': {
      display: 'none',
    },
  },
  uploadedFile: {
    '& .MuiGrid-item:nth-child(1)': {
      textAlign: 'center',
    },
    '& .MuiGrid-item:nth-child(3)': {
      textAlign: 'center',
    },
  },
});
