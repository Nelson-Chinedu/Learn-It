import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';

import { Layout } from 'src/Layout/Teacher';

import { TabNav, Card } from 'src/components';

import { TEACHER_SETTING_LINK } from 'src/constant/setting';

import { useStyles } from 'src/pages/Teacher/Setting/styled.setting';

const Setting: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box component="section" className={classes.root}>
        <Card borderRadius="10px" height="100vh" width="100%">
          <Box className="settingContainer">
            <TabNav nav={TEACHER_SETTING_LINK} />
          </Box>
        </Card>
      </Box>
    </Layout>
  );
};

export default Setting;
