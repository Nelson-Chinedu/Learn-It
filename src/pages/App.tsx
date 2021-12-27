import { FunctionComponent } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import theme from 'src/Theme';

import Home from 'src/pages/Home';
import Signup from 'src/pages/Signup';
import Signin from 'src/pages/Signin';
import StudentDashboard from 'src/pages/Student';
import StudentCourse from 'src/pages/Student';

const App: FunctionComponent<Record<string, never>> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/course" element={<StudentCourse />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
