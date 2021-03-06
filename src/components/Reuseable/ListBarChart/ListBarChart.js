import React, { PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, Text } from 'recharts';

const tickLabel = (options) => {
  const { payload, x, y } = options;
  return (
    <Text y={options.y - 22} x={options.x + 5}>{payload.value}</Text>
  );
};

const ListBarChart = props => (
  <ResponsiveContainer width="100%" height={'100%'} minHeight={1000} >
    <BarChart
      data={props.data}
      layout={'vertical'}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <XAxis
        type="number"
        axisLine={false}
        tickLine={false}
        tick={false}
      />
      <YAxis
        tick={tickLabel}
        type="category"
        dataKey="name"
        tickLine={false}
        axisLine={false}
      />
      <Bar
        dataKey="value"
        fill={props.colors[0]}
        label={props.labelKey}
        legendType={'none'}
        barSize={25}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default ListBarChart;
