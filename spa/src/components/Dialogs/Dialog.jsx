import React from 'react';
import cl from './Dialog.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialog = (props)=> {
    let dialogsElement = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={cl.messages}>
                {messagesElement}
            </div>
        </div>
    )
};

export default Dialog;