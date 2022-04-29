import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';

import { Card, UploadAvatar, Input, Button } from 'src/components';

import { useUpdateUserProfileMutation } from 'src/features/user/userSlice';

import { validationSchema } from 'src/validations/profile';
import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import useTeacherProfile from 'src/hooks/useTeacherProfile';

type Values = {
  firstname: string;
  lastname: string;
  // email: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  address: string;
};

const Form: FunctionComponent<Record<string, never>> = () => {
  const { data, isSuccess } = useTeacherProfile();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const _handleUpdateProfile = async (values: Values) => {
    const payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      // email: values.email,
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
                value={values.firstname}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.firstname && errors.firstname}
                error={touched.firstname && Boolean(errors.firstname)}
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
                value={values.lastname}
                handleChange={handleChange}
                onBlur={handleBlur}
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
                name="email"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                value={values.email}
                disabled={true}
                InputProps={{
                  readOnly: true,
                }}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
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
                value={values.phone}
                handleChange={handleChange}
                onBlur={handleBlur}
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
                name="city"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                value={values.city}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.city && errors.city}
                error={touched.city && Boolean(errors.city)}
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
                value={values.state}
                handleChange={handleChange}
                onBlur={handleBlur}
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
                name="zipCode"
                variant="outlined"
                fullWidth={true}
                color="primary"
                size="small"
                value={values.zipCode}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.zipCode && errors.zipCode}
                error={touched.zipCode && Boolean(errors.zipCode)}
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
                value={values.country}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.country && errors.country}
                error={touched.country && Boolean(errors.country)}
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
      </Box>
    </Card>
  );
};

export default Form;
