import { FunctionComponent } from 'react';

import Herosection from 'src/pages/Home/Herosection';
import Offer from 'src/pages/Home/Offer';
import PopularCourse from 'src/pages/Home/PopularCourse';

const Home: FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <Herosection />
      <Offer />
      <PopularCourse />
    </>
  );
};

export default Home;
