import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    marginTop: '15em',
    padding: '10px 0px 5em',
  },
  wrapper: {
    height: 'auto',
    zIndex: -4,
    backgroundImage:
      'linear-gradient(to right, #D7FCF9, #EEFEEA, #F8E5E3, #E6E9FF)',
  },
  container: {
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    margin: '3em auto 4em',
  },
  cardContainer: {},
  courseInfo: {
    margin: '1em auto 1.2em',
  },
  price: {
    color: '#4EC491',
  },
  avatar: {
    position: 'absolute',
    right: 40,
    top: 150,
    '& .MuiAvatar-circular': {
      width: '2em',
      height: '2em',
      border: '2px solid white',
    },
  },
  lessonNumber: {
    display: 'flex',
    alignItems: 'center',
    color: '#9AA1FF',
    fontSize: '12px !important',
    backgroundColor: '#F7F7FE',
    borderRadius: '100px',
    padding: '2px 10px',
  },
  category: {
    fontSize: '.8em !important',
    textTransform: 'capitalize',
  },
  enrollButton: {
    '& .MuiButton-outlined': {
      '&:hover': {
        background: '#12A788',
        color: 'white',
      },
    },
  },
});
