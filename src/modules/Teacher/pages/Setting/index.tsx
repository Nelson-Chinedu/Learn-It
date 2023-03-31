import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';

import { TabNav } from 'src/components';

import { TEACHER_SETTING_LINK } from 'src/constant/setting';

import General from 'src/modules/Teacher/pages/Setting/General';

import { useStyles } from 'src/modules/Teacher/pages/Setting/styled.setting';

const Setting: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const _handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component="section" className={classes.root}>
      <TabNav
        nav={TEACHER_SETTING_LINK}
        value={value}
        handleChange={_handleChange}
      />
      {value === 0 && <General />}
    </Box>
  );
};

export default Setting;
