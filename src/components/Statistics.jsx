import React from 'react';

export default function Statistics({ title, stats }) {
  // title = false;
  console.log(stats);
  return (
    <div>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          <li className="item">
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
