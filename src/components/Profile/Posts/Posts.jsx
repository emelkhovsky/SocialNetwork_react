import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const Posts = (props) => {

    let profile = props.profile;

    let new_posts = profile.posts.map(el => (<Post post={el.post} likes={el.likes}/>));
    let newPostElement = React.createRef();
    let addpost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea ref={newPostElement} value={profile.newposttext} onChange={onPostChange}/>
                <button onClick={addpost} >Add post</button>
            </div>
            <div className={s.posts}>
                {new_posts}
            </div>
        </div>
     );
}

export default Posts;