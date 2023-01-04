import { FunctionComponent, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MENTOR_PATHS } from 'src/constant/path';

// Mentor pages
const Dashboard = lazy(() => import('src/modules/Teacher/pages/Dashboard'));
const ViewCourse = lazy(() => import('src/modules/Teacher/pages/Course'));
const AddCourse = lazy(() => import('src/modules/Teacher/pages/Course/Form'));
const Student = lazy(() => import('src/modules/Teacher/pages/Students'));
const LiveClass = lazy(() => import('src/modules/Teacher/pages/LiveClass'));
const Profile = lazy(() => import('src/modules/Teacher/pages/Profile'));
const Setting = lazy(() => import('src/modules/Teacher/pages/Setting'));

const MentorRoute: FunctionComponent<Record<string, never>> = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="dashboard" replace />} />
        <Route path={MENTOR_PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={MENTOR_PATHS.COURSE}>
          <Route path="" element={<ViewCourse />} />
          <Route path="add" element={<AddCourse />} />
        </Route>
        <Route path={MENTOR_PATHS.STUDENT} element={<Student />} />
        <Route path={MENTOR_PATHS.LIVE_CLASS}>
          <Route path="" element={<LiveClass />} />
          <Route path="create" element={<LiveClass />} />
          <Route path="add" element={<LiveClass />} />
        </Route>
        <Route path={MENTOR_PATHS.PROFILE} element={<Profile />} />
        <Route path={MENTOR_PATHS.SETTINGS} element={<Setting />} />
        <Route path="*" element={<div>Page not found in mentor</div>} />
      </Route>
    </Routes>
  );
};

export default MentorRoute;
