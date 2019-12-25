import React from 'react';
import cl from './../Dialog.module.css'
import {NavLink} from "react-router-dom";
import SiderBarFriendPhoto from "../../Navbar/SiderBar/SiderBarFriendPhoto/SiderBarFriendPhoto";

const DialogItem = (props) => {
    return (
        <div className={cl.dialog}>   {/*<div className={cl.dialog + ' '+ cl.active}>*/}
        <SiderBarFriendPhoto photo={props.photo}/>
        <NavLink to={'/dialogs/' + props.id} className={cl.name}> {props.name}</NavLink>
        </div>
    )
};

export default DialogItem;