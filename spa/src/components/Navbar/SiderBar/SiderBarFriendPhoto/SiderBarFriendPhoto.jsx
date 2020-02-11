import React from "react";
import cl from './SiderBarFriendPhoto.module.css'

const getPhoto = (props) => {
    if (!props.photo) return 'https://img.icons8.com/metro/26/000000/user-male.png';
    return props.photo
};

const SiderBarFriendPhoto = (props) => {

    return (
        <div className={cl.photoAndNameFriend}>
            <img src={getPhoto(props)} className={cl.imgFriend} alt={'фото друга'}/>
            <div className={cl.name}>{props.name}</div>
        </div>
    )
};

 export default SiderBarFriendPhoto;
