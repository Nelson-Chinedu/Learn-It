import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import { LineItem } from 'src/pages/Student/Dashbaord/LineItem';

const useStyles = makeStyles({
  root: {},
  header: {
    padding: '1em .8em 0px',
  },
  wrapper: {
    '& .MuiTypography-subtitle2': {
      fontSize: '13px',
    },
  },
});

const PaymentHistory: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Grid item>
          <Typography variant="subtitle2">Payment History</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">See all</Typography>
        </Grid>
      </Grid>
      <Box>
        {[0, 1].map((number) => (
          <LineItem key={number}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="flex-start"
              className={classes.wrapper}
            >
              <Grid item>
                <Typography variant="subtitle2">
                  Wireframe &amp; Prototype
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">$120</Typography>
              </Grid>
            </Grid>
          </LineItem>
        ))}
      </Box>
    </Box>
  );
};

export { PaymentHistory };
