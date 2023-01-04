import { FunctionComponent, ReactText, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';

import { Input, Button } from 'src/components';

import { RootState } from 'src/store';

import TeamWork from 'src/assets/images/welcomeBack.webp';

import { validationSchema } from 'src/validations/signin';

import { useLoginMutation } from 'src/modules/Auth/services/authSlice';

import { IAccount } from 'src/interface/auth';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { loggedState } from 'src/features/accountSlice';

import useLocalStorage from 'src/hooks/useLocalStorage';

import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

import { useStyles } from 'src/modules/Auth/pages/Signin/styled.signin';

const Signin: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const [, setStoredValue] = useLocalStorage('clu', false);

  const _handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const _handleSigin = async (values: IAccount): Promise<ReactText> => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    try {
      const data = await login(payload).unwrap();
      const {
        status,
        payload: { role },
      } = data;
      if (status === 200) {
        resetForm();
        successNotification(data.message);
        dispatch(loggedState(!isLoggedIn));
        setStoredValue(true); // set loggedin user to true which stores to localstorage
        if (role === 'mentee') {
          navigate('/s/dashboard');
        } else {
          navigate('/m/dashboard');
        }
      }
    } catch (error: any) {
      if (error && error.status === 404) {
        values.password = '';
        return errorNotification(error.data.message);
      }

      if (error && error.status === 400) {
        values.password = '';
        return errorNotification(error.data.message);
      }
      return errorNotification('An error occurred, Please try again');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: _handleSigin,
  });

  const {
    handleBlur,
    handleChange,
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
          <img src={TeamWork} alt="team work illustration" />
        </Grid>
        <Grid item md={4} className={classes.formWrapper}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h2">Welcome back</Typography>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
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
                  {isSubmitting ? <CircularProgress size={20} /> : 'Sign in'}
                </Button>
              </Grid>
              <Grid item className={classes.signup}>
                <Typography variant="subtitle2">
                  Not yet a member?{' '}
                  <Link to={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNUP}`}>
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
