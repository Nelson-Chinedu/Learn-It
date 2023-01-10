import { createTheme } from '@mui/material/styles';
import { pxToRem } from 'src/helpers/formatFont';
import palette from './palette';
import typography from './typography';
// import breakpoints from './breakpoints';

let themeInstance = createTheme({});

themeInstance = createTheme({
  components: {
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        color: 'primary',
      },
      styleOverrides: {
        root: {
          '& .Mui-disabled': {
            backgroundColor: '#F1F2F6',
          },
        },
        sizeSmall: {
          height: 48,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: { color: '#0050C8' },
        },
      ],
      defaultProps: {
        disableTouchRipple: true,
        disableFocusRipple: true,
        variant: 'contained',
        disableElevation: true,
        color: 'primary',
        fullWidth: true,
        size: 'medium',
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
          color: '#fff',
          fontSize: pxToRem(14),
          textTransform: 'capitalize',
          fontFamily: "'Source Sans Pro', sans-serif",
        },
      },
    },
  },
  palette,
  typography,
  // breakpoints,
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

const theme = { ...themeInstance };

export default theme;
