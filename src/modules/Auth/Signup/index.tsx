import { FunctionComponent, ReactText, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Input, Button } from 'src/components';

import { useStyles } from 'src/modules/Auth/Signup/styled.signup';

import GetStarted from 'src/assets/images/getStartedImage.webp';

import { useCreateNewUserMutation } from 'src/modules/Auth/services/authSlice';

import {
  successNotification,
  errorNotification,
} from 'src/helpers/notification';

import { ISignup } from 'src/interface/auth';

import { validationSchema } from 'src/validations/signup';

const Signup: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [createNewUser] = useCreateNewUserMutation();

  const _handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const _handleSignup = async (values: ISignup): Promise<ReactText> => {
    const payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
      role: 'mentee',
    };
    try {
      const data = await createNewUser(payload).unwrap();
      const {
        status,
        payload: { role },
      } = data;
      if (status === 201) {
        resetForm();
        successNotification(data.message);
        if (role === 'mentee') {
          navigate('/dashboard');
        } else {
          navigate('/app/dashboard');
        }
      }
    } catch (error: any) {
      if (error && error.status === 409)
        return errorNotification(error.data.message);

      if (error && error.status === 400)
        return errorNotification(error.data.message);

      return errorNotification('An error occurred, Please try again');
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    onSubmit: _handleSignup,
    validationSchema,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    touched,
    isSubmitting,
    resetForm,
  } = formik;

  return (
    <Box className={classes.root}>
      <Grid container alignItems="center">
        <Grid item md={6} className={classes.imageWrapper}>
          <img src={GetStarted} />
        </Grid>
        <Grid item md={4} className={classes.formWrapper}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h2">Sign up</Typography>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Input
                  label="Firstname*"
                  type="text"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="firstname"
                  value={values.firstname}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.firstname && errors.firstname}
                  error={touched.firstname && Boolean(errors.firstname)}
                />
              </Grid>
              <Grid item sm={6}>
                <Input
                  label="Lastname*"
                  type="text"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="lastname"
                  value={values.lastname}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.lastname && errors.lastname}
                  error={touched.lastname && Boolean(errors.lastname)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Input
                  label="Email address*"
                  type="email"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="email"
                  value={values.email}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Input
                  label="Password*"
                  type={showPassword ? 'text' : 'password'}
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={_handleTogglePassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                  size="large"
                  disabled={isSubmitting}
                  handleClick={handleSubmit}
                >
                  {isSubmitting ? <CircularProgress size={28} /> : 'Sign up'}
                </Button>
              </Grid>
              <Grid item className={classes.signin}>
                <Typography variant="subtitle2">
                  Already a member? <Link to="/signin">Sign in</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
