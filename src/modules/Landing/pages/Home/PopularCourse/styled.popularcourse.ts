import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';

export const ContainerWrapper = styled(Grid)({
  position: 'relative',
});

export const AvatarWrapper = styled(Box)({
  position: 'absolute',
  right: 40,
  top: 150,
  '& .MuiAvatar-circular': {
    width: '2em',
    height: '2em',
    border: '2px solid white',
  },
});

export const StyledPrice = styled(Typography)({
  color: '#4EC491',
});

export const StyledLessonNumber = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  color: '#9AA1FF',
  fontSize: '12px !important',
  backgroundColor: '#F7F7FE',
  borderRadius: '100px',
  padding: '2px 10px',
});

export const CourseInfoWrapper = styled(Grid)({
  margin: '1em auto 1.2em',
});

export const StyledCategory = styled(Typography)({
  fontSize: '.8em !important',
  textTransform: 'capitalize',
});

export const EnrollWrapper = styled(Grid)(({ theme }) => ({
  '& .MuiButton-outlined': {
    '&:hover': {
      background: theme.palette.primary.main,
      color: 'white',
    },
  },
}));

export const Wrapper = styled(Box)({
  height: 'auto',
  zIndex: -4,
  backgroundImage:
    'linear-gradient(to right, #D7FCF9, #EEFEEA, #F8E5E3, #E6E9FF)',
});

export const StyledContainer = styled(Container)({
  padding: '10px 0px 5em',
});

export const TitleWrapper = styled(Box)({
  textAlign: 'center',
  margin: '3em auto 4em',
});
