import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Input, Button, UploadAvatar } from 'src/components';

import { useStyles } from 'src/modules/Student/pages/Profile/styled.profile';

import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from 'src/services/userSlice';

import { validationSchema } from 'src/validations/profile';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { RootState } from 'src/store';

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
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isSuccess } = useGetUserProfileQuery();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const _handleUpdateProfile = async (values: IValues) => {
    const payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      phone: values.phone,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
      country: values.country,
      address: values.address,
    };
    try {
      await updateUserProfile({ userId, payload }).unwrap();
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
        spacing={3}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item md={6}>
          <Input
            label="Firstname"
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
        spacing={3}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item md={12}>
          <Input
            label="Phone number"
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
        spacing={3}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item md={6}>
          <Input
            label="City"
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
        spacing={3}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item md={6}>
          <Input
            label="Zip code"
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
        spacing={3}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item md={12}>
          <Input
            label="Address"
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
            size="medium"
            handleClick={handleSubmit}
            disabled={isSubmitting}
          >
            Save profile
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Details };
