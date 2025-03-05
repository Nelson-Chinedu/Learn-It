import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import {
  StyledContainer,
  TitleWrapper,
  Wrapper,
} from 'src/modules/Landing/pages/Home/PopularCourse/styled.popularcourse';

import Course from 'src/modules/Landing/pages/Home/PopularCourse/Course';

const PopularCourse: FunctionComponent<Record<string, never>> = () => {
  return (
    <Wrapper>
      <StyledContainer maxWidth="lg">
        <TitleWrapper>
          <Typography variant="h2">Our popular courses</Typography>
        </TitleWrapper>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Course />
        </Grid>
      </StyledContainer>
    </Wrapper>
  );
};

export default PopularCourse;
