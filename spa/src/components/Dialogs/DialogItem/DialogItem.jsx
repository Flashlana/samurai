import React from 'react';
import cl from './../Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={cl.dialog}>   {/*<div className={cl.dialog + ' '+ cl.active}>*/}
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    )
};

export default DialogItem;