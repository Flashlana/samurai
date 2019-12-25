import React from 'react';
import cl from './../Dialog.module.css'

const Message = (props) => {

    const getMessageStyle = () => {
        if (props.id === 1) {
            return cl.messageI
        }
        return cl.messageOther
    };
    return (
        <div>
            <div className={getMessageStyle()}>{props.message}</div>
        </div>
    )
};

export default Message;

