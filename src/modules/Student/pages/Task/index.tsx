import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { RootState } from 'src/store';

import { useGetTasksQuery } from 'src/modules/Student/services/studentSlice';

import Board from 'src/modules/Student/pages/Task/Board';

import EmptyState from 'src/assets/images/searching-data.gif';

import { IColumnUpdate } from 'src/interface/task';

const Tasks: FC = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isFetching, error, isError } = useGetTasksQuery<
    Record<string, any>
  >(userId, {
    skip: !userId,
  });

  const [columnUpdate, setColumnUpdate] = useState<IColumnUpdate[]>([]);

  useEffect(() => {
    if (data) {
      setColumnUpdate(data.payload);
    }
  }, [data]);

  if (!userId) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress size={20} />
      </Box>
    );
  }

  return (
    <Box>
      {isFetching ? (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={20} />
        </Box>
      ) : isError && error.status === 404 && error.data.payload.length === 0 ? (
        <Box sx={{ width: '50%', margin: '10em auto', textAlign: 'center' }}>
          <img
            src={EmptyState}
            style={{ width: '300px', height: '300px' }}
            alt="Empty Category"
          />
          <Typography variant="h2" sx={{ mt: -5, mb: 5 }}>
            You don't have any assigned task yet
          </Typography>
        </Box>
      ) : (
        <>
          <Board data={columnUpdate} setColumnUpdate={setColumnUpdate} />
        </>
      )}
    </Box>
  );
};

export default Tasks;
