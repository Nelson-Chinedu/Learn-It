import { FunctionComponent } from 'react';
import { Switch as MSwitch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch' } };

type Props = {
  checked: boolean;
};

const Switch: FunctionComponent<Props> = ({ checked }) => {
  return <MSwitch {...label} size="small" defaultChecked={checked} />;
};

export { Switch };
