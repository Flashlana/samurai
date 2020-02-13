import React from 'react';
import cl from './Dialog.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialog = (props)=> {
    let dialogsElement = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo}/>);
    let messagesElement = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);
    let newMessage = React.createRef();
    const AddMessage = () => {
      let text = newMessage.current.value;
      alert(text);
    };
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={cl.messages}>
                {messagesElement}
                <div>
                    <textarea ref={newMessage} className={cl.newPost}></textarea>
                    <button onClick={AddMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
};

export default Dialog;