import React from "react";
import cl from './SiderBarFriendPhoto.module.css'

const SiderBarFriendPhoto = (props) => {
    return (
        <div className={cl.photoAndNameFriend}>
            <img src={props.photo} className={cl.imgFriend}/>
            <div className={cl.name}>{props.name}</div>
        </div>
    )
};

 export default SiderBarFriendPhoto;
