import { Suspense, FunctionComponent } from 'react';
import {
  Routes as BrowserRoutes,
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

import { BASE_ROUTES } from 'src/constant/baseRoute';

import ModalContextProvider from 'src/contexts/modal-ctx';
import UserProfileContextProvider from 'src/contexts/user-profile-ctx';

import ErrorBoundary from 'src/ErrorBoundary';

import PrivateRoute from 'src/Route/PrivateRoute';

import theme from 'src/Theme';

const Routes: FunctionComponent<Record<string, never>> = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading</p>}>
          <BrowserRouter>
            <BrowserRoutes>
              {BASE_ROUTES.map(
                ({ useAuth, path, Component, Layout, sidenav }) =>
                  useAuth && Layout ? (
                    <Route
                      path={path}
                      key={path}
                      element={
                        <PrivateRoute>
                          <UserProfileContextProvider>
                            <ModalContextProvider>
                              <Layout sidenav={sidenav}>
                                <Component />
                              </Layout>
                            </ModalContextProvider>
                          </UserProfileContextProvider>
                        </PrivateRoute>
                      }
                    />
                  ) : (
                    <Route path={path} key={path} element={<Component />} />
                  )
              )}
              <Route path="*" element={<div>Page not found</div>} />
            </BrowserRoutes>
          </BrowserRouter>
          <ToastContainer />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default Routes;
