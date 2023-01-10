import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NotFound from 'src/assets/images/not-found.gif';

import { Landing_PATHS } from 'src/constant/path';

// Landing pages
const HomePage = lazy(() => import('src/modules/Landing/pages/Home'));

const LandingRoute = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path={Landing_PATHS.HOME} element={<HomePage />} />
        <Route path={Landing_PATHS.ABOUT} element={<p>About Page</p>} />
        <Route
          path="*"
          element={
            <Box sx={{ width: '50%', margin: '5em auto', textAlign: 'center' }}>
              <img
                src={NotFound}
                style={{ width: '500px', height: '500px' }}
                alt="a little boy with map and camera"
              />
              <Typography variant="h1">Oopppss, you seem to be lost</Typography>
            </Box>
          }
        />
      </Route>
    </Routes>
  );
};

export default LandingRoute;
