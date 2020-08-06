const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) =>{
    if (action.type === ADD_POST){
        let newpost = {
            post:state.newposttext,
            likes:11
        }
        state.posts.push(newpost);
        state.newposttext = '';
    }
    else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newposttext = action.text;
    }
    return state;
};

export const addPostActionCreator = () => ({type:ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,text:text});