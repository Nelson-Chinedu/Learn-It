import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useStyles } from 'src/modules/Student/pages/Course/styled.course';

import AvatarUser from 'src/assets/images/Avatar.png';

const Course: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.course_container}>
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Grid item md={3} key={item}>
            <Link
              // to={`/s/course/${course.title.split(' ').join('-')}/${course.id}`}
              to="/s/course/test/2"
            >
              <Box className="course_content">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Avatar src={AvatarUser} alt="course instructor" />
                  <MoreHorizOutlinedIcon />
                </Stack>
                <Typography variant="subtitle2">Course Title</Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    sx={{ width: 25, height: 25 }}
                    src={AvatarUser}
                    alt="course instructor"
                  />
                  <Typography variant="subtitle2">author name</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2">15 lessons</Typography>
                  <Typography variant="subtitle2">40 hours</Typography>
                </Stack>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Course;
