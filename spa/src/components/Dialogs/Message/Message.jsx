import React from 'react';
import cl from './../Dialog.module.css'

const Message = (props) => {

    const getMessageStyle = () => {
        if (props.id === 1) {
            return cl.messageI
        }
        return cl.messageOther
    };
    return <div className={getMessageStyle()}>{props.message}</div>
};

export default Message;

