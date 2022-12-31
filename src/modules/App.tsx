import { FunctionComponent, Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import theme from 'src/Theme';

import ModalContextProvider from 'src/contexts/modal-ctx';
import TeacherProfileContextProvider from 'src/contexts/teacher-profile-ctx';

import ErrorBoundary from 'src/ErrorBoundary';

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
        <TeacherProfileContextProvider>
          <ModalContextProvider>
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
                <Route path="/app/course/add" element={<AddCourse />} />
                <Route path="/app/student" element={<Student />} />
                <Route path="/app/live-class" element={<LiveClass />} />
                <Route path="/app/live-class/create" element={<LiveClass />} />
                <Route path="/app/live-class/add" element={<LiveClass />} />
                <Route path="/app/profile" element={<TeacherProfile />} />
                <Route path="/app/settings" element={<TeacherSetting />} />
              </Routes>
              <ToastContainer />
            </Suspense>
          </ModalContextProvider>
        </TeacherProfileContextProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
export default App;
