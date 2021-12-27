import { FunctionComponent } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

import { DATA, COLORS } from 'src/constant/learning';

const LearningChart: FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <PieChart width={200} height={200} style={{ margin: 'auto' }}>
        <Pie
          data={DATA}
          cx={90}
          cy={90}
          innerRadius={65}
          fill="#8884d8"
          dataKey="value"
        >
          {DATA.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value={'2h 35m'}
            position="center"
            style={{ fontWeight: 100, fontStyle: 'normal', fontSize: '1.5em' }}
          />
        </Pie>
      </PieChart>
    </>
  );
};

export { LearningChart };
