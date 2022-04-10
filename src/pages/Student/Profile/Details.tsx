import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { Input, Button, UploadAvatar } from 'src/components';

import { useStyles } from 'src/pages/Student/Profile/styled.profile';

import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from 'src/features/user/userSlice';

import { validationSchema } from 'src/validations/profile';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

interface IValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  address: string;
}

const Details: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const { data, isSuccess } = useGetUserProfileQuery();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const _handleUpdateProfile = async (values: IValues) => {
    const payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      phone: values.phone,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
      country: values.country,
      address: values.address,
    };
    try {
      await updateUserProfile(payload).unwrap();
      successNotification('Profile updated successfully');
    } catch (error: any) {
      if (error && error.status === 401) {
        return errorNotification(error.data.message);
      }
      if (error && error.status === 400) {
        return errorNotification(error.data.message);
      }
      return errorNotification('An error occurred, Please try again');
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: (isSuccess && data && data.payload.firstname) || '',
      lastname: (isSuccess && data && data.payload.lastname) || '',
      email: (isSuccess && data && data.payload.email) || '',
      phone: (isSuccess && data && data.payload.phone) || '',
      city: (isSuccess && data && data.payload.city) || '',
      state: (isSuccess && data && data.payload.state) || '',
      zipCode: (isSuccess && data && data.payload.zipCode) || '',
      country: (isSuccess && data && data.payload.country) || '',
      address: (isSuccess && data && data.payload.address) || '',
    },
    validationSchema,
    onSubmit: _handleUpdateProfile,
    enableReinitialize: true,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    touched,
    isSubmitting,
  } = formik;

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
            value={values.firstname}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.firstname && errors.firstname}
            error={touched.firstname && Boolean(errors.firstname)}
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
            value={values.lastname}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.lastname && errors.lastname}
            error={touched.lastname && Boolean(errors.lastname)}
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
            name="email"
            value={values.email}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
        </Grid>
        <Grid item md={6}>
          <Input
            label="Phone number"
            variant="outlined"
            color="primary"
            size="small"
            type="tel"
            name="phone"
            value={values.phone}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.phone && errors.phone}
            error={touched.phone && Boolean(errors.phone)}
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
            value={values.city}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.city && errors.city}
            error={touched.city && Boolean(errors.city)}
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
            value={values.state}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.state && errors.state}
            error={touched.state && Boolean(errors.state)}
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
            value={values.zipCode}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.zipCode && errors.zipCode}
            error={touched.zipCode && Boolean(errors.zipCode)}
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
            value={values.country}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.country && errors.country}
            error={touched.country && Boolean(errors.country)}
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
            value={values.address}
            handleChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            helperText={touched.address && errors.address}
            error={touched.address && Boolean(errors.address)}
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
            handleClick={handleSubmit}
          >
            {isSubmitting ? <CircularProgress size={28} /> : 'Save profile'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Details };
