import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { Input, Button } from 'src/components';

import { useStyles } from 'src/pages/Student/Profile/styled.profile';

import AvatarUser from 'src/assets/images/Avatar.png';

const Details: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = () => {};
  return (
    <Box className={classes.detail}>
      <Box
        style={{
          position: 'relative',
          width: '20%',
          margin: 'auto',
        }}
      >
        <Avatar
          src={AvatarUser}
          alt="profile picture"
          sx={{ width: 70, height: 70 }}
        />
        <Box className={classes.upload}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              disableRipple={true}
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraIcon fontSize="small" />
            </IconButton>
          </label>
        </Box>
      </Box>
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
            multiline
            rows={4}
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
