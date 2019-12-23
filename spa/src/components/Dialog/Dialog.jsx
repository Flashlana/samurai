import React from 'react';
import cl from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = ()=> {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog}>
                    <NavLink to='/dialogs/1'> Лена </NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to='/dialogs/2'> Оля </NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to='/dialogs/3'> Андрей </NavLink>
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>Hello</div>
                <div className={cl.message}>How are you?</div>
                <div className={cl.message}>Where are you?</div>
            </div>
        </div>
    )
};

export default Dialog;