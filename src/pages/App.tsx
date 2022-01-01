import { FunctionComponent } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import theme from 'src/Theme';

import Home from 'src/pages/Home';
import Signup from 'src/pages/Signup';
import Signin from 'src/pages/Signin';
import { Dashboard } from 'src/pages/Student/Dashbaord';
import { Course } from 'src/pages/Student/Course';
import { CoursePreview } from 'src/pages/Student/Course/Preview';
import { Resources } from 'src/pages/Student/Resources';
import { Profile } from 'src/pages/Student/Profile';

const App: FunctionComponent<Record<string, never>> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:title/:id" element={<CoursePreview />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
