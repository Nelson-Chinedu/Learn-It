import { FunctionComponent } from 'react';

import Herosection from 'src/modules/Landing/pages/Home/Herosection';
import Offer from 'src/modules/Landing/pages/Home/Offer';
import PopularCourse from 'src/modules/Landing/pages/Home/PopularCourse';
import BecomeInstructor from 'src/modules/Landing/pages/Home/BecomeInstructor';
import Alumni from 'src/modules/Landing/pages/Home/Alumni';
import { Footer } from 'src/components';

const Home: FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <Herosection />
      <Offer />
      <PopularCourse />
      <BecomeInstructor />
      <Alumni />
      <Footer />
    </>
  );
};

export default Home;
