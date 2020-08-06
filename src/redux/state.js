import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogReducer";


let dialog_list = [
    {name:'Vlad', messages:['hello', 'hello!','you are a cat!']},
    {name:'Polya', messages:['nice photo!', 'thank you!']}
];

let posts = [
    {post:'Good day!', likes:12},
    {post:'Love cats', likes:1},
    {post:'Happy new year!', likes:0},
    {post:'My first post, hello everybody!', likes:5}
];

let store = {
    _state:{
        dialog: {
            dialog_list:dialog_list,
            newmessagetext:'new massage'
        },
        profile: {
            posts: posts,
            newposttext:'text'
        }
    },
    _rerenderEntireTree(){
        console.log('state changed');
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.profile = profileReducer(this.getState().profile, action);
        this._state.dialog = dialogReducer(this.getState().dialog, action);
        this._rerenderEntireTree();
    }
};


export default store;
window.store = store;