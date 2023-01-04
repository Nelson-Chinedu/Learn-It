import { FunctionComponent, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { STUDENT_PATHS } from 'src/constant/path';

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

const StudentRoute: FunctionComponent<Record<string, never>> = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="dashboard" replace />} />
        <Route path={STUDENT_PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={STUDENT_PATHS.COURSE}>
          <Route path="" element={<Course />} />
          <Route path=":title/:id" element={<CoursePreview />} />
        </Route>
        <Route path={STUDENT_PATHS.RESOURCE} element={<Resources />} />
        <Route path={STUDENT_PATHS.PROFILE} element={<Profile />} />
        <Route path={STUDENT_PATHS.SETTING} element={<Setting />} />
        <Route path={STUDENT_PATHS.CHAT} element={<Chat />} />
        <Route path={STUDENT_PATHS.TASK} element={<Task />} />
        <Route path="*" element={<div>Page not found in student</div>} />
      </Route>
    </Routes>
  );
};

export default StudentRoute;
