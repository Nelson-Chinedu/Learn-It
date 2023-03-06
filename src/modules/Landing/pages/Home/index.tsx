import { FunctionComponent, useState } from 'react';
import GoogleOneTapLogin from 'react-google-one-tap-login';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import Herosection from 'src/modules/Landing/pages/Home/Herosection';
import Collaboration from 'src//modules/Landing/pages/Home/Collaboration';
import Offer from 'src/modules/Landing/pages/Home/Offer';
import StepByStepGuide from 'src/modules/Landing/pages/Home/StepByStepGuide';
import Testimonial from 'src/modules/Landing/pages/Home/Testimonial';

import { Footer } from 'src/components';

const useStyles = makeStyles({
  root: {
    background: '#f8f9fc',
    height: (props: { isToggle: boolean }) => props.isToggle && '100vh',
    position: (props: { isToggle: boolean }) =>
      props.isToggle ? 'fixed' : 'unset',
  },
});

const Home: FunctionComponent<Record<string, never>> = () => {
  const [isToggle, setIsToggle] = useState(false);
  const classes = useStyles({ isToggle });

  const handleToggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <Box className={classes.root}>
      <GoogleOneTapLogin
        // eslint-disable-next-line no-console
        onError={(error) => console.log(error)}
        // eslint-disable-next-line no-console
        onSuccess={(response) => console.log(response)}
        googleAccountConfigs={{
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        }}
      />
      <Herosection handleToggleMenu={handleToggleMenu} isToggle={isToggle} />
      <Collaboration />
      <Offer />
      <Testimonial />
      <StepByStepGuide />
      <Footer />
    </Box>
  );
};

export default Home;
