import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Skeleton from '@mui/material/Skeleton';

import { Card, Button } from 'src/components';

import { useGetAllCoursesQuery } from 'src/services/userSlice';

import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

import {
  AvatarWrapper,
  ContainerWrapper,
  CourseInfoWrapper,
  EnrollWrapper,
  StyledCategory,
  StyledLessonNumber,
  StyledPrice,
} from 'src/modules/Landing/pages/Home/PopularCourse/styled.popularcourse';

const Course: FunctionComponent<Record<string, never>> = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllCoursesQuery();

  const _handleEnroll = () => {
    navigate(`${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`);
  };

  return (
    <>
      {isLoading
        ? [0, 1, 2, 3].map((loader) => (
            <ContainerWrapper
              size={{ md: 3 }}
              key={loader}
              sx={{ marginTop: '-8em' }}
            >
              <Skeleton height={500} width={250} />
            </ContainerWrapper>
          ))
        : data &&
          data?.payload?.map((course, index: number) => (
            <ContainerWrapper size={{ sm: 3 }} key={index}>
              <Card width="250px" borderRadius="10px">
                <CardMedia
                  component="img"
                  height="160"
                  image={course.thumbnail}
                  alt="Course thumbnail"
                />
                <AvatarWrapper>
                  <Avatar
                    src={course?.profile?.picture}
                    alt="Course author"
                    sx={{ width: 90, height: 90 }}
                  />
                </AvatarWrapper>
                <CardContent>
                  <Box style={{ marginTop: '1em' }}>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid>
                        <StyledPrice variant="subtitle2">
                          {course.price}
                        </StyledPrice>
                      </Grid>
                      <Grid>
                        <StyledLessonNumber variant="subtitle2">
                          <MenuBookIcon fontSize="small" /> &nbsp;
                          {course.video.length}
                        </StyledLessonNumber>
                      </Grid>
                    </Grid>
                    <CourseInfoWrapper container>
                      <Grid size={{ sm: 12 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textTransform: 'capitalize' }}
                        >
                          {course.name}
                        </Typography>
                      </Grid>
                      <Grid size={{ sm: 12 }}>
                        <StyledCategory variant="subtitle2">
                          {`By ${course.profile.firstname} ${course.profile.lastname}`}
                        </StyledCategory>
                      </Grid>
                    </CourseInfoWrapper>
                    <EnrollWrapper
                      container
                      alignItems="flex-end"
                      justifyContent="center"
                    >
                      <Grid size={{ sm: 8 }}>
                        <Button variant="outlined" handleClick={_handleEnroll}>
                          Enroll Now
                        </Button>
                      </Grid>
                    </EnrollWrapper>
                  </Box>
                </CardContent>
              </Card>
            </ContainerWrapper>
          ))}
    </>
  );
};

export default Course;
