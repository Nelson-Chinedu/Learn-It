import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

import LiveCourse from 'src/modules/Teacher/pages/LiveClass/LiveCourse';
import ClassModule from 'src/modules/Teacher/pages/LiveClass/ClassModule';
import ClassList from 'src/modules/Teacher/pages/LiveClass/ClassList';

import { Wrapper } from 'src/modules/Teacher/pages/LiveClass/styled.liveCourse';

const LiveClass: FunctionComponent<Record<string, never>> = () => {
  const location = useLocation();

  if (location.pathname === '/m/live-class/create') {
    return (
      <Wrapper>
        <Box style={{ padding: '2em' }}>
          <LiveCourse />
        </Box>
      </Wrapper>
    );
  }

  if (location.pathname === '/m/live-class/add') {
    return (
      <Wrapper>
        <Box style={{ padding: '2em' }}>
          <ClassModule />
        </Box>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ClassList />
    </Wrapper>
  );
};

export default LiveClass;
