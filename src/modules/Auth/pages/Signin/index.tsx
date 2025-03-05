import { FunctionComponent, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { Input, Button } from 'src/components';

import TeamWork from 'src/assets/images/welcomeBack.webp';

import { validationSchema } from 'src/validations/signin';

import { useLoginMutation } from 'src/modules/Auth/services/authSlice';

import { IAccount } from 'src/interface/auth';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import {
  AUTH_PATHS,
  BASE_PATHS,
  MENTOR_PATHS,
  STUDENT_PATHS,
} from 'src/constant/path';

import {
  Wrapper,
  ImageWrapper,
  FormWrapper,
  FooterWrapper,
} from 'src/modules/Auth/pages/Signin/styled.signin';

const Signin: FunctionComponent<Record<string, never>> = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [login] = useLoginMutation();

  const _handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const _handleSigin = async (values: IAccount) => {
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

        if (role === 'mentee' && isSubscribed) {
          window.location.href = `/${BASE_PATHS.STUDENT}/${STUDENT_PATHS.DASHBOARD}`;
        } else if (role === 'mentee' && !isSubscribed) {
          window.location.href = `/${BASE_PATHS.APP}/${STUDENT_PATHS.ONBOARDING}`;
        } else {
          window.location.href = `/${BASE_PATHS.MENTOR}/${MENTOR_PATHS.DASHBOARD}`;
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

  const handleBack = () => {
    navigate('/');
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
    <Wrapper>
      <Grid container alignItems="center">
        {!isMobile && (
          <ImageWrapper size={{ md: 6 }}>
            <img src={TeamWork} alt="Team work illustration" />
          </ImageWrapper>
        )}
        <FormWrapper
          size={{ xs: 10, sm: 10, md: 4.2 }}
          sx={{ margin: '10em auto' }}
        >
          <Grid container>
            <Grid size={{ xs: 12 }}>
              <Button
                fullWidth={false}
                variant="outlined"
                handleClick={handleBack}
              >
                <KeyboardBackspaceIcon />
                Back to Home
              </Button>
              <Typography mt={8} variant="h2">
                Welcome back
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 12 }}>
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
                  <Grid size={{ xs: 12, sm: 12 }}>
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 12 }}>
                    <Button
                      fullWidth
                      size="large"
                      disabled={isSubmitting}
                      handleClick={handleSubmit}
                    >
                      Sign in
                    </Button>
                  </Grid>
                  <FooterWrapper>
                    <Typography variant="subtitle2">
                      Not yet a member?{' '}
                      <Link to={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNUP}`}>
                        Sign up
                      </Link>
                    </Typography>
                  </FooterWrapper>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </FormWrapper>
      </Grid>
    </Wrapper>
  );
};

export default Signin;
