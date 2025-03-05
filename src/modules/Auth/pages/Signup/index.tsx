import { FunctionComponent, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { Input, Button } from 'src/components';

import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

import GetStarted from 'src/assets/images/getStartedImage.webp';
import ConfirmEmailImage from 'src/assets/images/confirm-email.gif';

import { useCreateNewUserMutation } from 'src/modules/Auth/services/authSlice';

import { errorNotification } from 'src/helpers/notification';

import { ISignup } from 'src/interface/auth';

import { validationSchema } from 'src/validations/signup';

import { YOE } from 'src/constant/yearOfExperice';
import { TITLES } from 'src/constant/titles';

import {
  Footer,
  FormWrapper,
  ImageWrapper,
  Wrapper,
} from 'src/modules/Auth/pages/Signup/styled.signup';

const Signup: FunctionComponent<Record<string, never>> = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [createNewUser] = useCreateNewUserMutation();
  const { search } = useLocation();
  const [queryParam, setQueryParam] = useState('');
  const [isNewSignup, setIsNewSignup] = useState<{
    message: string;
    show: boolean;
  }>({ message: '', show: false });

  useEffect(() => {
    const getQueryParam = () => {
      const query = new URLSearchParams(search);
      const role = query.get('q');
      setQueryParam(role);
    };
    getQueryParam();
  }, []);

  const _handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBack = () => {
    navigate('/');
  };

  const _handleSignup = async (values: ISignup) => {
    const common_payload = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
      role: queryParam === 'm' ? 'mentor' : 'mentee',
    };

    const mentor_payload = {
      ...common_payload,
      company: values.company,
      yearsOfExperience: values.yearsOfExperience,
      title: values.title,
    };

    const payload = queryParam === 'm' ? mentor_payload : common_payload;

    try {
      const data = await createNewUser(payload).unwrap();
      const { status, message } = data;

      if (status === 201) {
        resetForm();
        setIsNewSignup({ message, show: true });
      }
    } catch (error: any) {
      setIsNewSignup({ message: '', show: false });

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
      company: '',
      yearsOfExperience: '',
      title: '',
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

  if (isNewSignup.show) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Box sx={{ width: '20%' }}>
          <img
            src={ConfirmEmailImage}
            alt="Email animation"
            style={{ width: '150px', height: '150px', objectFit: 'contain' }}
          />
          <Typography variant="h2">Check your email</Typography>
          <Typography variant="body2" pt={2}>
            {isNewSignup.message}.
          </Typography>
          <Button
            sx={{ width: '60%', my: 4 }}
            size="large"
            disabled={isSubmitting}
            handleClick={() =>
              navigate(`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`)
            }
          >
            Go to Login
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Wrapper>
      <Grid container alignItems="center">
        {!isMobile && (
          <ImageWrapper size={{ md: 6 }}>
            <img src={GetStarted} alt="Team work illustration" />
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
              <Typography variant="h2" mt={8}>
                Sign up
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={isMobile ? 0 : 2} columns={12}>
                  <Grid
                    size={{ xs: 12, sm: 6 }}
                    sx={{ marginBottom: isMobile && '1em' }}
                  >
                    <Input
                      label="Firstname*"
                      type="text"
                      fullWidth
                      name="firstname"
                      value={values.firstname}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.firstname && errors.firstname}
                      error={touched.firstname && Boolean(errors.firstname)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Input
                      label="Lastname*"
                      type="text"
                      fullWidth
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
                  <Grid size={{ xs: 12 }}>
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
                  <Grid size={{ xs: 12 }}>
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
                {queryParam !== null && queryParam === 'm' && (
                  <>
                    <Grid size={{ xs: 12, sm: 12 }}>
                      <Input
                        label="Title*"
                        select
                        fullWidth
                        name="title"
                        value={values.title}
                        handleChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.title && errors.title}
                        error={touched.title && Boolean(errors.title)}
                      >
                        {TITLES.map(({ label, value }) => (
                          <MenuItem value={value} key={label}>
                            {label}
                          </MenuItem>
                        ))}
                      </Input>
                    </Grid>
                    <Grid container spacing={isMobile ? 0 : 2}>
                      <Grid
                        size={{ xs: 12, sm: 6 }}
                        sx={{ marginBottom: isMobile && '1em' }}
                      >
                        <Input
                          label="Company*"
                          type="text"
                          fullWidth
                          name="company"
                          value={values.company}
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          helperText={touched.company && errors.company}
                          error={touched.company && Boolean(errors.company)}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Input
                          label="Years of Experience*"
                          select
                          fullWidth
                          name="yearsOfExperience"
                          value={values.yearsOfExperience}
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          helperText={
                            touched.yearsOfExperience &&
                            errors.yearsOfExperience
                          }
                          error={
                            touched.yearsOfExperience &&
                            Boolean(errors.yearsOfExperience)
                          }
                        >
                          {YOE.map(({ label, value }) => (
                            <MenuItem value={value} key={label}>
                              {label}
                            </MenuItem>
                          ))}
                        </Input>
                      </Grid>
                    </Grid>
                  </>
                )}
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      fullWidth
                      size="large"
                      disabled={isSubmitting}
                      handleClick={handleSubmit}
                    >
                      Sign up
                    </Button>
                  </Grid>
                  <Footer
                  // className={classes.signin}
                  >
                    <Typography variant="subtitle2">
                      Already a member?{' '}
                      <Link to={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}>
                        Sign in
                      </Link>
                    </Typography>
                  </Footer>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </FormWrapper>
      </Grid>
    </Wrapper>
  );
};

export default Signup;
