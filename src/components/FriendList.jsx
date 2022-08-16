import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}

            // label={label},
            // percentage={percentage}
          />
        </li>
      ))}
    </ul>
  );
}
