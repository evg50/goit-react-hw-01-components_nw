import React from 'react';
import Statistics from './Statistics';
export default function StatisticList({ title, stats }) {
  return (
    <ul>
      {stats.map(item => (
        <li key={item.id}>
          <Statistics
            stats={item}
            title={title}
            // label={label},
            // percentage={percentage}
          />
        </li>
      ))}
    </ul>
  );
}
