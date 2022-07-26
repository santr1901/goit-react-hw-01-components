import React from 'react';
import PropTypes from 'prop-types';

export default function FriendListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
        <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
        </li>
  )  
}

FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.string,

}