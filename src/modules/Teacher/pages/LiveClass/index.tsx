import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Layout } from 'src/Layout/Teacher';

import { Card } from 'src/components';

import LiveCourse from 'src/modules/Teacher/pages/LiveClass/LiveCourse';
import ClassModule from 'src/modules/Teacher/pages/LiveClass/ClassModule';
import ClassList from 'src/modules/Teacher/pages/LiveClass/ClassList';

import { useStyles } from 'src/modules/Teacher/pages/LiveClass/styled.liveCourse';

const LiveClass: FunctionComponent<Record<string, never>> = () => {
  const location = useLocation();
  const classes = useStyles();

  if (location.pathname === '/app/live-class/create') {
    return (
      <Layout>
        <Box component="section" className={classes.root}>
          <Card borderRadius="10px" width="100%" height="100vh">
            <Box style={{ padding: '2em' }}>
              <LiveCourse />
            </Box>
          </Card>
        </Box>
      </Layout>
    );
  }

  if (location.pathname === '/app/live-class/add') {
    return (
      <Layout>
        <Box component="section" className={classes.root}>
          <Card borderRadius="10px" width="100%" height="100vh">
            <Box style={{ padding: '2em' }}>
              <ClassModule />
            </Box>
          </Card>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <ClassList />
      </Box>
    </Layout>
  );
};

export default LiveClass;
