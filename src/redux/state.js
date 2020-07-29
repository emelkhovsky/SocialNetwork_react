let rerenderEntireTree = () =>{

};

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

let state = {
    dialog: {
        dialog_list:dialog_list
    },
    profile: {
        posts: posts,
        newposttext:'text'
    }
};

export const addPost = () =>{
    let newpost = {
        post:state.profile.newposttext,
        likes:11
    }
    state.profile.posts.push(newpost);
    state.profile.newposttext = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (post) =>{
    state.profile.newposttext = post;
    rerenderEntireTree(state);
};

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
};

export default state;