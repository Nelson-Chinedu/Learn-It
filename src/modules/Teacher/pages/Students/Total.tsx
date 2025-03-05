import { FC, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Groups2Icon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useGetStudentCountsQuery } from 'src/modules/Teacher/services/teacherSlice';
import { RootState } from 'src/store';
import { useSelector } from 'react-redux';

const TotalCount: FC = () => {
  const { userId } = useSelector((state: RootState) => state.account);

  const { data: countData, isLoading: loadi } = useGetStudentCountsQuery(
    {
      id: userId,
    },
    { skip: !userId },
  );
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    if (!loadi) {
      setSummary([
        {
          label: 'Total Mentees',
          count: countData && countData.payload.totalStudents,
          Icon: Groups2Icon,
        },
        {
          label: 'Active Mentees',
          count: countData && countData.payload.activeStudents,
          Icon: TrendingUpIcon,
        },
        {
          label: 'Inactive Mentees',
          count: countData && countData.payload.inactiveStudents,
          Icon: TrendingDownIcon,
        },
      ]);
    }
  }, [countData]);

  return (
    <Grid container gap={4}>
      {summary.map(({ label, count, Icon }) => (
        <Grid
          size={{ md: 3 }}
          key={label}
          sx={{
            background: '#0050C8',
            color: 'white',
            borderRadius: '16px',
            padding: '10px 20px',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
          }}
        >
          <Stack
            direction={'row'}
            alignItems={'end'}
            justifyContent={'space-between'}
          >
            <Box>
              <Typography variant="h3" fontSize={'25px'}>
                {label}
              </Typography>
              <Typography variant="subtitle2" fontSize={'18px'} pt={4}>
                {count}
              </Typography>
            </Box>
            <Icon />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default TotalCount;
