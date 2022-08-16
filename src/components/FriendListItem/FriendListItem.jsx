import React from 'react';
import styles from './FriendListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />

      <p className="name" style={{ color: isOnline ? 'green' : 'red' }}>
        {name}
      </p>
      {/* берем пропс и через тернарник меняем цвет в инлайн стилях {name} */}
    </div>
  );
}
