import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import List from "./List/List";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";

const Dialogs = (props) => {

    let dialog = props.store.getState().dialog;

    let new_dialog_list = dialog.dialog_list.map(el => (<List dialogname={el.name}/>));
    let new_messages = dialog.dialog_list[0].messages.map(el => (<Message message={el}/>));

    
    let addMessage = () =>{
        props.dispatch(addMessageActionCreator());
    };

    let updateNewMessage = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {new_dialog_list}
            </div>

            <div className={s.dialog}>
                <div className={s.messageitems}>
                    {new_messages}
                </div>
                <div>
                   <textarea onChange={updateNewMessage} value={dialog.newmessagetext}/>
                    <button onClick={addMessage}>Отправить</button> 
                </div>
                
            </div>

            
        </div>
    );
}

export default Dialogs;