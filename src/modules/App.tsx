import { FunctionComponent, Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import theme from 'src/Theme';

import ModalContextProvider from 'src/contexts/modal-ctx';
import UserProfileContextProvider from 'src/contexts/user-profile-ctx';

import ErrorBoundary from 'src/ErrorBoundary';

import PrivateRoute from 'src/PrivateRoute';

const Home = lazy(() => import('src/modules/Home'));
const Signup = lazy(() => import('src/modules/Auth/Signup'));
const Signin = lazy(() => import('src/modules/Auth/Signin'));
const Dashboard = lazy(() => import('src/modules/Student/pages/Dashbaord'));
const Course = lazy(() => import('src/modules/Student/pages/Course'));
const CoursePreview = lazy(
  () => import('src/modules/Student/pages/Course/Preview')
);
const Resources = lazy(() => import('src/modules/Student/pages/Resources'));
const Profile = lazy(() => import('src/modules/Student/pages/Profile'));
const Setting = lazy(() => import('src/modules/Student/pages/Setting'));
const Chat = lazy(() => import('src/modules/Student/pages/Chat'));
const Task = lazy(() => import('src/modules/Student/pages/Task'));

const TeacherDashboard = lazy(
  () => import('src/modules/Teacher/pages/Dashboard')
);
const TeacherCourse = lazy(() => import('src/modules/Teacher/pages/Course'));
const AddCourse = lazy(() => import('src/modules/Teacher/pages/Course/Form'));
const Student = lazy(() => import('src/modules/Teacher/pages/Students'));
const LiveClass = lazy(() => import('src/modules/Teacher/pages/LiveClass'));
const TeacherProfile = lazy(() => import('src/modules/Teacher/pages/Profile'));
const TeacherSetting = lazy(() => import('src/modules/Teacher/pages/Setting'));

const App: FunctionComponent<Record<string, never>> = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ModalContextProvider>
          <Suspense fallback={<p>Loading</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Dashboard />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/course"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Course />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/course/:title/:id"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <CoursePreview />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/resources"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Resources />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Profile />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Chat />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/setting"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Setting />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/task"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Task />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/dashboard"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <TeacherDashboard />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="app/course"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <TeacherCourse />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/course/add"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <AddCourse />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/student"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <Student />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/live-class"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <LiveClass />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/live-class/create"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <LiveClass />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/live-class/add"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <LiveClass />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/profile"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <TeacherProfile />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
              <Route
                path="/app/settings"
                element={
                  <PrivateRoute>
                    <UserProfileContextProvider>
                      <TeacherSetting />
                    </UserProfileContextProvider>
                  </PrivateRoute>
                }
              />
            </Routes>
            <ToastContainer />
          </Suspense>
        </ModalContextProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
export default App;
