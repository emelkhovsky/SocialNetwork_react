const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let dialog_list = [
    {name:'Vlad', messages:['hello', 'hello!','you are a cat!']},
    {name:'Polya', messages:['nice photo!', 'thank you!']}
];

let initialState = {
    dialog_list:dialog_list,
    newmessagetext:'new massage'
}


export const dialogReducer = (state=initialState, action) =>{
    let stateCopy;
    if (action.type === ADD_MESSAGE){
        stateCopy = {
            ...state,
            dialog_list:[...state.dialog_list], 
            newmessagetext: ''
        };
        stateCopy.dialog_list[0].messages = [...state.dialog_list[0].messages]
        stateCopy.dialog_list[0].messages.push(state.newmessagetext);
        return stateCopy;
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
        return {
            ...state,
            newmessagetext:action.text
        };
    }
    return state;
};

export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT,text:text});