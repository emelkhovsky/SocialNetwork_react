import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    let new_posts = props.posts.map(el => (<Post post={el.post} likes={el.likes}/>));
    let newPostElement = React.createRef();
    let addpost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea ref={newPostElement} value={props.newposttext} onChange={onPostChange}/>
                <button onClick={addpost} >Add post</button>
            </div>
            <div className={s.posts}>
                {new_posts}
            </div>
        </div>
     );
}

export default Posts;