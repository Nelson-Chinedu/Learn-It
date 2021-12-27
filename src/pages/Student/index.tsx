import { FunctionComponent } from 'react';

import { Layout } from 'src/Layout/student';

import Dashboard from 'src/pages/Student/Dashbaord';

const Student: FunctionComponent<Record<string, never>> = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Student;
