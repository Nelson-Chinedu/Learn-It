import { FunctionComponent, Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import theme from 'src/Theme';

const Home = lazy(() => import('src/pages/Home'));
const Signup = lazy(() => import('src/pages/Signup'));
const Signin = lazy(() => import('src/pages/Signin'));
const Dashboard = lazy(() => import('src/pages/Student/Dashbaord'));
const Course = lazy(() => import('src/pages/Student/Course'));
const CoursePreview = lazy(() => import('src/pages/Student/Course/Preview'));
const Resources = lazy(() => import('src/pages/Student/Resources'));
const Profile = lazy(() => import('src/pages/Student/Profile'));
const Setting = lazy(() => import('src/pages/Student/Setting'));
const Chat = lazy(() => import('src/pages/Student/Chat'));
const Task = lazy(() => import('src/pages/Student/Task'));

const TeacherDashboard = lazy(() => import('src/pages/Teacher/Dashboard'));
const TeacherCourse = lazy(() => import('src/pages/Teacher/Course'));
const Student = lazy(() => import('src/pages/Teacher/Students'));
const LiveClass = lazy(() => import('src/pages/Teacher/LiveClass'));
const TeacherProfile = lazy(() => import('src/pages/Teacher/Profile'));
const TeacherSetting = lazy(() => import('src/pages/Teacher/Setting'));

const App: FunctionComponent<Record<string, never>> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:title/:id" element={<CoursePreview />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/task" element={<Task />} />
          <Route path="/app/dashboard" element={<TeacherDashboard />} />
          <Route path="app/course" element={<TeacherCourse />} />
          <Route path="/app/student" element={<Student />} />
          <Route path="/app/live-class" element={<LiveClass />} />
          <Route path="/app/live-class/create" element={<LiveClass />} />
          <Route path="/app/live-class/add" element={<LiveClass />} />
          <Route path="/app/profile" element={<TeacherProfile />} />
          <Route path="/app/settings" element={<TeacherSetting />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
export default App;
