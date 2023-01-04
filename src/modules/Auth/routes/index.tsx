import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AUTH_PATHS } from 'src/constant/path';

// Auth pages
const SigninPage = lazy(() => import('src/modules/Auth/pages/Signin'));
const SignupPage = lazy(() => import('src/modules/Auth/pages/Signup'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to={AUTH_PATHS.SIGNIN} replace />} />
        <Route path={AUTH_PATHS.SIGNIN} element={<SigninPage />} />
        <Route path={AUTH_PATHS.SIGNUP} element={<SignupPage />} />
        <Route path="*" element={<div>Page not found in auth</div>} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
