import React from 'react';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(info => (
        <FriendListItem
          name={info.name}
          avatar={info.avatar}
          isOnline={info.isOnline}
          key={info.id}
        />
      ))}
    </ul>
  );
}
