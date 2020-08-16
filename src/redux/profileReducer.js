const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 

let posts = [
    {post:'Good day!', likes:12},
    {post:'Love cats', likes:1},
    {post:'Happy new year!', likes:0},
    {post:'My first post, hello everybody!', likes:5}
];

let initialState =  {
    posts: posts,
    newposttext:'text'
};

export const profileReducer = (state=initialState, action) =>{
    if (action.type === ADD_POST){
        let newpost = {
            post:state.newposttext,
            likes:11
        }
        return {
            ...state,
            posts:[...state.posts, newpost],
            newposttext:''
        };
    }
    else if (action.type === UPDATE_NEW_POST_TEXT){
        return {
            ...state,
            newposttext:action.text
        };
    }
    return state;
};

export const addPostActionCreator = () => ({type:ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,text:text});