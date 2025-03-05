import { FunctionComponent, useState } from 'react';
import GoogleOneTapLogin from 'react-google-one-tap-login';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

import Herosection from 'src/modules/Landing/pages/Home/Herosection';
import Collaboration from 'src//modules/Landing/pages/Home/Collaboration';
import Offer from 'src/modules/Landing/pages/Home/Offer';
import StepByStepGuide from 'src/modules/Landing/pages/Home/StepByStepGuide';
import Testimonial from 'src/modules/Landing/pages/Home/Testimonial';

import { Footer } from 'src/components';

const Wrapper = styled(Box)<{ isToggle: boolean }>(({ isToggle }) => ({
  background: '#f8f9fc',
  height: isToggle && '100vh',
  position: isToggle ? 'fixed' : 'unset',
}));

const Home: FunctionComponent<Record<string, never>> = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <Wrapper isToggle={isToggle}>
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
    </Wrapper>
  );
};

export default Home;
