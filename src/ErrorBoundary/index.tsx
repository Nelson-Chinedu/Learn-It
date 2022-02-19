import React, { Component, ErrorInfo, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  children: ReactElement;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service like sentry
    // logErrorToMyService(error, errorInfo);

    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box
          style={{
            width: '50%',
            margin: '4em auto',
            textAlign: 'center',
          }}
        >
          <Typography variant="subtitle1">Oops...</Typography>
          <Typography variant="subtitle2">
            Something went wrong, Please refresh or check your internet
            connection
          </Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
