import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Landing_PATHS } from 'src/constant/path';

// Landing pages
const HomePage = lazy(() => import('src/modules/Landing/pages/Home'));

const LandingRoute = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path={Landing_PATHS.HOME} element={<HomePage />} />
        <Route path={Landing_PATHS.ABOUT} element={<p>About Page</p>} />
        <Route path="*" element={<div>Page not found in landing</div>} />
      </Route>
    </Routes>
  );
};

export default LandingRoute;
