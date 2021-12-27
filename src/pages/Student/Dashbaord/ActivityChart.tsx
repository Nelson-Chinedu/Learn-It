import { FunctionComponent } from 'react';
import { LineChart, Line, XAxis } from 'recharts';

import { DATA } from 'src/constant/activity';

const ActivityChart: FunctionComponent<Record<string, never>> = () => {
  return (
    <LineChart width={500} height={260} data={DATA} style={{ margin: 'auto' }}>
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
    </LineChart>
  );
};

export { ActivityChart };
