import { FunctionComponent } from 'react';

import Herosection from 'src/pages/Home/Herosection';
import Offer from 'src/pages/Home/Offer';

const Home: FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <Herosection />
      <Offer />
    </>
  );
};

export default Home;
