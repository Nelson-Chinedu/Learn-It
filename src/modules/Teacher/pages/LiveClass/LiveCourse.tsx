import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import AddNote from 'src/assets/images/AddNote.svg';

import { Input, Button } from 'src/components';

const LiveCourse: FunctionComponent<Record<string, never>> = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};

  const handleNext = () => {
    navigate('/m/live-class/add');
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Typography>Create Live Course</Typography>
      <Grid
        container
        spacing={2}
        alignItems="flex-end"
        justifyContent="space-between"
        style={{ marginTop: '5em' }}
      >
        <Grid size={{ md: 5 }}>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid size={{ md: 6 }}>
              <Input
                label="Course Title"
                fullWidth={true}
                name="courseTitle"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
            <Grid size={{ md: 6 }}>
              <Input
                label="Lecture"
                fullWidth={true}
                name="lecture"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ md: 2 }}>
              <Input
                multiline={true}
                rows={6}
                variant="outlined"
                label="Description"
                fullWidth={true}
                name="description"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ md: 5 }}>
          <img src={AddNote} alt="An adding note illustration " />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ md: 2 }}>
          <Button
            variant="outlined"
            size="small"
            fullWidth={true}
            handleClick={handleBack}
          >
            Back
          </Button>
        </Grid>
        <Grid size={{ md: 2 }}>
          <Button size="small" fullWidth={true} handleClick={handleNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LiveCourse;
