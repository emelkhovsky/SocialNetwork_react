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
        posts: posts
    }
};

export default state;