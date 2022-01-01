import { createTheme } from '@mui/material/styles';

const customTheme = {
  palette: {
    primary: {
      main: '#4EC491',
      dark: '#12A788',
      light: '#E0A8AE',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#31778C',
      dark: '#5DAEC6',
      light: '#A8D4E1',
      contrastText: '#FFF',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '2.5rem',
      lineHeight: 'auto',
      letterSpacing: '2%',
    },
    h2: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '2rem',
      lineHeight: 'auto',
      letterSpacing: '2%',
    },
    h3: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '1.5rem',
      lineHeight: 'auto',
      letterSpacing: '2%',
    },
    h6: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '1.125rem',
      lineHeight: 'auto',
      letterSpacing: '0.15%',
    },
    body1: {
      fontFamily: "'Raleway', sans-serif",
      // fontWeight: 700,
      fontStyle: 'normal',
      // fontSize: '1.313rem',
      lineHeight: 'auto',
      letterSpacing: '0.15%',
    },
    body2: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '1.313rem',
      lineHeight: 'auto',
      letterSpacing: '0.15%',
    },
    subtitle1: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '1rem',
      lineHeight: 'auto',
      letterSpacing: '0.15%',
    },
    subtitle2: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '1rem',
      lineHeight: '30px',
      letterSpacing: '0.15%',
    },
  },
};

const theme = createTheme(customTheme);

export default theme;
