import React, { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';

import { useStyles } from 'src/modules/Student/pages/Setting/styled.setting';

import { SETTING_LINK } from 'src/constant/setting';

import EmailNotification from 'src/modules/Student/pages/Setting/EmailNotification';
import Subscription from 'src/modules/Student/pages/Setting/Subscription';

import { TabNav } from 'src/components';

const Setting: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const _handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component="section" className={classes.root}>
      <TabNav nav={SETTING_LINK} value={value} handleChange={_handleChange} />
      {value === 0 && <EmailNotification />}
      {value === 1 && <Subscription />}
    </Box>
  );
};

export default Setting;
