import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Input, Button, UploadAvatar } from 'src/components';

import { useStyles } from 'src/pages/Student/Profile/styled.profile';

const Details: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};
  return (
    <Box className={classes.detail}>
      <UploadAvatar />
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item md={6}>
          <Input
            label="Firstname"
            variant="outlined"
            color="primary"
            size="small"
            type="text"
            name="firstname"
            handleChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <Input
            label="Lastname"
            variant="outlined"
            color="primary"
            size="small"
            type="text"
            name="lastname"
            handleChange={handleChange}
            fullWidth
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
            variant="outlined"
            color="primary"
            size="small"
            type="text"
            name="emailAddress"
            handleChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <Input
            label="Phone number"
            variant="outlined"
            color="primary"
            size="small"
            type="tel"
            name="phoneNumber"
            handleChange={handleChange}
            fullWidth
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
            variant="outlined"
            color="primary"
            size="small"
            type="text"
            name="city"
            handleChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <Input
            label="State/Province"
            variant="outlined"
            color="primary"
            size="small"
            type="text"
            name="state"
            handleChange={handleChange}
            fullWidth
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
            variant="outlined"
            color="primary"
            size="small"
            type="text"
            name="zipCode"
            handleChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <Input
            label="Country"
            variant="outlined"
            color="primary"
            size="small"
            type="text"
            name="country"
            handleChange={handleChange}
            fullWidth
          />
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
  );
};

export { Details };
