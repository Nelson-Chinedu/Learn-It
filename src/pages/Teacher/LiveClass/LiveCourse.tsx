import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AddNote from 'src/assets/images/AddNote.svg';

import { Input, Button } from 'src/components';

const LiveCourse: FunctionComponent<Record<string, never>> = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};

  const handleNext = () => {
    navigate('/app/live-class/add');
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
        <Grid item md={5}>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid item md={6}>
              <Input
                variant="outlined"
                size="small"
                label="Course Title"
                fullWidth={true}
                name="courseTitle"
                color="primary"
                handleChange={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                variant="outlined"
                size="small"
                label="Lecture"
                fullWidth={true}
                name="lecture"
                color="primary"
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Input
                multiline={true}
                rows={6}
                variant="outlined"
                size="small"
                label="Description"
                fullWidth={true}
                name="description"
                color="primary"
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <img src={AddNote} alt="An adding note illustration " />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            fullWidth={true}
            disableElevation={true}
            handleClick={handleBack}
          >
            Back
          </Button>
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            fullWidth={true}
            disableElevation={true}
            handleClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LiveCourse;
