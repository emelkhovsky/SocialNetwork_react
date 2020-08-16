import React from "react";
import Message from "./Message/Message";
import List from "./List/List";
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";

let mapStateToProps = (state) => {
    let new_dialog_list = state.dialogPage.dialog_list.map(el => (<List dialogname={el.name}/>));
    let new_messages = state.dialogPage.dialog_list[0].messages.map(el => (<Message message={el}/>));
    return{
        new_dialog_list:new_dialog_list,
        new_messages:new_messages,
        newmessagetext:state.dialogPage.newmessagetext
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessageContainer: () =>{
            dispatch(addMessageActionCreator());
        },
        updateNewMessageContainer: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;