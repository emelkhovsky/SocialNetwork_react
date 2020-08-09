import React from "react";
import Message from "./Message/Message";
import List from "./List/List";
import Dialogs from './Dialogs'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";

const DialogsContainer = (props) => {

    let addMessageContainer = () =>{
        props.dispatch(addMessageActionCreator());
    };

    let updateNewMessageContainer = (text) => {
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    let new_dialog_list = props.store.getState().dialog.dialog_list.map(el => (<List dialogname={el.name}/>));
    let new_messages = props.store.getState().dialog.dialog_list[0].messages.map(el => (<Message message={el}/>));

    return (
            <Dialogs addMessageContainer={addMessageContainer} 
            updateNewMessageContainer={updateNewMessageContainer}
            newmessagetext={props.store.getState().dialog.newmessagetext}
            new_dialog_list={new_dialog_list}
            new_messages={new_messages}/>
    );
}

export default DialogsContainer;