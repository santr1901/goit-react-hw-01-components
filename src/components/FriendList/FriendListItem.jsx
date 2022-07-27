import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendListItem.module.css'

const red = "red";
const green = "green"

export default function FriendListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
        <li className={css.item}>
    <span className={css.status} style = {{backgroundColor: `${isOnline ? green: red }`}}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
        </li>
  )  
}

FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.string,

}