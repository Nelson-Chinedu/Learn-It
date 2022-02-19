import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Cancel';
import { makeStyles } from '@mui/styles';

import { Modal, Input, Button, ProgressBar } from 'src/components';

import VideoIcon from 'src/assets/images/videoIcon.png';

const useStyles = makeStyles({
  fileUpload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px dashed grey !important`,
    borderRadius: '5px',
    padding: '2em',
    textAlign: 'center',
    height: '150px',
    cursor: 'pointer',
    marginBottom: '2em',
    '& input': {
      display: 'none',
    },
  },
  uploadedFile: {
    '& .MuiGrid-item:nth-child(1)': {
      textAlign: 'center',
    },
    '& .MuiGrid-item:nth-child(3)': {
      textAlign: 'center',
    },
  },
});

const CourseModal: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};

  return (
    <Modal modalName="AddCourse">
      <form>
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Grid item sm={6}>
            <Input
              label="Course name"
              fullWidth={true}
              name="courseName"
              variant="outlined"
              size="small"
              color="primary"
              handleChange={handleChange}
            />
          </Grid>
          <Grid item sm={6}>
            <Input
              label="Price"
              fullWidth={true}
              name="price"
              variant="outlined"
              size="small"
              color="primary"
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
        <label className={classes.fileUpload}>
          <CloudUploadIcon fontSize="large" />
          <Typography variant="subtitle2">Upload Videos</Typography>
          <Typography variant="subtitle1">Click to browse files</Typography>
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={handleChange}
          />
        </label>
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2">Uploaded file</Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={classes.uploadedFile}
          >
            <Grid item md={1}>
              <img src={VideoIcon} alt="video icon" width={40} height={40} />
            </Grid>
            <Grid item md={10}>
              <Typography>Intro to JavaScript</Typography>
              <ProgressBar />
            </Grid>
            <Grid item md={1}>
              <IconButton>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Button
          variant="contained"
          disableElevation={true}
          color="primary"
          fullWidth={true}
          size="large"
        >
          Add Course
        </Button>
      </form>
    </Modal>
  );
};

export default CourseModal;
