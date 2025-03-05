import React, { FunctionComponent, useState } from 'react';

import { Wrapper } from 'src/modules/Student/pages/Setting/styled.setting';

import { SETTING_LINK } from 'src/constant/setting';

import EmailNotification from 'src/modules/Student/pages/Setting/EmailNotification';
import Subscription from 'src/modules/Student/pages/Setting/Subscription';

import { TabNav } from 'src/components';

const Setting: FunctionComponent<Record<string, never>> = () => {
  const [value, setValue] = useState(0);

  const _handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <TabNav nav={SETTING_LINK} value={value} handleChange={_handleChange} />
      {value === 0 && <EmailNotification />}
      {value === 1 && <Subscription />}
    </Wrapper>
  );
};

export default Setting;
