import React from 'react';
import cl from './../Dialog.module.css'

const Message = (props) => {
    return <div className={cl.message}>{props.message}</div>
};

export default Message;