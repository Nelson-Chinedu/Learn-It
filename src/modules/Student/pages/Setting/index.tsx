import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useStyles } from 'src/modules/Student/pages/Setting/styled.setting';

import { EMAIL_NOTIFICATION, SETTING_LINK } from 'src/constant/setting';

import { Card, Switch } from 'src/components';

import { Layout } from 'src/Layout';

const Setting: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item md={2}>
            <Box>
              {SETTING_LINK.map((link) => (
                <Box className={`nav ${link.state}`} key={link.title}>
                  {<Typography variant="subtitle2">{link.title}</Typography>}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item md={10}>
            <Card width="100%" height="" borderRadius="10px">
              <Box style={{ padding: '20px' }}>
                <Typography variant="subtitle1">Email Notification</Typography>
                {EMAIL_NOTIFICATION.map((notification) => (
                  <Box key={notification.title} className="rightWrapper">
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Typography variant="subtitle2">
                          {notification.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Switch checked={notification.checked} />
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Setting;
