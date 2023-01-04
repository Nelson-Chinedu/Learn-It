import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';

import { TabNav } from 'src/components';

import { TEACHER_SETTING_LINK } from 'src/constant/setting';

import { useStyles } from 'src/modules/Teacher/pages/Setting/styled.setting';

const Setting: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Box className="settingContainer">
        <TabNav nav={TEACHER_SETTING_LINK} />
      </Box>
    </Box>
  );
};

export default Setting;
