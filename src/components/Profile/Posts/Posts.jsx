import React from "react";
import s from './Posts.module.css'
const Posts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPostContainer();
    };
    let onPostChange = (event) =>{
        let text = event.target.value;
        props.onPostChangeContainer(text);
    };
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea ref={newPostElement} value={props.newposttext} onChange={onPostChange}/>
                <button onClick={addPost} >Add post</button>
            </div>
            <div className={s.posts}>
                {props.new_posts}
            </div>
        </div>
     );
}

export default Posts;