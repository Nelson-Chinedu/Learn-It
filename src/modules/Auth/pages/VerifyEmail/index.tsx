import { FunctionComponent, useMemo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Button } from 'src/components';

import { useVerifyEmailMutation } from 'src/modules/Auth/services/authSlice';

import { AUTH_PATHS, BASE_PATHS } from 'src/constant/path';

const VerifyEmail: FunctionComponent<Record<string, never>> = () => {
  const { search } = useLocation();
  const [verifyEmail] = useVerifyEmailMutation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const query: URLSearchParams = useMemo(
    () => new URLSearchParams(search),
    [search]
  );
  const token: string = query.get('t');

  useEffect(() => {
    setIsLoading(true);
    const data = async () => {
      try {
        if (token) {
          const res = await verifyEmail({ token }).unwrap();
          if (res) {
            setIsLoading(false);
            setIsError(false);
            setMessage(res.message);
          }
        }
      } catch (error: any) {
        setIsLoading(false);
        setIsError(true);
        setMessage(error.data.message);
      }
    };
    data();
  }, [token]);

  if (!token) return <Typography>Something went wrong</Typography>;

  if (isLoading && !isError) return <Typography>Please wait...</Typography>;

  return (
    <Box sx={{ width: '80%', margin: '5em auto', textAlign: 'center' }}>
      {isError && !isLoading ? (
        <Typography variant="subtitle2" sx={{ fontSize: '1rem !important' }}>
          {message}
        </Typography>
      ) : (
        !isError &&
        !isLoading && (
          <>
            <Typography
              variant="subtitle2"
              sx={{ mb: 4, fontSize: '1rem !important' }}
            >
              {message}
            </Typography>
            <Button
              fullWidth={false}
              href={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
            >
              Login
            </Button>
          </>
        )
      )}
    </Box>
  );
};

export default VerifyEmail;
