import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

import LiveCourse from 'src/modules/Teacher/pages/LiveClass/LiveCourse';
import ClassModule from 'src/modules/Teacher/pages/LiveClass/ClassModule';
import ClassList from 'src/modules/Teacher/pages/LiveClass/ClassList';

import { useStyles } from 'src/modules/Teacher/pages/LiveClass/styled.liveCourse';

const LiveClass: FunctionComponent<Record<string, never>> = () => {
  const location = useLocation();
  const classes = useStyles();

  if (location.pathname === '/m/live-class/create') {
    return (
      <Box component="section" className={classes.root}>
        <Box style={{ padding: '2em' }}>
          <LiveCourse />
        </Box>
      </Box>
    );
  }

  if (location.pathname === '/m/live-class/add') {
    return (
      <Box component="section" className={classes.root}>
        <Box style={{ padding: '2em' }}>
          <ClassModule />
        </Box>
      </Box>
    );
  }

  return (
    <Box component="section" className={classes.root}>
      <ClassList />
    </Box>
  );
};

export default LiveClass;
