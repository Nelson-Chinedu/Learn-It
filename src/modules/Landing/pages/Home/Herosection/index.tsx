import { FunctionComponent, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Button } from 'src/components';

import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

import TopNavDesktop from 'src/modules/Landing/pages/Home/Herosection/TopNavDesktop';
import TopNavMobile from 'src/modules/Landing/pages/Home/Herosection/TopNavMobile';

import Mouse from 'src/assets/images/mouse.png';
import MaleMentor from 'src/assets/images/mentor1.png';
import FemaleMentor from 'src/assets/images/mentor2.png';

import { MENTORS } from 'src/constant/mentorAvatar';
import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

import { Wrapper } from 'src/modules/Landing/pages/Home/Herosection/styled.herosection';

type Props = {
  handleToggleMenu: () => void;
  isToggle: boolean;
};

const Home: FunctionComponent<Props> = ({ handleToggleMenu, isToggle }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const theme = useTheme();
  const isMobileSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Wrapper>
      {isMobileSm ? (
        <TopNavMobile handleToggleMenu={handleToggleMenu} isToggle={isToggle} />
      ) : (
        <TopNavDesktop isVisible={isVisible} />
      )}
      <Box className="container">
        <Box className="wrapper">
          <Typography ref={ref} variant="h1">
            Acheive your Goals, Find the perfect
            <Typography
              variant="h1"
              component="span"
              className="herosection-text-background"
            >
              Mentor.
            </Typography>{' '}
            🚀
          </Typography>
          <Typography variant="subtitle2" className="subtitle">
            Connect with experienced professionals, gain valuable insights and
            advance your career.
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Button
              size="large"
              fullWidth={false}
              href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNUP}`}
              sx={{
                borderRadius: '50px',
                padding: '10px 20px',
                fontSize: '1.2rem',
              }}
            >
              Get Started
            </Button>
            <Typography variant="body1">Learn More</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
              position: 'absolute',
              bottom: '0px',
              transform: 'translate(0%, 0%)',
              right: '48%',
            }}
          >
            <img
              src={Mouse}
              alt="a scroll down mouse"
              style={{ width: '30px', height: '25px' }}
            />
            <Typography variant="subtitle2">Scroll Down</Typography>
          </Stack>
        </Box>

        <Box className="maleMentor_wrapper">
          <img
            src={MaleMentor}
            alt="Male mentor smiling"
            style={{
              width: `${isMobileSm ? '120px' : '200px'}`,
              height: '200px',
              objectFit: 'contain',
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{ paddingLeft: '1.5em', fontSize: '1rem' }}
          >
            Brian Josh
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ paddingLeft: '1.8em', fontSize: '.8rem' }}
          >
            Senior Mentor
          </Typography>
        </Box>
        <Box className="mentor_preview">
          <Typography variant="subtitle1">
            Learn from the leading mentors in your career field to hone the
            skills you need and be the world-class you ever wanted to be.
          </Typography>
          <AvatarGroup max={7}>
            {MENTORS.map((mentor) => (
              <Avatar
                key={mentor}
                src={mentor}
                sx={{
                  width: 35,
                  height: 35,
                  textTransform: 'capitalize',
                  fontSize: '12px',
                  '& .MuiAvatarGroup-avatar': {
                    width: 35,
                    height: 35,
                  },
                }}
              />
            ))}
          </AvatarGroup>
        </Box>
        <Box className="femaleMentor_wrapper">
          <img
            src={FemaleMentor}
            alt="Female mentor smiling"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{ paddingRight: '1.5em', fontSize: '1rem' }}
          >
            Matilda Helen
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ paddingRight: '1.8em', fontSize: '.8rem' }}
          >
            Senior Mentor
          </Typography>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Home;
