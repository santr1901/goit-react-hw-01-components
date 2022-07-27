import React from 'react';
import FriendListItem from './FriendListItem'
import css from 'components/FriendList/FriendList.module.css'


export default function FriendList(props) {
    const frienList = props.friends;
    return (
        <ul className={css.friendList}>
            {frienList.map(info =>
            <FriendListItem
            name={info.name}
            avatar={info.avatar}
            isOnline={info.isOnline}
            key={info.id} />
            )}
            
        </ul> 
    )
    
    
    
}