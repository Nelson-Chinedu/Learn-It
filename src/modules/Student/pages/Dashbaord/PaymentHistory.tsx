import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material';

import { LineItem } from 'src/modules/Student/pages/Dashbaord/LineItem';

const HeaderWrapper = styled(Grid)({
  padding: '1em .8em 0px',
});

const Wrapper = styled(Grid)({
  '& .MuiTypography-subtitle2': {
    fontSize: '13px',
  },
});

const PaymentHistory: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box>
      <HeaderWrapper
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <Typography variant="subtitle2">Payment History</Typography>
        </Grid>
        <Grid>
          <Typography variant="subtitle2">See all</Typography>
        </Grid>
      </HeaderWrapper>
      <Box>
        {[0, 1].map((number) => (
          <LineItem key={number}>
            <Wrapper
              container
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid>
                <Typography variant="subtitle2">
                  Wireframe &amp; Prototype
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="subtitle2">$120</Typography>
              </Grid>
            </Wrapper>
          </LineItem>
        ))}
      </Box>
    </Box>
  );
};

export { PaymentHistory };
