const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogReducer = (state, action) =>{
    if (action.type === ADD_MESSAGE){
        state.dialog_list[0].messages.push(state.newmessagetext);
        state.newmessagetext = '';
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
        state.newmessagetext = action.text;
    }
    return state;
};

export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT,text:text});