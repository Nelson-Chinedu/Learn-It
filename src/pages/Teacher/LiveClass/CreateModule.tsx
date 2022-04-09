import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { Input, Button } from 'src/components';

const CreateModule: FunctionComponent<Record<string, never>> = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box className="moduleContainer">
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <IconButton size="small" onClick={handleBack}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body1">Create Class Module</Typography>
        </Grid>
      </Grid>
      <form>
        <Box className="formContainer">
          <Input
            label="Class name"
            variant="outlined"
            color="primary"
            fullWidth={true}
            size="small"
            name="className"
            handleChange={handleChange}
            onBlur={handleChange}
          />
        </Box>
        <Box className="formContainer">
          <Input
            label="module"
            multiline
            rows={8}
            fullWidth={true}
            variant="outlined"
            color="primary"
            size="small"
            name="module"
            handleChange={handleChange}
            onBlur={handleChange}
          />
        </Box>
        <Grid container spacing={1}>
          <Grid item md={3}>
            <Button
              color="primary"
              disableElevation={true}
              fullWidth={true}
              size="small"
              variant="outlined"
              style={{ width: '30%' }}
            >
              Add
            </Button>
          </Grid>
          <Grid item md={3}>
            <Button
              color="primary"
              disableElevation={true}
              fullWidth={true}
              size="small"
              variant="contained"
            >
              Complete
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateModule;
