import { FunctionComponent } from 'react';

import Herosection from 'src/modules/Home/Herosection';
import Offer from 'src/modules/Home/Offer';
import PopularCourse from 'src/modules/Home/PopularCourse';
import BecomeInstructor from 'src/modules/Home/BecomeInstructor';
import Alumni from 'src/modules/Home/Alumni';
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
