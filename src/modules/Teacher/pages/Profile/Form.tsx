import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';

import { Card, UploadAvatar, Input, Button } from 'src/components';

import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from 'src/services/userSlice';

import { RootState } from 'src/store';

import { validationSchema } from 'src/validations/profile';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

type Values = {
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  address: string;
};

const Form: FunctionComponent<Record<string, never>> = () => {
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isSuccess } = useGetUserProfileQuery();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const _handleUpdateProfile = async (values: Values) => {
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
    <Card borderRadius="10px" width="" height="100vh">
      <Box className="formContainer">
        <UploadAvatar />
        <Box sx={{ m: '2em 0px' }}>
          <Grid
            container
            spacing={3}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid size={{ md: 6 }}>
              <Input
                label="Firstname"
                name="firstname"
                fullWidth={true}
                value={values.firstname}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.firstname && errors.firstname}
                error={touched.firstname && Boolean(errors.firstname)}
              />
            </Grid>
            <Grid size={{ md: 6 }}>
              <Input
                label="Lastname"
                name="lastname"
                fullWidth={true}
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
            <Grid size={{ md: 12 }}>
              <Input
                label="Phone number"
                name="phone"
                fullWidth={true}
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
            spacing={3}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid size={{ md: 6 }}>
              <Input
                label="City"
                name="city"
                fullWidth={true}
                value={values.city}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.city && errors.city}
                error={touched.city && Boolean(errors.city)}
              />
            </Grid>
            <Grid size={{ md: 6 }}>
              <Input
                label="State/Province"
                name="state"
                fullWidth={true}
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
            spacing={3}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Grid size={{ md: 6 }}>
              <Input
                label="Zip code"
                name="zipCode"
                fullWidth={true}
                value={values.zipCode}
                handleChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.zipCode && errors.zipCode}
                error={touched.zipCode && Boolean(errors.zipCode)}
              />
            </Grid>
            <Grid size={{ md: 6 }}>
              <Input
                select={true}
                label="Country"
                name="country"
                fullWidth={true}
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
            <Grid size={{ md: 12 }}>
              <Input
                label="Address"
                color="primary"
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
            <Grid size={{ md: 3 }}>
              <Button
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
      </Box>
    </Card>
  );
};

export default Form;
