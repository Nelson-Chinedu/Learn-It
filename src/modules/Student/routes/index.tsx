import { FunctionComponent, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NotFound from 'src/assets/images/not-found.gif';

import { STUDENT_PATHS } from 'src/constant/path';

import DialogContextProvider from 'src/contexts/dialog-ctx';

// Student pages
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
const Onboarding = lazy(() => import('src/modules/Student/pages/Onboarding'));

const StudentRoute: FunctionComponent<Record<string, never>> = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="dashboard" replace />} />
        <Route path={STUDENT_PATHS.ONBOARDING} element={<Onboarding />} />
        <Route path={STUDENT_PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={STUDENT_PATHS.COURSE}>
          <Route
            path=""
            element={
              <DialogContextProvider>
                <Course />
              </DialogContextProvider>
            }
          />
          <Route path=":title/:id" element={<CoursePreview />} />
        </Route>
        <Route
          path={STUDENT_PATHS.RESOURCE}
          element={
            <DialogContextProvider>
              <Resources />
            </DialogContextProvider>
          }
        />
        <Route path={STUDENT_PATHS.PROFILE} element={<Profile />} />
        <Route path={STUDENT_PATHS.SETTING} element={<Setting />} />
        <Route path={STUDENT_PATHS.CHAT} element={<Chat />} />
        <Route path={STUDENT_PATHS.TASK} element={<Task />} />
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

export default StudentRoute;
