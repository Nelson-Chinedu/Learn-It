import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

import { Layout } from 'src/Layout/student';

import { Dashboard } from 'src/pages/Student/Dashbaord';
import { Course } from 'src/pages/Student/Course';

const Student: FunctionComponent<Record<string, never>> = () => {
  const { pathname } = useLocation();
  const route =
    pathname === '/dashboard' ? (
      <Dashboard />
    ) : pathname === '/course' ? (
      <Course />
    ) : (
      '/'
    );
  return <Layout>{route}</Layout>;
};

export default Student;
