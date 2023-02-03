import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NotFound from 'src/assets/images/not-found.gif';

import { AUTH_PATHS } from 'src/constant/path';

// Auth pages
const SigninPage = lazy(() => import('src/modules/Auth/pages/Signin'));
const SignupPage = lazy(() => import('src/modules/Auth/pages/Signup'));
const VerifyPage = lazy(() => import('src/modules/Auth/pages/VerifyEmail'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to={AUTH_PATHS.SIGNIN} replace />} />
        <Route path={AUTH_PATHS.SIGNIN} element={<SigninPage />} />
        <Route path={AUTH_PATHS.SIGNUP} element={<SignupPage />} />
        <Route path={AUTH_PATHS.VERIFY} element={<VerifyPage />} />
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

export default AuthRouter;
