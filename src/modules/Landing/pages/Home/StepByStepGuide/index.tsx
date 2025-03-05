import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import SignupPreview from 'src/assets/images/preview-signup-state.png';
import MentorPreview from 'src/assets/images/preview-mentors.png';
import PaymentPreview from 'src/assets/images/payment-preview.png';

import { Button } from 'src/components';

import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

import { StyledSection } from 'src/modules/Landing/pages/Home/StepByStepGuide/styled.stepByStep';

const StepByStepGuide = () => {
  return (
    <StyledSection>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box className="step_by_step_wrapper">
          <Typography variant="subtitle2" color="primary">
            Step-by-step guide
          </Typography>
          <Typography variant="h3">How does it work?</Typography>
        </Box>
        <Box className="wrapper">
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            className="container"
          >
            <Grid
              item
              md={6}
              sx={{
                perspective: '1000px',
              }}
            >
              <img
                src={SignupPreview}
                alt="signup preview"
                style={{
                  marginLeft: '10px',
                  transform: 'rotateY(20deg) rotateX(10deg)',
                  objectFit: 'contain',
                }}
              />
            </Grid>
            <Grid item md={5}>
              <Typography variant="subtitle2">Step 1</Typography>
              <Typography variant="subtitle2" color="primary">
                Effortlessly create an account in 2 mins
              </Typography>
              <Typography variant="body2">
                Creating an account on our platform is as simple as 1-2-3. Just
                follow these steps and you'll be set up in no time
              </Typography>
              <List>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    Click on the "Sign Up" button on our website
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters disablePadding>
                  <ListItemText>Fill out the required information</ListItemText>
                </ListItem>
                <ListItem disableGutters disablePadding>
                  <ListItemText>
                    Verify your email and voila! You now have an account with
                    us.
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
            className="container column_reverse"
          >
            <Grid item md={5}>
              <Typography variant="subtitle2">Step 2</Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                sx={{ fontSize: '20px' }}
              >
                Scout through the pool list of mentors
              </Typography>
              <Typography variant="body2">
                Scouting through our mentor pool is as easy as browsing through
                a list of profile by finding the perfect mentor who aligns with
                your goals and interest.
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '1em' }}>
                You can filter the search results by various criteria, such as
                industry, location, and expertise, to make your search easier
                and more focused.
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                perspective: '1000px',
              }}
            >
              <img
                src={MentorPreview}
                alt=""
                style={{
                  marginRight: '50px',
                  transform: 'rotateY(-20deg) rotateX(10deg)',
                  objectFit: 'contain',
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            className="container direction"
          >
            <Grid
              item
              md={6}
              sx={{
                perspective: '1000px',
              }}
            >
              <img
                src={PaymentPreview}
                alt="payment preview"
                style={{
                  marginLeft: '10px',
                  transform: 'rotateY(20deg) rotateX(10deg)',
                  objectFit: 'contain',
                }}
              />
            </Grid>
            <Grid item md={5}>
              <Typography variant="subtitle2">Step 3</Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                sx={{ lineHeight: '1.3em' }}
              >
                Subscribe to a mentor and gain access to their expertise and
                guidance.
              </Typography>
              <Typography variant="body2">
                Invest in your growth by subscribing to one of our top-notch
                mentors. The payment process is simple and convenient. select
                the mentor you want to work with, and choose a subscription plan
                that fits your needs and budget. Enter your payment information,
                confirm the transaction, and you're all set. Enjoy the benefits
                of a mentor-led learning experience and achieve your goals with
                ease.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box className="join_wrapper">
        <Typography variant="h4">
          Unlock your potential and take the next step in your journey with
          mentorship
        </Typography>
        <Button
          size="large"
          fullWidth={false}
          href={`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNUP}`}
        >
          Join Now
        </Button>
      </Box>
    </StyledSection>
  );
};

export default StepByStepGuide;
