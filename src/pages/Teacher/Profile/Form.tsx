import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

import { Card, UploadAvatar, Input, Button } from 'src/components';

const Form: FunctionComponent<Record<string, never>> = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};
  return (
    <Card borderRadius="10px" width="" height="100vh">
      <Box className="formContainer">
        <Typography>Personal Details</Typography>
        <UploadAvatar />
        <Box sx={{ m: '2em 0px' }}>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid item md={6}>
              <Input
                label="Firstname"
                name="firstname"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                label="Lastname"
                name="lastname"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid item md={6}>
              <Input
                label="Email address"
                name="email"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                label="Phone number"
                name="phone"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid item md={6}>
              <Input
                label="City"
                name="city"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                label="State/Province"
                name="state"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid item md={6}>
              <Input
                label="Zip code"
                name="zipCode"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                select={true}
                label="Country"
                name="country"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                handleChange={handleChange}
                onBlur={handleChange}
              >
                <MenuItem value="Nigeria">Nigeria</MenuItem>
              </Input>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid item md={12}>
              <Input
                label="Address"
                variant="outlined"
                color="primary"
                size="small"
                type="text"
                name="address"
                handleChange={handleChange}
                onBlur={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disableElevation
                size="medium"
              >
                Save profile
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
};

export default Form;
