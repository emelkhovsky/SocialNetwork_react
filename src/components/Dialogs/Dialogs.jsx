import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    let addMessage = () =>{
        props.addMessageContainer();
    };

    let updateNewMessage = (event) => {
        let text = event.target.value;
        props.updateNewMessageContainer(text);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {props.new_dialog_list}
            </div>

            <div className={s.dialog}>
                <div className={s.messageitems}>
                    {props.new_messages}
                </div>
                <div>
                   <textarea onChange={updateNewMessage} value={props.newmessagetext}/>
                    <button onClick={addMessage}>Отправить</button> 
                </div>
                
            </div>

            
        </div>
    );
}

export default Dialogs;