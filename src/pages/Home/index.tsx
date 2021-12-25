import { FunctionComponent } from 'react';

import Herosection from 'src/pages/Home/Herosection';
import Offer from 'src/pages/Home/Offer';
import PopularCourse from 'src/pages/Home/PopularCourse';
import BecomeInstructor from 'src/pages/Home/BecomeInstructor';

const Home: FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <Herosection />
      <Offer />
      <PopularCourse />
      <BecomeInstructor />
    </>
  );
};

export default Home;
