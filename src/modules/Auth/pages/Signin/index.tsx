import { FunctionComponent, ReactText, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

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

import {
  AUTH_PATHS,
  BASE_PATHS,
  STUDENT_PATHS,
  MENTOR_PATHS,
} from 'src/constant/path';

import { useStyles } from 'src/modules/Auth/pages/Signin/styled.signin';

const Signin: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.account);
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const [, setStoredIsLoggedIn] = useLocalStorage('clu', false);
  const [, setStoredIsSubscribed] = useLocalStorage('csu', false);

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
        payload: { role, isSubscribed },
      } = data;
      if (status === 200) {
        resetForm();
        successNotification(data.message);
        dispatch(loggedState({ login: !isLoggedIn, subscribed: isSubscribed }));
        setStoredIsLoggedIn(true); // set loggedin user to true which stores to localstorage
        setStoredIsSubscribed(isSubscribed); // set subscribe user to true/false which stores to localstorage

        if (role === 'mentee' && isSubscribed) {
          navigate(`/${BASE_PATHS.STUDENT}/${STUDENT_PATHS.DASHBOARD}`);
        } else if (role === 'mentee' && !isSubscribed) {
          navigate(`/${BASE_PATHS.APP}/${STUDENT_PATHS.ONBOARDING}`);
        } else {
          navigate(`/${BASE_PATHS.MENTOR}/${MENTOR_PATHS.DASHBOARD}`);
        }
      }
    } catch (error: any) {
      if (error && error.status === 404) {
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
        {!isMobile && (
          <Grid item md={6} className={classes.imageWrapper}>
            <img src={TeamWork} alt="Team work illustration" />
          </Grid>
        )}
        <Grid
          item
          xs={10}
          sm={10}
          md={4}
          sx={{ margin: '10em auto' }}
          className={classes.formWrapper}
        >
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <Typography variant="h2">Welcome back</Typography>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Input
                  label="Email address*"
                  type="email"
                  fullWidth
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
              <Grid item xs={12} sm={12}>
                <Input
                  label="Password*"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
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
              <Grid item xs={12} sm={12}>
                <Button
                  fullWidth
                  size="large"
                  disabled={isSubmitting}
                  handleClick={handleSubmit}
                >
                  Sign in
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
