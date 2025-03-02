import { FC, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Groups2Icon from '@mui/icons-material/Groups';
import { Box, Stack } from '@mui/material';

import { useGetStudentCountsQuery } from 'src/modules/Teacher/services/teacherSlice';
import { RootState } from 'src/store';
import { useSelector } from 'react-redux';

const TotalCount: FC = () => {
  const { userId } = useSelector((state: RootState) => state.account);

  const { data: dt, isLoading: loadi } = useGetStudentCountsQuery({
    id: userId,
  });
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    if (!loadi) {
      setSummary([
        {
          label: 'Total Mentees',
          count: dt.payload.totalStudents,
          Icon: Groups2Icon,
        },
        {
          label: 'Active Mentees',
          count: dt.payload.activeStudents,
          Icon: TrendingUpIcon,
        },
        {
          label: 'Inactive Mentees',
          count: dt.payload.inactiveStudents,
          Icon: TrendingDownIcon,
        },
      ]);
    }
  }, [dt]);

  return (
    <Grid container gap={4}>
      {summary.map(({ label, count, Icon }) => (
        <Grid
          item
          md={3}
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
