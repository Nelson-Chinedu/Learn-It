import { Suspense, FunctionComponent } from 'react';
import {
  Routes as BrowserRoutes,
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

import NotFound from 'src/assets/images/not-found.gif';

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
              <Route
                path="*"
                element={
                  <Box
                    sx={{
                      width: '50%',
                      margin: '5em auto',
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={NotFound}
                      style={{ width: '500px', height: '500px' }}
                      alt="a little boy with map and camera"
                    />
                    <Typography variant="h1">
                      Oopppss, you seem to be lost
                    </Typography>
                  </Box>
                }
              />
            </BrowserRoutes>
          </BrowserRouter>
          <ToastContainer />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default Routes;
