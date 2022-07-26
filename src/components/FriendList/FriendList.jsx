import React from 'react';
import FriendListItem from './FriendListItem'


export default function FriendList(props) {
    const frienList = props.friends;
    return (
        <ul className="friend-list">
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